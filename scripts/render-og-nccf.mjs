/**
 * Renders docs/nccf/reference/og-nccf-source.html to public/images/og-nccf.png
 * at 1200x630, the size Open Graph and Twitter summary_large_image expect.
 *
 * Run:  node scripts/render-og-nccf.mjs
 *
 * Playwright is not a dependency of this app. This is a one-shot asset build,
 * so the script resolves Playwright from whatever copy is already on the
 * machine and never downloads a browser. Set PLAYWRIGHT_MODULE or PW_CHROMIUM to point
 * at another install or another Chromium binary.
 */
import { pathToFileURL } from 'url'
import { join } from 'path'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')

const root = process.cwd()
const source = join(root, 'docs/nccf/reference/og-nccf-source.html')
const out = join(root, 'public/images/og-nccf.png')

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
)
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})

await page.goto(pathToFileURL(source).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)

// Fail loudly rather than shipping a card set in a fallback face.
const faces = await page.evaluate(() => ({
  darker: document.fonts.check('600 120px "Darker Grotesque"'),
  familjen: document.fonts.check('700 26px "Familjen Grotesk"'),
}))
if (!faces.darker || !faces.familjen) {
  throw new Error(`webfonts did not load: ${JSON.stringify(faces)}`)
}

const fit = await page.evaluate(() => window.fitHeadline())
console.log('headline fit:', fit)

await page.screenshot({ path: out, type: 'png' })
await browser.close()
console.log('wrote', out)
