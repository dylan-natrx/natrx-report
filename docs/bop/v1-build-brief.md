# BOP v1 build brief (original)

Moved verbatim out of `CLAUDE.md` on 2026-11-05. This is what was planned for v1, before the build. What actually shipped, and every change since, is in `docs/PROJECT_STATUS.md` and `docs/SESSION_HANDOFF.md`. The locked editorial rules stay in `CLAUDE.md`. Some paths below predate the 2026-07 platform restructure and the 2026-08-27 repo hygiene pass (see `NOTES.md`).

---

### Palette (CSS custom properties, named exactly)

```
--bg-deep:      #061321   /* page background, deepest navy */
--bg-mid:       #0E2236
--bg-soft:      #15314A
--land:         #04101C   /* land mass fill on map (darker than bg, recessive) */
--land-edge:    rgba(70, 110, 145, 0.18)
--teal:         #137D76   /* Natrx primary teal */
--teal-bright:  #2BA8A0   /* accent, italic emphasis */
--teal-aqua:    #6FE3D0   /* highest-suitability sites, scores */
--ivory:        #F2EDE3   /* primary text */
--ivory-dim:    #B8B0A0   /* secondary text, lede */
--ivory-faint:  #6E6859   /* tertiary, eyebrow, captions */
--rule:         rgba(242, 237, 227, 0.12)
--rule-soft:    rgba(242, 237, 227, 0.06)
```

---

## v1 Scope (the five sections, locked)

Build all five sections as a single scrolling experience. Each section inherits the visual language above. The two custom maps (Map 1 in § 1, Map 2 inside § 3) share Mapbox GL JS with the same custom dark inline style.

### § 1 — Hero (no reader-facing eyebrow)
Topbar with partnership lockup. Headline ("Restoring New York Harbor's Oyster Reefs. But where?") + lede on the left, four-stat stack on the right (78 sites, 2,604 ac, 1 billion goal, 9 variables). Two-column figure: left panel with Fig. 1 caption, top-ranked sites list, suitability legend; right panel with **Map 1**. Footer with logo lockup and methodology line.

**Map 1** is the confidence-builder: reader lands, sees the harbor, understands scope in one glance. Mapbox GL JS, custom inline dark style. All 78 sites rendered as a single circle layer (centroids sized by acreage, colored by composite score using the locked gradient stops). Top-10 sites get a 1.15× radius and a pulsing teal halo. Land masses from `nyc-boroughs.geojson`, `nj-shoreline.geojson`, `westchester.geojson`. Borough labels in JetBrains Mono uppercase; water-body labels (Upper Bay, Lower Bay, Raritan Bay, Jamaica Bay, East River, Hudson River, Arthur Kill) in Fraunces italic. No pan, zoom, click, popup, or layer toggle. Hover tooltip only.

### § 2 — The stakes and the problem
Plain-language version of two beats, combined:

1. **The stakes.** New York Harbor as one of the richest estuaries in the world. Oysters as a keystone species. The collapse of the reefs and the ecosystem services they provided. BOP's mission to deploy one billion oyster spat by 2035. The Allee effect as the reason concentration matters.
2. **The problem.** 78 candidate sites. BOP's established per-site instrumentation method as rigorous, expensive, and not scalable. The 30 percent design bottleneck. The absence of an analytical layer that could compare candidates against one another at scale.

No fancy data visualizations in this section. Text-led, editorial. Headline + two paragraphs + section break.

### § 3 — The methodology, made visible (Map 2 + spectra panel + top-ranked callouts)
This is the teaching section. The reader watches site suitability emerge from layered data through a guided, reader-controlled walkthrough.

**Map 2 + spectra panel — six-step guided sequence.** Same Mapbox style as Map 1, same site geometry. A controller walks the reader through six states with smooth (~600ms ease-in-out) color interpolation between steps. Reader controls progression with Previous and Next; no free exploration. Beside the map, a spectra panel renders custom SVG curves that stack as each variable is introduced.

