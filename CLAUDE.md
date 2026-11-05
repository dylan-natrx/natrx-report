# BOP × Natrx — Site Prioritization Tool

A media-grade, public-facing interactive piece that documents the Billion Oyster Project × Natrx site prioritization framework. Targeted at general public readers (NY Times, Wired Magazine, Hakai, Mongabay, Inside Climate News audience), and engineered to function simultaneously as a portfolio object proving Natrx's ability to synthesize messy environmental data into defensible decision frameworks.

The deliverable is a single deployed web experience. It may or may not ship publicly — that decision is downstream — but it should be built to ship.

**Read `STATUS.md` at the start of every session. Update it at the end of every session.** Current state, open items and the session history live there, not here.


---

## Project Goal

Tell the story of how new technology and partnership produced a defensible answer to a hard question: where, across 78 candidate sites in New York Harbor, should Billion Oyster Project prioritize building oyster reefs first, given finite restoration budgets?

The piece must do two jobs simultaneously:

1. **Public storytelling.** Teach a lay reader why prioritizing reef sites is genuinely difficult, what oysters do as ecological infrastructure, and what the framework produced. Accessible, editorial-grade, scannable.
2. **Capability demonstration.** Function as proof that Natrx synthesizes data at expert level, with project-specific constraints, into actionable decision-making. The aesthetic and information density should make a sophisticated reader (potential client, journalist, or partner) come away thinking "they know what they're doing."

---

## Audience

Two overlapping audiences, in priority order:

1. **Reporters and editors at climate and infrastructure outlets.** Bloomberg Green, Grist, Inside Climate News, MIT Tech Review, NYT Climate, Bloomberg CityLab. They will land here from a pitch and need to understand the work fast: what was at stake, what Natrx built, what it surfaced, why it matters at scale.
2. **General public**, science-literate but not technical. Environmental advocates, foundation staff, port authority and coastal infrastructure decision-makers, anyone who cares about urban estuary restoration. Needs jargon translated to plain language, glossary available for the terms that matter.

Not the audience: BOP scientists, Natrx engineers, academic researchers. They have the master document. The tool is downstream.

---

## Locked Editorial Decisions

These have been worked through with the client (Natrx). Do not relitigate without explicit instruction.

### Headline
**Restoring New York Harbor's Oyster Reefs. But where?**

Set in Fraunces serif, the question "But where?" sits on its own line in italic, brand teal. The italicized question is the chromatic and intellectual punctuation of the headline. The headline does not use the words "at scale" anywhere; that framing was rejected as a generic ambition signal.

### Lede
> Oysters are **ecological infrastructure**. A single adult filters fifty gallons of water a day; their reefs build habitat for fish and crabs and dampen the wave energy that erodes shorelines. New York Harbor was once one of the most oyster-rich estuaries on Earth. Restoring those reefs is a multi-decade project, and Billion Oyster Project has set a goal of **one billion oysters by 2035**. **Budgets are finite**. This framework gives BOP a defensible way to prioritize which of **78 candidate sites** and **2,604 acres** of urban estuary get funded first.

The phrase "ecological infrastructure" is intentional and rhymes with Natrx's tagline "Adaptive Infrastructure." Don't underline the connection. A savvy reader will catch it.

### Section labeling

Five-section structure, locked. Remove the § symbol from all reader-facing labels. Use named labels only:

