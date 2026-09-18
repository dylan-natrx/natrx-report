/**
 * Render gate for pruning dead CSS out of the NCCF fragment.
 *
 * node harness/nccf/css-diff.mjs <before.html> <after.html>
 *
 * Exits non-zero if any captured state differs by a single pixel. A text
 * scan is not enough here: the first attempt at this prune was reverted
 * because it silently cost 52px of mobile footer clearance, which only a
 * render catches.
 *
 * Two traps this harness exists to avoid.
 *
 * 1. Charset. The fragment carries no <meta charset> because route.ts adds
 *    it when it wraps the fragment in a document. Loaded over file:// the
 *    browser sniffs instead, the two copies can be sniffed differently, and
 *    the headline reflows as mojibake and reports a false 24px regression.
 *    Both copies get a charset injected here before anything is measured.
 *
 * 2. The camera. Each interactive stop animates its viewBox over 900ms.
 *    Capturing before it lands reports a phantom sub-pixel diff, so every
 *    stop is given 2000ms to settle.
 *
 * The reduced-motion pass is not decoration. Rules living inside
 * @media(prefers-reduced-motion:reduce) never apply in a default render, so
 * an edit to one of them is invisible to every other state in this list.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { PNG } from '../node_modules/pngjs/lib/png.js'
import pixelmatch from '../node_modules/pixelmatch/index.js'

const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ||
    '/Users/dylandibona/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs'
)

const [beforeSrc, afterSrc] = process.argv.slice(2)
if (!beforeSrc || !afterSrc) {
  console.error('usage: css-diff.mjs <before.html> <after.html>')
  process.exit(2)
}

const tmp = '/tmp/nccf-cssdiff'
mkdirSync(tmp, { recursive: true })

// Both copies get the charset route.ts would have supplied.
function stage(src, name) {
  let html = readFileSync(src, 'utf-8')
  html = '<!doctype html><meta charset="utf-8">\n' + html
  const out = join(tmp, name + '.html')
  writeFileSync(out, html)
  return out
}

const pages = {
  before: stage(beforeSrc, 'before'),
  after: stage(afterSrc, 'after'),
}

const FULL_WIDTHS = [360, 390, 768, 1440]
const DETAIL_WIDTHS = [390, 1440]
const ALL_WIDTHS = [360, 390, 768, 1080, 1440]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function settle(page) {
  await page.evaluate(() => document.fonts.ready)
  // Reveals forced in, exactly as the sweep's own gate did it.
  await page.evaluate(() => {
    document.querySelectorAll('.rv').forEach((e) => e.classList.add('in'))
    document.querySelectorAll('.pl').forEach((e) => e.classList.add('on'))
    document.querySelectorAll('.dec,.decwrap,.ladder').forEach((e) => e.classList.add('in'))
  })
  await sleep(1200)
}

async function openGlossary(page) {
  await page.evaluate(() => document.getElementById('glossBtn')?.click())
  await sleep(700)
}

async function gotoStop(page, n) {
  await page.evaluate((i) => {
    const b = document.querySelector(`.labstep button[data-step="${i}"]`)
    b?.click()
  }, n)
  await sleep(2000) // the viewBox camera runs 900ms; give it room to land
}

async function shoot(which, label, width, reducedMotion, prepare) {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: reducedMotion ? 'reduce' : 'no-preference',
  })
  const page = await ctx.newPage()
  await page.goto('file://' + pages[which], { waitUntil: 'networkidle' })
  await settle(page)
  if (prepare) await prepare(page)
  const buf = await page.screenshot({ fullPage: true, type: 'png' })
  await browser.close()
  return buf
}

const states = []
for (const w of FULL_WIDTHS) states.push({ label: `full-${w}`, width: w, rm: false })
for (const w of DETAIL_WIDTHS) {
  states.push({ label: `glossary-${w}`, width: w, rm: false, prepare: openGlossary })
  for (const n of [0, 1, 2])
    states.push({ label: `stop${n}-${w}`, width: w, rm: false, prepare: (p) => gotoStop(p, n) })
  states.push({ label: `reduced-motion-${w}`, width: w, rm: true })
}

let failures = 0
console.log('state                  size            diff px')
console.log('-----------------------------------------------')
for (const s of states) {
  const a = await shoot('before', s.label, s.width, s.rm, s.prepare)
  const b = await shoot('after', s.label, s.width, s.rm, s.prepare)
  const pa = PNG.sync.read(a)
  const pb = PNG.sync.read(b)
  if (pa.width !== pb.width || pa.height !== pb.height) {
    console.log(
      `${s.label.padEnd(22)} ${String(pa.width + 'x' + pa.height).padEnd(15)} SIZE MISMATCH vs ${pb.width}x${pb.height}`,
    )
    failures++
    continue
  }
  const diff = new PNG({ width: pa.width, height: pa.height })
  const n = pixelmatch(pa.data, pb.data, diff.data, pa.width, pa.height, { threshold: 0 })
  console.log(`${s.label.padEnd(22)} ${String(pa.width + 'x' + pa.height).padEnd(15)} ${n}`)
  if (n !== 0) {
    writeFileSync(join(tmp, `diff-${s.label}.png`), PNG.sync.write(diff))
    writeFileSync(join(tmp, `before-${s.label}.png`), a)
    writeFileSync(join(tmp, `after-${s.label}.png`), b)
    failures++
  }
}

console.log('-----------------------------------------------')
if (failures) {
  console.log(`FAIL: ${failures} state(s) differ. Artifacts in ${tmp}`)
  process.exit(1)
}
console.log(`PASS: all ${states.length} states pixel identical.`)
