/**
 * Recomputes the concentration-of-loss figure for Beat 5 from the 39 layers.
 *
 *   node scripts/nccf-concentration.mjs
 *
 * Exists because 43.44 was re-derived from scratch twice, and the second time
 * it did not reproduce. It does reproduce, under one specific method, and this
 * script pins that method down alongside the alternative so the two are never
 * confused again.
 *
 * Two different questions are computed here.
 *
 * EQUAL WEIGHT is the published method, recorded in CLAIMS.md as "all ~76k
 * eroding points equally weighted". Rank the eroding transects by rate, take
 * the top tenth BY COUNT, and report their share of the SUMMED RATE. This
 * reproduces 43.44 and every other decile in nccf-figdata.json.
 *
 * LENGTH WEIGHT is what the sentence on the page actually describes: "nearly
 * half of all the land lost came from one tenth of the eroding shoreline".
 * Rank by rate, take the top tenth of the eroding shoreline BY LENGTH, and
 * report their share of LAND LOST, which is rate times the length each
 * transect represents. This gives 45.81.
 *
 * The two differ because rect_width, the stretch each transect stands for,
 * runs from 1 to 173 feet. Equal weighting treats a 1ft transect and a 173ft
 * transect as the same amount of coast.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const DIR = 'src/app/projects/nccf/data/layers'
const files = readdirSync(DIR).filter((f) => f.endsWith('.geojson')).sort()

const eroding = []
let total = 0
for (const f of files) {
  const gj = JSON.parse(readFileSync(join(DIR, f), 'utf-8'))
  for (const ft of gj.features) {
    total++
    const rate = ft.properties.land_change_ft_per_year
    const w = ft.properties.rect_width
    if (rate < 0) eroding.push({ retreat: -rate, w })
  }
}
eroding.sort((a, b) => b.retreat - a.retreat)

const N = eroding.length
const sumRate = eroding.reduce((s, x) => s + x.retreat, 0)
const sumLen = eroding.reduce((s, x) => s + x.w, 0)
const sumLoss = eroding.reduce((s, x) => s + x.retreat * x.w, 0)

console.log(`layers ${files.length}   transects ${total}   eroding ${N}`)
console.log(`eroding shoreline ${(sumLen / 5280).toFixed(1)} mi   loss ${sumLoss.toFixed(0)} sq ft/yr`)
console.log()

// EQUAL WEIGHT: deciles by count, share of summed rate. Reproduces figdata.
const equal = []
for (let d = 0; d < 10; d++) {
  const a = Math.floor((N * d) / 10)
  const b = Math.floor((N * (d + 1)) / 10)
  let s = 0
  for (let i = a; i < b; i++) s += eroding[i].retreat
  equal.push((100 * s) / sumRate)
}

// LENGTH WEIGHT: deciles by cumulative length, share of land lost.
const lengthW = []
let idx = 0
let acc = 0
for (let d = 1; d <= 10; d++) {
  const target = (sumLen * d) / 10
  let loss = 0
  while (idx < N && acc + eroding[idx].w <= target) {
    loss += eroding[idx].retreat * eroding[idx].w
    acc += eroding[idx].w
    idx++
  }
  lengthW.push((100 * loss) / sumLoss)
}

console.log('decile   equal weight (published)   length weighted (the sentence)')
for (let i = 0; i < 10; i++) {
  console.log(
    `  ${String(i + 1).padStart(2)}       ${equal[i].toFixed(2).padStart(6)}                     ${lengthW[i].toFixed(2).padStart(6)}`,
  )
}
console.log()

const topCount = Math.floor(N * 0.1)
const topLen = eroding.slice(0, topCount).reduce((s, x) => s + x.w, 0)
console.log(`published top decile          : ${equal[0].toFixed(4)}%  (CLAIMS.md and nccf-figdata.json carry 43.44)`)
console.log(`  those ${topCount} transects cover ${(topLen / 5280).toFixed(1)} mi, ` +
            `${((100 * topLen) / sumLen).toFixed(2)}% of the eroding shoreline, not a tenth`)
console.log(`sentence-matching top decile  : ${lengthW[0].toFixed(4)}%  (a true tenth of the shoreline, by land lost)`)
