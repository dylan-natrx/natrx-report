import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * The tenant root serves the current design of record —
 * docs/nccf/reference/vanishing-edge-draft2.html — behind the platform
 * gate (this segment sits inside the middleware matcher).
 *
 * The reference file is a FRAGMENT, not a complete document: it begins at
 * <title> and carries no doctype, <html>, <head> or viewport meta, because
 * it is authored for the Artifact tool, which injects its own skeleton.
 * Served raw, a phone lays it out at ~1000px and no max-width breakpoint
 * ever fires. So the handler wraps it in a real document — once, at module
 * load. The fragment's own leading <title>/<link>/<style> are hoisted into
 * <head> by the HTML parser, which handles this correctly; the fragment's
 * contents are not reformatted, so the file stays byte-editable in the
 * design loop and keeps its identity as the artifact of record.
 *
 * The file is read from disk once at module load — the literal
 * process.cwd() join is what Vercel's output file tracing follows to
 * include the file in the deployed function. Do not refactor it into a
 * variable or helper. It is deliberately NOT in public/ (the /data
 * exclusion in the middleware matcher makes public/ world-readable).
 */

const fragment = readFileSync(
  join(process.cwd(), 'docs/nccf/reference/vanishing-edge-draft2.html'),
  'utf-8',
)

// Share metadata lives in the wrapper, not the reference file. og:title
// mirrors the fragment's own <title> so a future title decision propagates
// without touching this handler.
//
// og:image was previously deferred until a pass-2 render of the interactive
// existed. That is reversed. The interactive is a hairline coastline carrying
// 780 aggregated stretches, and a feed thumbnail gives it roughly 250px, at
// which it turns to mush. The card carries the headline instead, which is the
// one thing that survives the size. It is composed for a 1200x630 frame
// rather than cropped out of the page, so the type is set for the box it is
// read in: source frame at docs/nccf/reference/og-nccf-source.html, rendered
// to public/images/og-nccf.png by scripts/render-og-nccf.mjs. Re-run that
// script after any headline change, or the card will quote a dead headline.
const pageTitle =
  fragment.match(/<title>(.*?)<\/title>/)?.[1] ?? 'nccf.natrx.report'
const description =
  'Ten years of shoreline change, measured along 2,900 miles of eastern ' +
  'North Carolina’s coast. Nearly half of the land lost came from one ' +
  'tenth of the shoreline.'

const imageAlt =
  'Title card on paper. The headline reads “Fighting North Carolina’s ' +
  'coastal erosion starts with knowing where to begin.”, with the second ' +
  'clause in green, above the NCCF × Natrx lockup.'

// REMOVE AT LAUNCH: delete the robots line below, and nothing else in this
// file changes. The page went public on 2026-09-18 ahead of the Federation's
// announcement, so it is reachable but must not be indexed until they have
// announced it. Deleting this one line is the whole of turning indexing on.
//
// This deliberately does not stop the link previewing. Slack, iMessage and
// LinkedIn read the og: tags and ignore robots entirely, so a shared link
// still unfurls with the card. noindex governs search engines, not unfurlers,
// which is exactly the split we want while the page is quietly open.
const meta =
  '<link rel="icon" href="/images/favicon.png">' +
  '<meta name="robots" content="noindex, nofollow">' +
  `<meta name="description" content="${description}">` +
  `<meta property="og:title" content="${pageTitle}">` +
  `<meta property="og:description" content="${description}">` +
  '<meta property="og:type" content="article">' +
  '<meta property="og:site_name" content="natrx.report">' +
  '<meta name="twitter:card" content="summary_large_image">'

// og:image must be absolute, and this page answers on several origins
// (localhost in the design loop, the Vercel preview domain, and
// nccf.natrx.report), so the origin is taken from the request instead of
// being hardcoded. Behind Vercel's proxy the forwarded headers carry the
// origin the reader actually asked for; request.url is the fallback for a
// direct hit. That is the only reason the document is assembled per request
// rather than at module load. The fragment is still read from disk once.
function originOf(request: Request) {
  const host =
    request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  const proto =
    request.headers.get('x-forwarded-proto') ??
    new URL(request.url).protocol.replace(':', '')
  return host ? `${proto}://${host}` : new URL(request.url).origin
}

function documentFor(origin: string) {
  return (
    '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    meta +
    `<meta property="og:image" content="${origin}/images/og-nccf.png">` +
    '<meta property="og:image:width" content="1200">' +
    '<meta property="og:image:height" content="630">' +
    `<meta property="og:image:alt" content="${imageAlt}">` +
    fragment +
    '</body></html>'
  )
}

export const dynamic = 'force-dynamic'

export function GET(request: Request) {
  return new Response(documentFor(originOf(request)), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}