| Internal reference | Reader-facing eyebrow |
|-------------------|------------------------|
| § 1 | (no label, it's the hero) |
| § 2 | "The stakes and the problem" |
| § 3 | "The methodology, made visible" |
| § 4 | "What the analysis made visible" |
| § 5 | "What this enables" |

Top-ranked site callouts live **inside** § 3, not as a standalone section. The glossary lives **inside** § 5, collapsed at the bottom of the page.

Keep numbered § references only in code comments, file names, and internal documentation (like this file). The reader never sees the § symbol.

The older 6-section structure (Framework / Sites Already in Design / Explore the Map / Site Detail / Methodology) is **superseded**. Do not reintroduce it without explicit instruction.

### Tone Rules

- **No em dashes.** Use commas, periods, colons, parentheses, or semicolons. Em dashes are banned project-wide.
- **No "It's not X, it's Y" or "It's not just X, it's Y" constructions.** This is AI cliché. Use direct assertions or "X, not Y" structures instead.
- **No false drama, no manufactured tension, no clever wordplay in headlines.** Direct, confident, forward-looking.
- **"Confidence" must be handled with care.** See the dedicated section below.
- **No "unexpected," "surprise," "discovery," or "happy accident" language anywhere in § 4.** This was the brief Natrx was hired to deliver. The framing is *what the work showed,* not *what we found out.* BOP came to Natrx specifically because Natrx Assess produces wave and shoreline change data and Lise Montefiore's water quality expertise was exactly what was needed. The shoreline erosion data was a deliverable, not a discovery; the data-support inversion is the framework being honest about itself, not a happy accident.
- **Past tense for completed work, present tense for the partnership and the framework.** The 26-week engagement is past. The partnership is ongoing. The framework is in active use ("BOP can now target additional monitoring..."). Named people (Nick Brady, Mike McCann, Lise Montefiore) are present-tense ("Nick Brady leads...," "Lise Montefiore brings...").

### Natrx Assess editorial chrome

Treat *Natrx Assess* the way an editorial feature names a specific tool: identified clearly because accuracy demands it, never promoted.

- **Italic on first reference per section.** Fraunces italic, inline, same weight as surrounding body copy. Don't bold it. Don't link it. Don't pull-quote it.
- **Subsequent references in the same section drop the italic.** Treat it as a proper noun after the first naming.
- **No CTAs anywhere on the page.** No "talk to us," no "request a demo," no button-styled links to Natrx Assess or Address, no contact form, no email capture.
- **Methodology callouts are editorial footnotes, not product cards.** When the body copy names a methodology (MEIP, NAIP imagery, fetch-limited wave modeling) the visual treatment is footnote-style: small Fraunces italic line set apart, not a card with a logo and CTA.

The test: would a New York Times feature on this work name *Natrx Assess* by name? Yes. Would it include a "talk to us" CTA? No. Follow that line.

### What to call things

- **"Suitability score"** = the 0–1 water-quality composite (the rank-driving number). Do not call this "confidence."
- **"Data support"** or **"monitoring coverage"** = the dimension Nick's pipeline calls "ConfidenceRule." Use this language in any public-facing context.
- **"Sites already in design"** = the 11 sites with `Status = "Design"`. Already moving toward construction. Avoid the word "pipeline."
- **"Candidate sites"** = the full pool of 78.
- **"Reef restoration"** = the work. Not "oyster farming," not "aquaculture." NYC's restored oysters are inedible by design (a century of urban runoff still leaves traces; the state prohibits harvest from restoration sites). The case for the work is ecological, not culinary.

### Variable structure

The framework distinguishes three analytical categories:

1. **Water quality** (salinity, chlorophyll-a, dissolved oxygen) — drives the suitability score. These are the rank-driving variables, sourced from public monitoring stations.

2. **Shoreline dynamics** (erosion, wave exposure, depth suitability) — come from Natrx Assess. Includes multi-year/historical aerial imagery (NAIP, Assess's primary source; Assess can also use satellite imagery depending on need, availability, and budget) and wind-driven wave modeling. Contextual layers, not score inputs.

3. **Built environment** (CSO outfalls, MS4 outfalls, parkland proximity) — regulatory/infrastructure proximity flags. Also contextual layers.

**The suitability score is built from water quality only.** The other six variables are contextual layers that inform site understanding but do not drive the ranking.

### Data support and uncertainty — non-negotiable

The framework surfaces uncertainty in the suitability score where the underlying monitoring data is sparse. The ranking honestly carries that uncertainty rather than hiding it. Frame this as **transparency about real-world data gaps, designed into the framework**.

The `ConfidenceRule` field describes how dense and recent the public monitoring data is near each site. It does NOT describe confidence in Natrx's framework or its outputs. Low data support means there are fewer monitoring stations near a site, which has nothing to do with Natrx's analytical capability.

**For the public tool**, rename the tiers:

- High → **Robust**
- Moderate+ → **Strong**
- Moderate → **Adequate**
- Moderate- → **Limited**
- Low → **Sparse**

Internal scientific labels (Nick and Lise's High/Mod+/Mod/Mod-/Low) stay intact for any technical context. The press tool relabels the dimension as "Data support" or "Monitoring coverage" instead of "Confidence."

The narrative tension to surface (in a dedicated section, not the hero): top-ranked sites tend to fall in sparse-data areas because public monitoring is sparser there; sites already in design tend to have robust data support. Frame this as a feature: BOP can target additional monitoring at high-priority candidates while moving forward at sites where data is dense. Two-track investment plan, not a flaw in the ranking. **Do not surface data support in the hero.** It belongs in a later section where there's room to teach it.

---

## Visual Register

Use `hero_reference.html` as the canonical reference for the visual language. Inherit from it. The same palette, type pairing, motion grammar, and density should run through every section. Do not re-invent.

Palette tokens: `tailwind.config.ts` is the source of truth (original values in `docs/bop/v1-build-brief.md`).

Suitability score color ramp: linear gradient from `#2A4A56` (0.20) through `#137D76` (0.50) to `#6FE3D0` (0.87). Use these stops everywhere a site is colored by suitability.

### Typography

- **Fraunces** (Google Fonts, opsz 9..144, weights 300–600, italic available). Used for: headline, stat numbers, figure captions, tooltip site names. Always weight 300, italic for emphasis.
- **Inter** (Google Fonts, weights 300–600). Used for: body, lede, UI text. Weight 300 default, 400 for emphasized inline, 500 for navigation/buttons.
- **JetBrains Mono** (Google Fonts, weights 400, 500). Used for: eyebrows, section markers, data axis labels, dimension titles, scores in panels. Always uppercase with letter-spacing 0.18em–0.22em where used as labels.

### Motion grammar

- One choreographed entrance per section: text fades up first (~200–500ms delay, 1200ms duration), data/figure fades in next (~700–800ms delay), annotations draw last (~2200ms delay).
- After entrance, the only sustained motion is the active-design pulse (2.6s ease-in-out, scale 1→1.7, opacity 0.6→0).
- Hover states: 280ms ease, modest scale (~1.1×), no bounce, no rotation.
- Scroll choreography for the layered reveal: scroll-tied camera moves on the map, layer fade-ins on the framework primer, focused/defocused state changes for the design queue narrative section. Use Framer Motion's `useScroll` + `useTransform` for tied motion, not raw scroll listeners.

### Density and grid

- Generous negative space. Don't fill it.
- Max content width 1480px. Page padding 36px top, 56px sides, scaled down on mobile.
- Two-column figure layouts where it makes sense (320px panel + map fills the rest), per `hero_reference.html`'s map figure.
- Mobile breakpoint: collapse to single column under 1100px.

### Aesthetic vote

Editorial dark mode, journalism-grade, scientifically serious. Pudding.cool, NYT graphics desk, FiveThirtyEight visual stories are reference points. Not Stripe-cinematic. Not maximalist. The "sexy" comes from craft and confidence, not from visual noise.

---

## Page structure

All five sections are built. The v1 build spec per section is in `docs/bop/v1-build-brief.md`; what shipped is in `docs/PROJECT_STATUS.md`.

### Page chrome rules

**Inline glossary terms** in body copy use `<GlossaryTerm termId="...">term</GlossaryTerm>` (see [src/components/ui/GlossaryTerm.tsx](src/components/ui/GlossaryTerm.tsx)). Clicking opens the drawer scrolled to the matching entry. Term ids are defined in [src/components/chrome/glossary-data.ts](src/components/chrome/glossary-data.ts).

**No CTAs anywhere in the drawer.** The press contact is editorial, like a masthead handles letters to the editor. Not "talk to us about your project."

The glossary lives in the drawer, not in § 5 page flow. Do not reintroduce it as a section.

---

## Tech stack

Stack as built: `docs/SPEC_NOTES.md`. Standing rules:

- **Styling:** Tailwind CSS, with the design tokens above wired into `tailwind.config.ts` as the source of truth

Avoid: heavy client state libraries (no Redux, no Zustand unless genuinely needed; React state + URL params should suffice). Avoid: shadcn/ui out of the box. The aesthetic doesn't match. Build small, custom components.

**Data.** `src/app/projects/bop/data/BOP_Feb2026_Pipeline_Rankings.geojson` is authoritative. Where the Master Document's Tables 12 to 15 disagree with it, trust the GeoJSON.

---

## Credentials

- **Mapbox token:** the user has a token. Treat as secret. Store in `.env.local` as `NEXT_PUBLIC_MAPBOX_TOKEN`. Set URL restrictions in Mapbox dashboard for `localhost`, the Vercel preview domain, and the production domain. Do NOT commit the token to the repo. Add `.env.local` to `.gitignore` immediately on scaffold.
- **GitHub:** `dylan-natrx`. Run `gh auth login` interactively when ready.
- **Vercel:** `dylan-natrx`. Run `vercel login` interactively when ready.

---

## What the user wants from you

The user is a PR/comms strategist, not a developer. They have strong design and editorial taste. They will review code less than they review visual fidelity, copy, and the editorial register. Your job:

- Build production-quality code without expecting heavy review
- Surface visual previews at every meaningful checkpoint (Vercel preview deploys)
- Match `hero_reference.html`'s register exactly; do not introduce new colors, type, or motion patterns without asking
- Push back when design decisions would conflict with the editorial brief above
- Keep deploy steps simple and interactive (so the user can see and approve each deploy)

When in doubt, ask. The strategic decisions in this brief took dozens of iterations to lock. Don't relitigate them, but do flag if implementation reveals a real tension.

---

## Project Documentation

For implementation details and session continuity, see:

- **`docs/SPEC_NOTES.md`** - Technical specifications, architecture, implementation details
- **`docs/ISSUES_AND_SOLUTIONS.md`** - Problems encountered and how they were solved
- **`docs/PROJECT_STATUS.md`** - Current completion status, checklists, next steps
- **`docs/SESSION_HANDOFF.md`** - Quick context for resuming work
- **`STATUS.md`** - Read and update every session; links the project status files
- **`docs/bop/v1-build-brief.md`** - The original v1 build brief
