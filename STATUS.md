# STATUS: natrx.report (BOP × Natrx and the platform)

Read this at the start of every session. Update it at the end of every session: add a Recent sessions entry (what was done, what went wrong and how it was solved, watch-outs, next step) and refresh Current state and Open items. Rules, architecture and guardrails live in `CLAUDE.md`.

Deeper status lives per project. This file links them rather than copying them:

- BOP: `docs/PROJECT_STATUS.md` (completion detail) and `docs/SESSION_HANDOFF.md` (resume context), both last updated 2026-07-15.
- NCCF: `docs/nccf/STATUS.md`. Its live open list is the one under session 11; earlier open lists there are frozen history.
- Platform and repo housekeeping: `NOTES.md`.

## Current state

Since the snapshot below, work has moved to NCCF (commits from 2026-08-27 to 2026-10-12, latest "NCCF: the page is indexable"). BOP still carries `robots: index: false` in `src/app/projects/bop/layout.tsx`.

The BOP snapshot below moved verbatim from the old `CLAUDE.md`:

**v1 is live at https://bop.natrx.report, ungated but `noindex` (pre-publication; the URL has not been shared).** Last meaningful update: 2026-07-15. All five sections are built, copy is current through the 2026-07-13 client review round, and three client sign-offs remain open (Superfund phrasing, 2030 goal date, § 3 headline). For granular detail (file paths, dates, gotchas, deploy commands), defer to `docs/SESSION_HANDOFF.md` and `docs/PROJECT_STATUS.md` — this block is a high-level snapshot only.

**This repo is now the natrx.report multi-project platform** (restructured in place 2026-07-13/14 per `natrx-report-platform-packet-v2.md`). The platform owns infrastructure (hostname routing, tenant registry, access gate, `/media` redirect, analytics); each project owns its entire design. BOP lives at `src/app/projects/bop/` with its own layout, fonts, and CSS; platform code lives at `src/middleware.ts` + `src/lib/platform/`; a second gated tenant (`demo.natrx.report`) proves isolation, which is enforced by an ESLint rule banning cross-project imports. The apex `natrx.report` 302s to natrx.io. Adding a project = one directory, one registry entry, one DNS record. Never build shared report components or a theming system; two projects looking similar should be a coincidence of taste, never a consequence of architecture.

What's shipped:

