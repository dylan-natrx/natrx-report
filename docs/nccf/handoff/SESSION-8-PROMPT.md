# NCCF page: session 8 handoff

Run this as a single Opus agent. No subagents. The work is three small, sequential
tasks with a verification step each; fanning them out costs more than it saves.

## Repo and page

- Repo: `~/mnt/_natrx.report-pages/bop_storytelling_tool`
- Page of record: `docs/nccf/reference/vanishing-edge-draft2.html`
- Wrapper and share meta: `src/app/projects/nccf/route.ts`
- Platform stylesheet: `src/app/projects/nccf/styles/nccf.css` (also serves the
  login and scaffold pages, so never scope a change to it off this page alone)
- Local: `PLATFORM_DEFAULT_TENANT=nccf npm run dev`, then localhost:3000

**The route reads the HTML once at module load.** Hot reload will not pick up a
fragment edit. Restart the dev server after every change or you will review a
stale page and conclude the edit did not work.

Read `docs/nccf/STATUS.md` from the 2026-09-18 entry backward before starting.

## House rules

No em dashes, ever, including in commit messages and code comments. Never the
"it's not x, it's y" construction. Curly quotes and apostrophes throughout the
page copy. Complete sentences. Apply Dylan's copy verbatim when he supplies it;
if a line of his collides with `CLAIMS.md`, flag it and stop rather than
resolving it quietly.

## Task 1: OG image

Currently there is no `og:image`. The comment in `route.ts` says it is deferred
pending a pass-2 interactive render. That decision is reversed: the interactive
turns to mush at thumbnail size. Use the headline instead.

Build `public/images/og-nccf.png` at 1200x630:

- Paper background `#FAFAFA`, matching the page
- The h1 set as it is on the page, ink `#121D54` with the second clause in
  `--em` `#2C7F6D`, at a size that fills the frame with generous margins
- The NCCF x Natrx masthead lockup beneath it, in the page's existing treatment
- Same fonts as the page (Darker Grotesque / Familjen Grotesk / IBM Plex Mono)

Render it with Playwright against a purpose-built 1200x630 HTML file rather than
cropping a screenshot of the live page, so the type is composed for the frame.
Chromium is at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`; do not run
`playwright install`.

Then wire it into `route.ts`: add `og:image`, `og:image:width`, `og:image:height`
and `og:image:alt`, and replace the deferral comment with what was actually done
and why. The absolute URL matters for scrapers, so build it from the request
origin rather than hardcoding a host.

Verify by fetching the rendered page and confirming all four tags are present
with an absolute URL, and by viewing the PNG at 600x315 to check it still reads
at half size.

## Task 2: STATUS.md

`STATUS.md` was last written 2026-09-02 and is three sessions behind. It still
lists items that are closed, which is how this session started by re-reporting
work that was already done.

Add a 2026-09-18 entry covering, and correct the stale open list against the
page rather than against the previous entry:

- The scale bar bleed. Root cause was a 4.6px dot pitch inside a 26px bar, which
  closed into a solid band at device pixel ratio 1 and only looked correct in
  renders taken at 3x. Now pitch 7.5, dot 2.85, `#tbDot` at radius .20 / blur .42.
  Record the 1x verification rule so this is not diagnosed a fourth time.
- Rail navigation. Jumps queued the reveal stagger across every skipped block,
  so a jump past several beats replayed everything before showing the target.
  Reveals now fire together while `jumping` is set, and the landing is
  re-asserted on `scrollend` because three unsized images decoded mid-flight and
  moved the target after `scrollIntoView` had fixed its stop point.
- One green. `--em: #2C7F6D` at 4.61:1 replaces `--tint` (2.76:1) and the
  headline's `#2E8371` (4.37:1) on every `em` that sits on paper. The pull-quote
  `em` stays `#7FD8C4` on the ink block at 9.42:1.
- 72 dead CSS rules removed, 6.6KB, gated on a render diff. Note the method,
  because the text-scan version of this was reverted once: walk
  `document.styleSheets` in a real browser at five widths with reveals forced in,
  the glossary open and all three interactive stops visited; keep any selector
  whose class or id token appears anywhere in the fragment's markup or script;
  scope to the fragment's own style blocks only. Note the charset trap too, that
  the fragment has no `<meta charset>` so a `file://` diff needs one injected or
  mojibake reflows the headline and reports a false 24px regression.
- Git housekeeping: the stale lock files and 188 orphaned `tmp_obj_*` objects are
  deleted. The Insync lock problem itself is unchanged.

Close these in the open list, with the reason: Beat 5's "hardest hit overall"
(the line now reads Dare fastest, Hyde close behind, fixed in `e78218b`), the
page title (set, and Dylan has confirmed it stays), the favicon, the `em`
contrast, and the dead CSS.

## Task 3: Federation caveat, only if Dylan has given you the line

**Do not draft this yourself and do not invent a form of words.** It is the one
blocker for client review and it is his call.

The problem: removing the interactive's captions took out the only place on the
page saying the Federation's own priorities helped set which stretches got
measured. The 2026-09-02 SOW correction requires both halves of that sequence
wherever the page describes it, and the Beat 4 prose does not currently carry it.
The only near-hit on the page is Boyd's "Now we have the shorelines prioritized,"
which is about the output, not about the inputs.

If he has supplied the line, place it in Beat 4 where the method is described,
apply it verbatim, and record it in `EDITORIAL.md` and `CLAIMS.md`. If he has
not, leave the page alone and say so.

## Finishing

Commit each task separately with a message that says what was measured, not just
what was changed. End every commit message with:

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
```

Do not push. Dylan pushes from his own terminal; this machine has no GitHub
credentials and a `git push` here fails with a username prompt. Tell him the
commits are ready and give him the `cd` and `git push origin main` command.

If `git` reports `index.lock` or `HEAD.lock` cannot be created, that is the
Insync sync problem, not a running git process. Move the lock aside
(`mv .git/index.lock .git/.stale-$(date +%s%N)`) and retry, then delete the
stale file when you are done so it does not accumulate again.