1. **Salinity (the Goldilocks variable).** Curve: optimum window, hump shape, ~16 PSU peak.
2. **Add chlorophyll-a (food, with a catch).** Curve: linear, with a hatched "eutrophication danger zone" above ~20 µg/L.
3. **Add dissolved oxygen (the limiter).** Curve: step function across the % of measurements below 3 mg/L hypoxia threshold. After this step, surface the composite formula `(sal + chla) / 2 × DO` for the curious reader, with an honest note that the literal math is not a three-way intersection and the stacked-curves visual teaches the *concept* of stacked constraints.
4. **Add wave exposure (Natrx Assess).** Map overlays a wave-exposure flag on flagged sites. Spectra panel adds a wave-exposure suitability curve framed as a teaching visualization of the ecological logic, not a scored input.
5. **Add shoreline erosion (Natrx Assess).** Map overlays an erosion flag. Spectra panel does *not* add a curve; instead a small annotation reads "Erosion is a flag, not a curve. Sites near actively eroding shorelines are tagged for the co-benefit story."
6. **The practical filters.** Map overlays parkland, CSO, and MS4 proximity flags. Section closes by noting these are constraints, not scores.

**Top-ranked site callouts (nested inside § 3, after the walkthrough).** Three editorial cards, in rank order:
- **Arthur Kill, #1, 0.87.** The redemption arc. Staten Island's historically industrial west shore now leads the harbor on combined salinity, chlorophyll-a, and dissolved oxygen.
- **Living Breakwaters cluster, #2–7, 0.74–0.79.** Independent validation of an iconic resilience installation. Six sites within the SCAPE-designed system rank in the top seven.
- **Wolfe's Pond, #8, 0.65.** Staten Island park site, publicly accessible, strong across every variable.

Visuals for the callouts can pull from `BOP_Wave_Analysis_Report.pdf` (per-site aerial + shoreline change overlay + wind rose).

### § 4 — What the analysis made visible
The section title is "What the analysis made visible." No "unexpected," no "surprise," no "discovery." See the Section 4 framing rule under Tone Rules.

Two beats, plus a closing thread:

1. **The co-benefit.** Many top-ranked sites sit adjacent to actively eroding shorelines. Oyster reefs function as natural breakwaters. The *Natrx Assess* shoreline change analysis (MEIP methodology, NAIP imagery 2010 to present) identifies which sites deliver biodiversity restoration and shoreline protection from a single intervention. This is the kind of multi-variable insight Assess is built to produce.
2. **Data confidence and where to invest next.** The framework also surfaced where observational data is robust and where it is thin. Sites already in design carry strong data because they have been studied. Some top-ranked candidates carry less observational support because they have not been studied as deeply. BOP can target additional monitoring exactly where it would compound the value of the analysis. The methodology is honest about its own uncertainty, and that honesty is itself a deliverable.

**Closing thread (single italic line, ~35 words):** Assess and the team's expertise didn't just answer *which sites.* They answered *which sites, with what confidence, and where additional investment should go next.*

### § 5 — What this enables (portability)
The portability story. Coastal districts, port authorities, state agencies, foundations, NGOs all face the same prioritization decision. The methodology charts a third path between site-by-site instrumentation that does not scale and habitat-suitability models that demand continuous data most environments cannot supply. Named comparable estuaries: San Francisco Bay, the Chesapeake. The methodology is the deliverable, not the New York Harbor result alone.

Close with a short paragraph on the ongoing partnership: BOP plans more monitoring this summer; the framework can re-run with updated inputs without rebuilding the scoring system. Natrx's broader position (*Assess* for analytical capability, Address for fabrication, the field track record) as the answer to the full question from where to act through what to deploy. **No CTA. No "talk to us." No button-styled links.**

Footer with full credits, partnership lockup, methodology line, and links to BOP and Natrx (text links, not buttons).

### Page chrome — persistent right-edge drawer

A single persistent affordance on the right edge of the viewport, visible across every section, opens a slide-out drawer with two panels:

- **Glossary.** ~18 plain-language definitions: Eastern oyster, salinity / PSU, chlorophyll-a, dissolved oxygen / hypoxia, Habitat Suitability Index, composite score / DO-modifier, confidence interval, fetch-limited wave modeling, shoreline change analysis (MEIP), NAIP imagery, CSO, MS4, subtidal vs intertidal, Allee effect, spat, keystone species, estuary, bathymetry. Drawn from `BOP_Master_Document_Final.pdf` and `_overview-documents/Natrx_x_Billion_Oyster_Project_Overview.docx`.
- **Press contact.** Dylan DiBona, press contact email, a one-line note that source materials (the BOP-Natrx Master Document, the Wave & Shoreline Change Analysis Report, per-site data) are available to reporters on request, and an invitation framed as editorial outreach not a commercial channel.

