/**
 * How many miles of shoreline do the 39 layers actually account for?
 *
 *   node scripts/nccf-shoreline-length.mjs
 *
 * Written because the page runs 2,900 miles in four places, Natrx's CTO has
 * twice marked that wrong and said 2,500, and neither figure is derivable
 * from the data the page is built on. This prints every measure so the gap is
 * visible rather than argued about.
 *
 * Two ways to measure, and they disagree by about 11 percent.
 *
 * RECT_WIDTH is the data's own answer to "what stretch does this transect
 * stand for". Summing it over all 93,418 transects gives 1,551 miles, and
 * that is the ceiling: no subset can exceed it.
 *
 * POLYLINE walks the transect points in id order within each layer and sums
 * the geodesic distance between neighbours. Gaps above 200 feet are jumps
 * between disjoint runs, not shoreline, so they are excluded. That gives
 * about 1,725 miles, plus roughly 60 miles of run ends the point-to-point
 * walk cannot see.
 *
 * Neither reaches 2,500, let alone 2,900. Both of those are Nick's figures
 * for the project footprint "including internal water features", recorded in
 * CLAIMS.md, and they are not computations over these layers.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const DIR = 'src/app/projects/nccf/data/layers'
const FT_PER_MI = 5280
const EARTH_FT = 20902231
const BREAK_FT = 200 // above this, consecutive points are separate runs

const files = readdirSync(DIR).filter((f) => f.endsWith('.geojson')).sort()

function geodesicFt([lon1, lat1], [lon2, lat2]) {
  const p1 = (lat1 * Math.PI) / 180
  const p2 = (lat2 * Math.PI) / 180
  const dp = p2 - p1
  const dl = ((lon2 - lon1) * Math.PI) / 180
  const h = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2
  return 2 * EARTH_FT * Math.asin(Math.min(1, Math.sqrt(h)))
}

const rows = []
let polyFt = 0
let runs = 0

for (const f of files) {
  const feats = JSON.parse(readFileSync(join(DIR, f), 'utf-8')).features
  for (const ft of feats) {
    rows.push({
      w: ft.properties.rect_width,
      rate: ft.properties.land_change_ft_per_year,
      r2: ft.properties.r_squared,
      geom: ft.geometry != null,
      coords: ft.geometry?.coordinates,
    })
  }
  const pts = feats
    .filter((x) => x.geometry)
    .sort((a, b) => a.properties.id - b.properties.id)
  let inRun = false
  for (let i = 1; i < pts.length; i++) {
    const d = geodesicFt(pts[i - 1].geometry.coordinates, pts[i].geometry.coordinates)
    if (d <= BREAK_FT) {
      polyFt += d
      if (!inRun) { runs++; inRun = true }
    } else {
      inRun = false
    }
  }
}

const mi = (sel) => {
  const v = rows.filter(sel)
  return [v.length, v.reduce((s, r) => s + r.w, 0) / FT_PER_MI]
}

console.log('sum of rect_width, the stretch each transect represents')
const table = [
  ['all transects', () => true],
  ['eroding only (rate < 0)', (r) => r.rate < 0],
  ['excluding null geometry', (r) => r.geom],
  ['the null-geometry features alone', (r) => !r.geom],
  ['eroding and has geometry', (r) => r.rate < 0 && r.geom],
  ['r squared >= 0.5', (r) => r.r2 >= 0.5],
]
for (const [label, sel] of table) {
  const [n, m] = mi(sel)
  console.log(`  ${label.padEnd(34)} n=${String(n).padStart(6)}  ${m.toFixed(1).padStart(8)} mi`)
}

const ceiling = mi(() => true)[1]
console.log()
console.log('geodesic polyline through the transect points')
console.log(`  within-run gaps only (<= ${BREAK_FT} ft)        ${(polyFt / FT_PER_MI).toFixed(1).padStart(8)} mi`)
console.log(`  plus ~half a spacing at each run end     ${((polyFt + runs * 110) / FT_PER_MI).toFixed(1).padStart(8)} mi  (${runs} runs)`)
console.log()
console.log(`ceiling from this data: ${ceiling.toFixed(1)} mi. 2,500 would need ${(2500 / ceiling).toFixed(2)}x that, 2,900 would need ${(2900 / ceiling).toFixed(2)}x.`)