- **§ 1 Hero.** Mapbox GL JS, OSM-derived `region-land.geojson` + `hudson-river.geojson` carving the Hudson out of the land mass, all 78 sites as circles colored by composite score, top-10 with pulsing halos, hover tooltip, bidirectional hover between `HeroMap` and `FigurePanel`. Sticky `SectionNav` (4 links + scroll-spy, hamburger on mobile) replaces the original topbar.
- **§ 2 Stakes & problem.** Four-paragraph body opening on the harbor's lost reefs (350 sq mi, 15-foot visibility) and closing on the shift from opportunistic siting to systemwide planning. Carolyn Khoury pullquote between paragraphs 3 and 4. Inline `<GlossaryTerm termId="candidate-site">` link in paragraph 3. Portrait `EditorialImage` of the harbor.
- **§ 3 Methodology, made visible.** Intro + Mike McCann pullquote + six-step `MethodologyWalkthrough` (map 3fr / spectra 2fr / bottom strip with copy + right-anchored controls) + three `TopRankedCallout` cards with live `SiteMiniMap`s (Arthur Kill / Living Breakwaters cluster / Wolfe's Pond). The editorial spine: biology gates steps 1–3, external context overlays at steps 4–6 without filtering, priority halo reveals top-10 inside the suitable set at step 6. Spectra panel uses a two-color treatment (teal biology / amber external).
- **§ 4 What the analysis made visible.** Two `FindingBeat` blocks: shoreline change image for beat 1 ("Oysters and shorelines, one intervention."), `ConfidenceDistributionChart` for beat 2 ("A map of where to invest in more data next.").
- **§ 5 What this unlocks.** Headline "The pipeline becomes operational." Three nested beats (Operational / Institutional / Mission). Institutional carries the EIS detail (NY State environmental impact statement scheduled to conclude end of 2028). Lise Montefiore pullquote (Water Quality and Data Scientist, Natrx) hinges between the three-beat block and the closing portability paragraph. Closes with `nyoyster.webp` (also the OG image).

**Persistent chrome.** `SiteChromeProvider` + right-edge drawer with two tabs. **Glossary** is 25 alphabetized entries; Natrx Assess and any future product entries carry `productName: true` and render with italic + medium-weight `<dt>` styling per the editorial chrome rules. **Press contact** is two side-by-side cards (Andi Cross, BOP Director of Communications, with phone; Dylan DiBona, Natrx press). No CTAs anywhere. `Footer` has the partnership lockup with each logo linked to its org site (natrx.io, billionoysterproject.org).

**Editorial chrome — Natrx Assess.** Every body-text occurrence renders in serif italic + pure white (`text-white`). First occurrence on the page (§ 3 intro: "Two custom data products were generated by Natrx Assess") wraps in `<GlossaryTerm termId="natrx-assess">` so readers can jump to the drawer definition. Subsequent occurrences (§ 4 Beat 1, § 5 closing portability graf, walkthrough steps 4 and 5) carry the same styling but no link. Figure captions are intentionally not styled — chrome, not body voice.

**Analytics.** Vercel Analytics + Speed Insights mount in the **root** layout, so every tenant on the platform is tracked; separate reports by the Hostname filter in the dashboard. BOP carries five typed editorial events (`src/app/projects/bop/lib/track.ts`): `section_reached`, `walkthrough_step`, `drawer_opened`, `glossary_term_clicked`, `top_ranked_viewed`. Enabled in the Vercel dashboard.

**Access.** Governed by the platform gate: a tenant's `accessMode` in `src/lib/platform/tenants.ts` is the single switch (`public` / `gated` / `draft`). BOP is `public` + `robots: noindex` as of 2026-07-15; **remove the noindex at launch** (checklist in `NOTES.md`). Gated tenants use a bcrypt credential hash in the registry and an HMAC session cookie keyed by `PLATFORM_SESSION_SECRET` (set on Vercel; gated tenants fail closed without it). The old `AUTH_*` env vars are gone. Middleware lives in `src/`, not project root (root location is silently ignored on src-layout projects). Vercel Deployment Protection stays **off** so the platform gate is the only gate.

Known dead-code paths kept for inertia (flagged in `NOTES.md` for a later PR): `src/app/projects/bop/components/hero/CoastlineTest.tsx`, `src/app/projects/bop/test-map/`, `src/app/projects/bop/lib/land.ts`, most of `src/app/projects/bop/lib/projection.ts` (only `calculateMarkerRadius` is still used), `src/app/projects/bop/site/[siteId]/` stub. Production maps no longer reference `public/data/nyc-boroughs.geojson` / `nj-shoreline.geojson` / `westchester.geojson` / `upstate-ny-ct.geojson`; they remain only because the diagnostic routes still import them.

## Recent sessions (newest first)

### 2026-11-05: CLAUDE.md split into rules and status

- **Done:** Cut `CLAUDE.md` from 33,380 to 15,859 bytes. It stops about 500 bytes short of the 15 KB target, because the rest is live editorial rules. The locked editorial brief, visual register, page chrome rules, credentials and working rules stay. The Current State snapshot moved here verbatim. The original v1 build brief (palette values, per-section build spec, v1 stack, data file list, out of scope, workflow) moved verbatim to `docs/bop/v1-build-brief.md`, since all five sections are built. No code, schema or config change.
- **Went wrong / solved:** The repo already had status files (`docs/PROJECT_STATUS.md`, `docs/SESSION_HANDOFF.md`, `docs/nccf/STATUS.md`). This file links them instead of duplicating them.
- **Watch-outs:** Some locked rules in `CLAUDE.md` now disagree with what shipped. They were left untouched for Dylan to settle: "Suitability score" vs the shipped "Site score" (May 26 scientific review), the § 5 eyebrow "What this enables" vs the shipped "What this unlocks", the lede's 2035 goal date vs the 2030 date in review, and the glossary placed in § 5 (line in Section labeling) vs in the drawer (Page chrome rules). Several paths in `CLAUDE.md` predate the platform restructure (for example `hero_reference.html` is now at `docs/bop/legacy/hero_reference.html`).
- **Next step:** Dylan reviews this PR.

### Log before 2026-11-05

The old `CLAUDE.md` held no session log. BOP session history is in `docs/SESSION_HANDOFF.md`, `docs/ISSUES_AND_SOLUTIONS.md` and `docs/WHAT_CHANGED_JUNE.md`; NCCF history is in `docs/nccf/STATUS.md`.

## Open items

As of the 2026-07-15 snapshot above (not re-verified in this session):

- Three BOP client sign-offs: Superfund phrasing, the 2030 goal date, the § 3 headline.
- Remove the BOP `noindex` at launch (checklist in `NOTES.md`).
- Dead-code paths listed above, flagged in `NOTES.md` for a later PR.
- NCCF: see the session 11 open list in `docs/nccf/STATUS.md`.