**Inline glossary terms** in body copy use `<GlossaryTerm termId="...">term</GlossaryTerm>` (see [src/components/ui/GlossaryTerm.tsx](src/components/ui/GlossaryTerm.tsx)). Clicking opens the drawer scrolled to the matching entry. Term ids are defined in [src/components/chrome/glossary-data.ts](src/components/chrome/glossary-data.ts).

**Interaction:** slide in from the right, 300ms ease-out, light backdrop dim. Close by clicking the backdrop, pressing Escape, or tapping the edge affordance again. Mobile collapses the edge affordance to a round button in the lower-right corner and the drawer covers most of the viewport.

---

## Tech stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS, with the design tokens above wired into `tailwind.config.ts` as the source of truth
- **Type:** Inter, Fraunces, JetBrains Mono via `next/font/google`
- **Maps:** Mapbox GL JS (the `react-map-gl` wrapper is fine if it stays out of the way; raw Mapbox GL JS is also fine)
- **Animation:** Framer Motion for choreography, scroll-tied transitions, page transitions
- **PDF generation:** Puppeteer if running on Vercel serverless functions (use `@sparticuz/chromium` for the Lambda-compatible build), or `@react-pdf/renderer` if we want pure React-side rendering. Pick the simpler one given Vercel constraints.
- **Data:** Static GeoJSON files served from `/public`. No DB needed.
- **Deploy:** Vercel
- **Repo:** GitHub under `dylan-natrx`

---

## Data files in this folder

- **`BOP_Feb2026_Pipeline_Rankings.geojson`** — the authoritative source. 78 sites with multipolygon geometries (WGS84), rank, score, ConfidenceRule, status, waterbody, acreage, six flags. Use this for the map polygons and rankings.
- **`BOP_Feb2026_Pipeline_statistics.geojson`** — same 78 sites with the rich underlay: bootstrap 95% CIs for salinity / Chl-a / DO, distance-to-nearest-monitoring-station, depth distribution, full erosion threshold breakouts. Use this for the § 05 site detail panel.
- **`final_assessment.xlsx`** — same content as Rankings GeoJSON in spreadsheet form. Redundant for this build.
- **`BOP_Master_Document_Final.pdf`** — 44-page engagement deliverable. Source for § 06 methodology content. Note: Tables 12–15 in this document have known data discrepancies vs the GeoJSON for some flag values (Wave Exposure / Erosion / etc.). Always trust the GeoJSON, not the PDF tables.
- **`BOP_Wave_Analysis_Report.pdf`** — 53-page per-site reference, programmatically generated and Natrx-branded. Each site gets one page with aerial image + shoreline change overlay, wind rose, wave point analysis. Visually compelling, reusable as imagery for site detail panels. Worth asking Nick later whether the underlying tabular data and plotting code can be shared so we can render web-native interactive versions; for v1, embedding the static images is fine.
- **`hero_reference.html`** — the canonical visual reference. Open in a browser to see the target register. Port its map to React/Mapbox in § 01 of the build.
- **`Natrx_Logo_and_Tagline_-_White.png`** — Natrx logo, white on transparent.
- **`bop.png`** — Billion Oyster Project shield logo.

---

## Out of scope for v1

- Any feature requiring authentication or user accounts
- Server-side data persistence (no DB, no Supabase)
- Search / filter UI beyond the layer toggles
- Spanish or other-language localization
- Email signup, newsletter, social embeds
- Analytics integration beyond Vercel Analytics if it's free
- Anything that requires BOP's content team to review/approve before publish (this build assumes the locked editorial decisions above)

---

## Workflow

1. Scaffold the project, confirm structure with the user before adding code beyond the scaffold.
2. Build § 01 first, port the hero from `hero_reference.html` to React + Mapbox. Get sign-off on visual fidelity before moving on.
3. Build § 02–§ 06 in order. Show preview deploys (Vercel) at the end of each section.
4. Hold deployment of the production URL until v1 is feature-complete and the user has reviewed the full piece.
