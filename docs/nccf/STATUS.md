# NCCF: Status

**Last updated 2026-09-18, end of session 8 (halftone, rail, contrast, dead CSS, share card,
and then the page opened, noindexed and deployed).**

**The open list that matters is the one at the bottom of this file, under session 8.** Earlier sections carry their own open lists, frozen as they stood on the day they were written. Several of them still name work that is now finished, which is how a recent session opened by re-reporting a job already done. Read them as history, not as a worklist.

Read this first. It says where the page actually is and what is stale.

---

## Files of record

| File | Status |
|---|---|
| `reference/vanishing-edge-draft2.html` | **Current.** The design and structure of record. Seven beats, real photography, the three-step interactive. Edited throughout 2026-08-28; the sha and byte count in earlier notes are superseded. |
| `reference/vanishing-edge-reference.html` | Superseded. The six-beat build. |
| `../../nccf-packet-amendment-03.md` | **Void.** Written against the six-beat build. Do not run Phase 7 from it. |
| `NCCF-copy-deck-draft-3.docx` (in `NCCF x Natrx/`) | Transcribed from the build. Marks on it apply directly. Predates the 2026-08-28 copy changes below. |

**The filename still says `vanishing-edge`. The page no longer does.** "The Vanishing Edge" was scrubbed 2026-08-28 as a copywritten title. The file keeps the name because `src/app/projects/nccf/route.ts` reads that literal path and because the name is how three sessions of notes refer to it. Renaming it is a Claude Code task, not an edit.

---

## Claude Code: what is actually merged

Earlier versions of this file said Phase 6 was unmerged and listed three pieces of work. **All of it is on `main`.** Corrected 2026-08-28 against the git log:

| Commit | What |
|---|---|
| `f12758b` | Phase 6: NCCF shell, tokens and chrome |
| `ad4e84e` | Amendment 04a: contain the login title; gated `/preview` |
| `0d89b2e` | Amendment 04a: login title takes the card scale |
| `ad0dd7c` | Amendment 04b: serve draft 2 at the tenant root; `/preview` retired |

**Outstanding:** the full port into the Next platform, which is amendment 04 and has not been written. Plus the two packets below.

**Phase 7 remains void.**

---

## The deployed site is behind the file

`nccf.natrx.report` serves whatever is committed. Everything from 2026-08-28 lives in the working tree only. Anyone reviewing the live site is looking at the 2026-08-27 build. Deploying the current reference file is packet work and is queued.

---

## Session 3 changes, 2026-08-28

All applied to `reference/vanishing-edge-draft2.html`. Editorial rationale is in `EDITORIAL.md` under the 2026-08-28 amendments; every number traces to `CLAIMS.md`.

### Register corrections that changed the page

**The cost framing came back.** `CLAIMS.md` had retired percent-of-program-spend, attributing the retirement to Nick. That was a register error: Nick proposed the framing himself on 2026-07-22 and his apples-to-oranges caveat belonged to a different claim. What was wrong was the number. The page now says the analysis came to about one percent of the grant.

**The grant is fully sourced.** $421,238,074 to the Atlantic Conservation Coalition, ~$30M to NCCF over five years, 595 acres. The award's 595 acres is the SOW's 600. Same program. **This closes the old open item asking Nick to confirm the grant funds this scope.**

**North Carolina has more than 12,000 miles of estuarine shoreline**, sourced to NC DEQ. The 2,900 is what this project measured. The interactive previously stated 2,900 as the state total, which was a factual error and is fixed.

**43.44% is the published concentration figure.**

**Navy Shell's county is decoupled from the page.** The peak retreat is no longer attributed to Dare in the body copy, the bar label or the interactive. Dare as worst county overall and Hyde second are confirmed and stay.

### Copy

Beat 1 loses "at one meter resolution" from the deck. Beat 2's "hard part" becomes "difficult part" so Brady's line in Beat 5 reads as a callback. Beat 3 loses the unsourced six-figures sentence. Beat 4 states the 90/10 split plainly instead of pointing at "that imbalance." Beat 5 gains the reason the work runs in two passes, gains actors in place of the passive run, loses the pixel arithmetic, and gains the survey-limit comparison and the cost percentage. Beat 7 loses "pre-scoping."

**Pixel arithmetic is retired.** The page states the movement it needed to catch and states that publicly available satellite imagery cannot see it. No invented units.

### The interactive

One vocabulary, **pass**, everywhere. Steps are *Pass 1 · Satellite imagery*, *Pass 2 · Aerial photography*, *The result · Where it's worst*. The headnote's restatement of the two-pass setup is cut; the step notes already do that work. Note 0 opens on the state's 12,000+ miles.

### Design

**The supergraphic fills its column by construction.** `.sg` is a container and `.sgnum` is `40cqw`, which is the measured width of "43.44%" solved against the column rather than guessed against the viewport. It cannot overrun again if the figure changes. The two 900px rules became container queries.

**The coast band draws north to south.** Per-point transition delay keyed to `cy` over 1.25s, points at `r=1.15` instead of `0.8`. Verified by sampling opacity mid-animation: at 750ms the northern trace is at 0.73 and the mid and southern points are still at 0. Reduced motion gets it fully drawn, no animation.

**The chapter rail no longer disappears beside the interactive.** The palette check tested vertical overlap only, so the dark `.labnote` panel on the right flipped the rail to near-white while it sat over paper. The test now requires horizontal overlap.

**ATLANTIC OCEAN is set in ink** on both maps. It was paper white on a 10% ink field, which is to say invisible.

---

## Still open

1. **The voice.** Better than it was. Beat 5 has actors now. Not finished.
2. **The headline.** Reopened and parked. *Everyone knows North Carolina's coast is eroding. But how much? And where?* is still in the file.
3. **The HTML page title.** "The Vanishing Edge" is gone. The replacement is a placeholder. The story is the approach, not the finding, and the title should say so.
4. **Navy Shell's county.** The only remaining question for Nick. The page no longer depends on it.
5. **Publishing the cost percentage effectively publishes the $350K contract value**, since the ratio times the public $30M reconstructs it. Dylan and Nick.
6. **The rail collides with the coast band's NORTH CAROLINA label.** Reviewed 2026-08-28 and deliberately not fixed.
7. **"The result · Where it's worst"** wraps to two lines in the control panel.
8. **Jacob's title and name spelling for print.** Jacob's NOAA sequestration citation.
9. **Getty video licence.** Three clips in `_assets`, none used.
10. **Audio version.** Discussed, not started.
11. **`INTERVIEW-JACOB-2026-08-17.md` still says the dataset "tops out near -15 ft/yr."** `CLAIMS.md` corrected that to -45.91. Two files in the repo contradict each other.

---

## Mobile

**The page is not responsive in production, and the first cause is structural.**

`vanishing-edge-draft2.html` is a fragment. No doctype, no `<html>`, no `<head>`, and **no `<meta name="viewport">`**. It was authored for the Artifact tool, which injects its own skeleton. `src/app/projects/nccf/route.ts` serves it verbatim, so nothing injects it, and a phone lays the page out at roughly 1000px. Measured on a 390px device: `window.innerWidth` reports 1029. Every `max-width` breakpoint therefore never fires.

Note that `route.ts`'s own docblock asserts the file "is a complete standalone HTML document with its own `<head>`." It is not. That comment is how this got past review.

**First fix:** wrap the served output in a real document in the route handler. Wrapping there rather than in the reference file keeps the file editable in the design loop and keeps its identity as the artifact of record.

**Second, the real responsive pass.** Desktop-first stylesheet with mobile rules bolted on per component. Never designed at phone width. Known work once the viewport is fixed:

- Vertical rhythm. `section{padding:15vh 0}` plus `.pull{padding:15vh}` plus the footer's `12vh` margin. On an 844px phone that is ~127px above and below every beat, seven times.
- Type has no mobile step below the clamp floors: `h1` floors at 46px, `h2` at 34px, `.closing.tight` at 26px, all tuned for desktop.
- The interactive. `.labrow` stacks under 900px and the stacked version has never been reviewed. The map falls back to `aspect-ratio:16/10`, which is landscape geometry in a portrait column.
- The coast band's 2:1 viewBox needs its own portrait crop.
- The supergraphic is now container-sized, so it fits by construction, but the overprinted sentence has not been reviewed under 900px.
- The ink field and closing quotes are `vw`-based and untested.
- Photo prints and their halftone shadows at small sizes.
- Tap targets. `.labside button` is roughly 32px tall against a 44px floor.
- Whether the chapter rail earns its place on a phone at all.

---

## Session 5, 2026-08-28 evening

Amendment 05 Phases 1 and 2 are merged and live (`636c8cb`), including the camera fix (`f671b00`).
The page is served as a real document, the responsive pass is in, and production is verified.

### Applied to the reference file this session

- **Headline breaks before the ink-2 question.** `<br>` before the `<em>`. **No extra leading**, deliberately: the colour change carries the separation.
- **Hero rhythm tightened.** `#b1` bottom padding 11vh to 5vh, new `#b2{padding-top:4vh}`, coast band bottom margin 12vh to 7vh. Deck-to-band gap measured at 130px, down from about 234px.
- **Curly apostrophes throughout.** 16 straight apostrophes converted in the prose. The interactive's step notes are JS single-quoted strings and contained none. **All quotes and apostrophes on this page are curly from here on.**

### Decisions taken

- **The phone Contents bar stays.** It was built for phones deliberately. **The open sheet takes the ink colour**, not paper, which also resolves its contrast problem: reversed type on ink clears AA, where the current pale-ink-on-paper links sit at 1.57:1.
- **The desktop rail stays**, and the collisions get designed around rather than architected away. A fly-out bug was considered and rejected: it trades away the always-visible progress indicator, which is the thing providing the depth.
- **Masthead becomes `NCCF × Natrx`**, multiplication sign, matching the BOP lockup.
- **Supergraphic is locked** at the full-bleed numeral with the overprinted sentence.
- **The cost percentage stays on the page.** Dylan's call, made knowing it reconstructs the contract value against the public $30M award.
- **Beat 3 carries no cost figure.** Reviewed and left as is.
- **No password at launch.**

### Open, and this is where we stopped

1. **The interactive's step 3.** It currently returns to the step-1 camera, so the reader goes out, in, and back, and the payoff reads as an absence rather than a finding. Agreed it needs rebuilding. See the section below.
2. ~~The beat order.~~ **Done. See below.**
3. **The page title.** Still a placeholder. The steer is that the story is the approach and the title should answer "why is this news," not "the coast is eroding."
4. **The headline.** Parked. Needs a working session.
5. **Rail label for beat 5** if the collisions get fixed. Editorial, so it needs Dylan.
6. **`og:image`.** Decided it should be the interactive, green survey boxes on the wash with the measured points, rendered at 1200x630. Not built.
7. **The Lise Montefiore review gate.** Still unresolved, still the longest lead time left.
8. **Launch date.** Dylan's. Note the page currently promises the Federation's data goes public "this fall"; if that slips past launch the promise is live on a public page.
9. **Repo out of Insync's sync scope.** Three git incidents today, one costing a working file. Scheduled.

---

## The interactive, where it stands

**The problem.** Step 1 is the full coast, step 3 returns to the full coast. Out, in, back. The only difference at the third stop is faint boxes and a stronger wash, so it reads as a round trip rather than a payoff. It also breaks the original rule that each step changes scale.

**What the data allows.** Searched the repo and the project folder: **the pass-1 change analysis output does not exist in any form.** No hexagons, no change raster, no wetland-change values. It cannot be drawn from what we hold, and a fabricated version is what voided Phase 7.

**What we do own:** 5,004 coastline points with rates, the 39 areas with a worst rate and transect count each, and **`deciles` in `nccf-figdata.json`, the ten-decile concentration curve (43.44, 19.04, and falling). Real, ours, and never drawn.** The bar chart was cut as redundant with the supergraphic, but that judgment predates the interactive's rebuild.

**The direction, agreed 2026-08-28.** Step 1 becomes a conceptual demonstration of the comparison rather than a coverage wash: push into one real stretch of coastline, show marsh at the first date, the same stretch at the second, and the difference, then pull out and sweep the region.

**Two conditions on that, and they are not negotiable.** The marsh band must be visibly schematic and unlike the data views, and the caption must say it demonstrates how the comparison works rather than what it found. Illustrating an operation is legitimate; displaying an invented result is not.

**Held pending the proto-story review.** Dylan's call 2026-08-28: the data ask goes to Nick with the proto-story rather than as a separate request, so the interactive's third step is parked until then. Deliberately parked, not stalled. **The beat swap was decoupled and executed, see below; the dependency runs the other way now, and the interactive must end on something about the method.**

**The ending depends on one thing.** If Nick can supply the 1,354 hexagon centroids with their wetland-change values, step 3 becomes the real agreement between the two passes, which would also let the page *show* the under-four-percent honesty instead of asserting it. If he cannot, step 3 becomes the concentration curve, which is a finding we own outright but which argues against swapping beats 4 and 5, since the interactive would then be about the finding rather than the method.

**Step 2 is good and stays.**

---

## Amendment 06 applied (2026-08-28, Claude Code)

Closed: masthead is the NCCF × Natrx lockup; readable small text (captions,
figure legends, byline) moved to ink-70; inactive rail links to ink-70 with
numbers at ink-45; glosslink text in full ink with the tint underline kept;
glossary tabs regained a visible focus ring; town labels paint above the
measured points (Beaufort legible); coast band's NORTH CAROLINA label moved
clear of the rail; rail gutter added; the phone Contents sheet takes the ink
colour per the 6b decision; share metadata (description, og:*, twitter:card)
added to the served wrapper with og:title mirroring the page title.

Held, per instruction: the lab control states (Task 5: inside the
interactive, which is mid-redesign). Task 8 (get .git out of Insync's sync
scope) is proposed only: options in the PR; Dylan executes.

Amended after the beat swap: the rail-label dependency dissolved ("04 The
method" does not wrap), so 6a closed fully: the gutter experiment was
removed (it caused two other labels to wrap; measured clearances are 78px
to content and 24px to the map label without it), and inactive rail
numbers moved to ink-70 (2.78:1 at ink-45 failed AA; verifier finding).

Still open, unchanged: og:image (needs the pass-2 render at 1200x630),
the interactive rebuild, beat order, title, headline, Montefiore gate,
launch date.

---

## Beats 4 and 5 swapped, 2026-08-28

**The method beat now comes before the finding beat.** `b4` is the method, `b5` is the finding.

**Why, on story grounds alone.** Beat 3 ends on "which stretches to protect, in what order, and on what
evidence." The next beat should be the evidence. It was the conclusion. The tell was that the finding
beat had to stop and explain transects before its number could mean anything, which is method
exposition smuggled into the wrong beat. The locked spine also runs measure-then-find, and the page
was running it backwards.

**An earlier note in this file made the swap depend on how the interactive ends. That was backwards
and is withdrawn.** The order is wrong independently. Deciding the swap constrains the interactive,
not the reverse.

**The consequence, and it is binding.** The interactive now sits in a beat about method, so **step 3
must end on something about the method.** The concentration-curve fallback is therefore off the
table: it would put the finding inside the method beat. If Nick cannot supply the hexagon values,
step 3 needs a different method-serving idea, or the interactive drops to two steps.

### What changed in the file

- The two `<section>` blocks and their ids swapped. The method beat is `b4`, the finding is `b5`.
- Rail labels: **04 The method**, **05 The finding**. The method beat's kicker changed from
  "How it was measured" to "The method". **This also fixes the wrapping rail label**, which was the
  original reason Amendment 06 task 6a needed an editorial decision. **6a no longer needs a new
  string from Dylan.**
- Section headlines unchanged: "More coast than anyone could look at" and "The loss is not spread
  evenly".

### Copy, two edits only

**The transect explanation moved into the method beat**, folded into the second-pass sentence:
Natrx set about 93,000 fixed points along those 2,900 miles, each on land with a line running out to
the water's edge, measured five times across the decade to give a rate.

**The finding beat now opens on the number:** "Half of those 93,000 spots are pulling back faster
than eight and a half inches per year. Four in ten are losing more than a foot." Then the ranking
sentence. Same words as before minus the explanation that moved, with "93,000" carried forward so
the reference survives.

Nothing else moved. Supergraphic, the Dare paragraph, the scale bars, the 90/10 paragraph and the
rest of the method beat are untouched.

### Verified at 1440

Section order and ids correct, interactive in `b4`, supergraphic in `b5`, rail labels and hrefs
correct, scroll-spy tracks every beat, zero page errors.

**One testing note for whoever checks this next:** the page sets `html{scroll-behavior:smooth}`, so
a scripted `scrollTo` followed by a short wait reads the rail mid-animation and looks stuck. Disable
smooth scrolling in the harness before asserting on scroll-spy state.

---

## Correction, 2026-09-02: the screening-to-survey sequence

**An earlier rule in this file said "the wide screen did not select the 39 survey areas." That
overstates the case and is withdrawn.** It was built from interview fragments and was never checked
against the contract. The SOW says the opposite of what we were enforcing.

**Phase II, Wetlands Assessment & Change Analysis:**

> "Natrx will conduct a natural asset inventory of NC's flooded vegetation and a change analysis
> within the region outlined in Figure 1 **to best understand where further analysis is warranted.**
> The change analysis will highlight wetland loss hotspots, and **identify areas addressable for the
> Phase III erosion and carbon analysis.**"

**Phase III, Erosion & Carbon Analysis:**

> "**Once addressable areas are identified during Phase II**, Natrx will conduct spatial analysis to
> model carbon distribution in combination with erosion rates for those areas in order to prioritize
> opportunity sites."

So the wide pass came first and its contracted job was to identify the areas the granular pass would
measure. Nick's own framing matches: *"you can be more intelligent about where you exercise your
shoreline change analysis budget"* (2026-07-22, 13:06).

**What is true, and what the page may say.** The change analysis identified the addressable areas.
The final site list was settled with the Federation, per the SOW's Phase IV: *"The final selection of
shoreline segments will be determined in coordination with NCCF."* And coverage then expanded far
beyond the plan, 25 subprojects becoming 39, to the point where Nick jokes the screening phase was
almost redundant.

**Publishable:** the first pass pointed to the areas worth measuring, and the final list was settled
with the Coastal Federation. Both halves, together.

**Not publishable:** that the screen alone picked the sites, with no client role. And still not
publishable, unchanged: any claim that the wide pass *predicts* erosion. The r² of 0.038 governs that
separately and is untouched by this correction.

**Cost of the error.** This rule was enforced through three editorial sessions and shaped the
interactive twice. Check the contract before writing a rule from an interview.

---

## Session 6, 2026-09-01 / 09-02

**Everything below is in the working tree and uncommitted. `main` is still at `a3ccedd`. The live
site is the 2026-08-28 build and shows none of it.**

### What went into the page

**Beat 2 gained a before/after slider.** NASA Earth Observatory Landsat scenes of the mainland side
of Dare County, 1 October 2005 and 13 October 2024, centred on Manns Harbor. Unlabelled `_lrg`
source images, so the wipe cannot slice a burned-in caption; the dates and the Manns Harbor pin are
DOM elements over the frame. Credit line sits over the image. NASA imagery is usable with credit
(see `OPEN-QUESTIONS.md`). Figure is capped at 620px and measured flush to the text column at 1280,
1440 and 1512, in both quirks and standards mode.

**Dylan reported the slider reading wider than the content rail and it could not be reproduced.**
Measured 620/620/same-left at three widths. His call: not browser zoom, something else, move on.
Left unresolved and noted here so the next person does not re-measure it from scratch.

**Beat 7 copy drafted and in.** Grant, South Atlantic Salt Marsh Initiative, Boyd on Florence, the
datasets going public this fall.

**The interactive was rebuilt as two passes with three notes.** Pass 1 is the satellite screen with
the search corridor drawn on the coast; pass 2 zooms to the measured stretch and paints the
measured shoreline. Copy rewritten in plain sentences, no fragments.

**How the pass-2 map is drawn now, and why.** 5,004 measured points aggregate into 780 short
stretches on a 2.6-unit grid. Each stretch is scored by **how much land it is losing in total**, not
by its median rate, and banded by contribution quartile. Radii run 0.9 to 3.8. Palest painted
first, so the worst marks sit on top.

The check that validates it:

| Share of stretches | Share of all loss |
|---|---|
| top 4.2% | 25% |
| top 12.9% | 50% |
| top 30.4% | 75% |
| **worst-losing 10%** | **43.2%** |

That 43.2% lands on the page's published 43.44%, derived independently at a different unit of
aggregation. The finding survives the change of aggregation, which is the strongest thing we can
say about it.

### Bugs found and fixed this session

- **`mix-blend-mode: multiply` on the points group.** Multiply darkens every overlap, so two pale
  marks rendered darker than one severe one and the colour scale collapsed. Removed. This is what
  Dylan was seeing when he said the map showed no variation.
- **Colouring by median rate showed nothing.** Median answers how fast a stretch typically moves and
  deliberately discards the tail, which is where the whole finding lives. Under median, the darkest
  band held 12.4% of loss. Under sum of loss it holds 43.2%.
- **Z-order inverted.** Stretches were written worst-first, so SVG painted the darkest first and
  every pale mark covered them. Sorted palest-first.
- **`<use href="#ncLand">` for the corridor was invisible.** ID-specificity fill and stroke on
  `#ncLand` beat the `.corr` class inside the use shadow tree. Replaced with a real `<path>` and the
  duplicated `d`, which costs 80KB.
- **Reveals fired out of document order** (Dylan, on beat 7). The single observer used
  `threshold:.18`, so a short paragraph reaches 18% of its own height in fewer scrolled pixels than
  a tall one above it and can beat it in. Text reveals now use a second observer at `threshold:0`
  with `rootMargin:'0px 0px -14% 0px'`, which triggers on the top edge crossing a fixed line and is
  strictly document-ordered for stacked blocks. Graphics keep the area threshold, since the
  coast-band draw and the scale bars want to be properly in view before they animate.

### Open on the interactive, and this is where we stopped

**Dylan's question, unanswered:** on the pass-2 map the cluster at the bottom of the frame, around
Beaufort and Oriental, reads as the heaviest. The page says Dare is worst by far with Hyde second.
Either the map misleads or the copy does, and nobody has checked which. The likely innocent
explanation is that convoluted shoreline packs more stretches into less screen, so a busy area reads
heavy without carrying the most loss. **That is a hypothesis, not an answer.** The test is total
loss per named region, computed and compared against `CLAIMS.md`. **This is a `CLAIMS.md` collision
until someone runs it.**

**Other open items on the interactive:** 84 stretches are gaining ground while the copy says every
mark is losing. The palest band washes out against the white land fill. Whether to label Manns
Harbor on the pass-2 map, which collides with Manteo at about 16px.

**Dylan's call, 2026-09-02: stop.** The interactive is not close enough to justify more of this
session. It picks up in a fresh thread.

### Mobile

**Not started, deliberately.** Dylan's call: the phone pass is not worth doing until the interactive
is right. The rebuilt interactive has never been seen at 390px. `MID_N` was re-derived arithmetically
and never verified visually. The corridor, the new point set and the longer notes are all unchecked
on a phone.

### What is left, in the order it blocks things

1. **Answer the Beaufort question with the data.** Blocks trusting the pass-2 map, and possibly
   blocks a line of Beat 5 copy.
2. **Finish the interactive.** Pass 2's read, the gaining stretches, the palest band, labels.
3. **Commit and deploy.** Five modified files. Nothing from two sessions is live.
4. **Phone pass**, after 1 and 2.
5. **Page title.** Still a placeholder. The steer: why this is news, and the news is the approach.
6. **Headline.** Parked, needs a working session.
7. **`og:image`.** The interactive at pass 2, 1200x630. Not built.
8. **Nick's bundle**, going with the proto-story: hexagon change-analysis values, the image-quality
   artifact, the -45.91 versus -45.60 reconciliation, Navy Shell's county for completeness.
9. **Lise Montefiore review gate.** Open since July. Longest lead time to launch.
10. **Federation ghost forest photo permission**, with Jacob. Asked, not answered.
11. **`INTERVIEW-JACOB-2026-08-17.md` still says the dataset tops out near -15 ft/yr.** `CLAIMS.md`
    says -45.91. Two files in the repo contradict each other.
12. **Insync and `.git`.** Still scheduled, still not done.

---

## Session 7, 2026-09-02

### The Beaufort question is answered, and it is a real collision

Computed total land loss per county from all 93,418 transects, as `rect_width ×
land_change_ft_per_year` summed over eroding transects. Surveyed shoreline only.

| County | Sites | Transects | Miles surveyed | Loss sq ft/yr | Share |
|---|---|---|---|---|---|
| Hyde | 13 | 27,695 | 566 | 4,782,539 | 39.0% |
| Carteret | 14 | 42,926 | 490 | 3,769,808 | 30.7% |
| Dare | 8 | 10,380 | 220 | 2,624,949 | 21.4% |
| Pamlico | 3 | 8,937 | 197 | 895,606 | 7.3% |
| Pender/Onslow | 1 | 3,480 | 79 | 201,614 | 1.6% |

The 780 drawn stretches were reprojected back to lat/lon off the town markers (fit is
sub-pixel, so the map geometry is sound). Of the 101 marks in the two darkest bands:
**Carteret 52, Hyde 33, Dare 14.** Carteret holds 365 of the 780 marks.

**Dylan’s eye was right and the convoluted-shoreline hypothesis is wrong.** The Beaufort
cluster reads heaviest because it is heaviest, on the quantity the map encodes.

**Neither side is wrong. They encode different quantities.** Dare leads every intensity
measure: mean rate −2.08 ft/yr against Hyde’s −1.67 and Carteret’s −1.28, 10.5% of its
transects past 5 ft/yr against 9.4% and 8.9%, 11,960 sq ft lost per surveyed mile against
8,450 and 7,699, and the peak at −45.9. Hyde is second on those, so “Hyde close behind”
survives.

**The collision is one word.** Beat 5 says Dare “is the hardest hit overall,” a few hundred
pixels below a map whose marks mean total land lost, on which Dare is third. Proposed fix,
**not yet applied, Dylan’s call**: cut “overall,” name the metric. “Dare County, which takes
in much of the Outer Banks, is eroding fastest.”

**The larger risk, and it is not fixed by the copy edit.** County totals here rank the survey
allocation, not the counties. Carteret got 490 surveyed miles, Dare 220. Any reporter who
repeats this computation gets a different county ranking out of the page’s own data.

**County assignment is geographic inference** from layer centroids against known place names,
not a boundary-file join. Mouse Harbor, Rattan Bay and Long Shoal River sit near county lines
and could move. None of them changes the ranking.

### The interactive was rebuilt as three stops

Checked against the source calls first, not the synthesis. Nick, 2026-07-22: “It’s basically
telling you there are levels of focus. It’s blurry at the top... You’re starting at the top
and working your way down in a very logical methodological way.” Jacob, 2026-08-17: “I could
throw a dart at the map and find a place that needs a project,” and “now we have the
shorelines prioritized, so that’s step one done.”

The thing to demonstrate is the narrowing, not the concentration statistic. **Dylan’s call:
three stops, no fourth.** A physical-inspection stop was considered and cut, because we do not
know where field visits will happen and the page would be asserting it.

- **01 Before.** The whole coast, undifferentiated. 12,000+ miles.
- **02 Satellite.** A focus scrim narrows to the search region, and a coarse cell grid renders
  the grain the wide pass works at. **The cells are uniform coverage, not results.** The pass-1
  change-analysis output still does not exist in any form and nothing on this map claims to be
  it. The note carries both halves of the 09-02 SOW correction: the screen showed where marsh
  became open water, and the Federation’s own priorities set which stretches got measured.
- **03 Aerial.** Cells drop out, the measured stretches paint in at full resolution. Blurry to
  sharp, which is Nick’s metaphor rendered literally. This also revives the “zoom, blurry to
  sharp” concept beat that `DESIGN-DIRECTION.md` has carried as blocked on imagery since July.
  It was only ever blocked as a photographic effect.

**43.44% is no longer asserted inside the interactive.** It lives in Beat 5 with its own
caption. The interactive’s job is the method.

### Data changes in the map

Regenerated `#ncPts` from the 39 layers on the same 2.6-unit grid and the same
cumulative-loss quartile banding. **778 stretches drawn, 66 net-gaining stretches dropped.**
The copy said every mark was losing and 84 were not; that is now true by construction and the
caption says eroding stretches only. Band counts 28 / 76 / 153 / 521 against the previous
33 / 68 / 136 / 502, so the published concentration check survives the regeneration.

**The palest band was darkened.** Ramp is now #EFC2B2, #E79B80, #DA6A45, alert.

### UI, desktop and mobile

- **The wizard is gone.** No disabled buttons, no “Start over.” A three-segment stepper
  overlays the bottom of the map, 52px desktop and 56px mobile, both clear of the 44px floor.
- **Controls sit on the map**, per Dylan. The left control rail and the `.labside` column are
  retired. `.labrow` is the positioning context; `.labstage`, the legend and the note are its
  children.
- **The note is a card over the map on desktop** at min(38ch, 37%), and drops below the map on
  mobile, where an opaque card was eating two thirds of the frame.
- **Mobile map is portrait**, `aspect-ratio:3/4`, replacing the 16/10 landscape fallback.
- **Legend added.** Four swatches, “land lost / more.” Bottom-right on desktop, above the note
  on mobile. There was none before.
- **Swipe advances the stop** on the stage; arrow keys work on the stepper.
- Cameras re-derived: `MID` is now [382, 120, 566, 356], which fits the whole measured region
  including the Carteret cluster clear of the stepper. `MID_N` [520, 140, 236, 315] and
  `FULL_N` [335, 25, 430, 573] are portrait crops **verified visually at 390**, which
  `MID_N` never was.

Rendered and checked at 390 and 1440 in Chromium, all three stops, zero page errors.

### Open

1. **Beat 5’s “hardest hit overall.”** Dylan’s call, above. Not applied.
2. **The headline.** Dylan’s steer, 2026-09-02: end-goal oriented, in the zone of “before we
   can do anything about the eroding coast we have to know where to act first.” Frames the work
   as responsible rather than merely novel, and it clears the EDITORIAL problem that any
   “but where?” construction implies nobody knew. Not written.
3. **Not deployed.** The rebuild is in the working tree only.
4. **Dead CSS.** The `.labside` and `.labctl` rules are still in the stylesheet and no longer
   match anything. Left in place deliberately this session; sweep them before launch.
5. Unchanged and still open: page title, `og:image`, Nick’s bundle, Montefiore gate, launch
   date, Federation ghost forest permission, the −45.91 / −45.60 reconciliation, the
   `INTERVIEW-JACOB-2026-08-17.md` −15 ft/yr contradiction, Insync and `.git`.

**Correction to session 6’s note.** That session recorded its work as uncommitted with `main`
at `a3ccedd`. It is committed and pushed: `main` and `origin/main` are both at `eb8881d`,
working tree otherwise clean. Whether Vercel has served it is unverified.

---

## Pass 2 is a line, not dots, 2026-09-02

**The root error, found on Dylan's review.** The aerial pass measured a continuous shoreline:
93,017 transects with geometry, ordered by `id`, spaced a median of 112 feet apart. It was
drawn as 778 dots on a 2.6-unit grid. That reads as "they sampled 778 places," which is the
opposite of what happened and the opposite of the method the beat is about.

It also caused the "everything looks worst" complaint, twice. A dot has no length, so a mark
covering half a mile and a mark covering six miles looked identical, and the only way to
encode magnitude was area, which forced acres, which is a unit the reader has no feel for.

**Now drawn as the measured line.** Per layer, transects sorted by `id`, resampled to a
vertex every 0.75 units, broken where consecutive transects are more than 3 units apart,
consecutive same-band vertices merged into polylines. 1,817 polylines in four paths, 79KB.

**Colour is the retreat rate**, and the thresholds are `CLAIMS.md` figures already published
on the page: under 1 ft/yr, 1 to 2, 2 to 5, over 5. Which means 40.7%, 23.5% and 8.3% of
transects fall past those marks, all CONFIRMED. Length is now drawn to scale, so the eye adds
up total loss on its own and the encoding can be the intuitive unit.

**This retires the acres legend** discussed earlier the same day, and the per-stretch acre
bands never shipped. It also retires "eroding stretches only": accreting shore is drawn in the
under-1 band rather than gapped, which is truer to a continuous survey.

**Copy collision, flagged not resolved.** Dylan's line for the note was "The orange indicates
the biggest loss." The encoding is now speed, not amount, so it reads as "The orange is where
the shore is retreating fastest." His words, one clause changed to match what the map does.

**Still homeless.** Removing the captions took out the only statement that the Federation's
own priorities helped set which stretches were measured. The 09-02 SOW correction requires
both halves wherever the page describes the screening-to-survey sequence, and the Beat 4 prose
does not carry it.

---

## Where the interactive landed, 2026-09-02, end of session 7

**Three stops, each one narrower than the last.**

**01 Before.** The whole coast, undifferentiated. The frame is `FULL = [152,20,848,533]`, which
sits inside the land path's bbox (x 108-758, y -90-708) so the state's own western and southern
borders fall outside the picture. Without that the landmass appeared to stop before the box did.

**02 Satellite.** A radial focus scrim narrows to the search region, and coarse 13-unit cells
show the grain the wide pass works at. **The cells sit only where the coastline path runs**,
placed from the `#ncLand` geometry, not from any result. An earlier version clipped them to
land, which put squares inland over farmland the wide pass never looked at.

**03 Aerial.** The measured shoreline itself, drawn as a line.

### The two errors that cost the most, both mine

**Pass 2 was drawn as 778 dots on a grid.** The aerial pass measured a continuous line, 93,017
transects with geometry, ordered by `id`, a median of 112 feet apart. Dots said "they sampled
778 places," which is the opposite of the method the beat is about. It also made "everything
looks worst" unfixable: a dot has no length, so a mark covering half a mile and one covering
six miles read identically, and the only magnitude left to encode was area, which forced acres.
Three rounds of colour and scale tuning were spent on a symptom of the wrong mark type.

**The top band had no identity.** 5-10 ft/yr was `#E2743E` and over-10 was `#EB5C31`. Near
enough the same orange that Dylan asked whether anything cleared 10. It was all there and
invisible. A heavier line was also the wrong instrument for a question about places.

### How pass 2 is drawn now

Per layer, transects sorted by `id`, resampled to a vertex every 0.75 units, broken where
consecutive transects are more than 3 units apart, consecutive same-band vertices merged into
polylines. Coloured by retreat rate at thresholds already in `CLAIMS.md`: under 1, 1-2, 2-5,
5-10, over 10 ft/yr. **Length is drawn to scale**, so the eye integrates total loss on its own
and the legend can use feet per year, which is the unit a reader has a feel for.

**The over-10 shoreline clusters into 17 zone markers**, a ringed disc sized by the shoreline
each holds, painted above the ramp. That is the decision-support read: 17 places, about 17
miles, out of 2,900. The four lower bands were lightened to give the rings room.

### Interactive UI

Wizard controls retired. A three-segment stepper overlays the bottom of the map at every width,
52px desktop and 56px phone. The note is a card over the map on desktop at min(38ch, 37%) and
drops below the map on the phone, where an opaque card was eating two thirds of the frame. Map
is square on the phone. Legend sits bottom right on the map at every width. Swipe advances the
stop; arrow keys work on the stepper. Captions under the interactive removed at Dylan's
instruction.

### Copy

All three step notes are Dylan's, applied as written, with one clause changed and flagged: his
"The orange indicates the biggest loss" became "the orange is where the shore is retreating
fastest," because the encoding is speed rather than amount.

### Open

1. **Beat 5's "hardest hit overall."** Unresolved since the Beaufort finding. Dylan's call.
2. **The Federation-priorities caveat has no home.** Removing the captions took out the only
   place saying the Federation's own priorities helped set which stretches were measured. The
   09-02 SOW correction requires both halves wherever the page describes the sequence, and the
   Beat 4 prose does not carry it.
3. **The zone count is a property of our rendering.** `CLAIMS.md` carries it as PENDING with the
   method note. The miles and the 1.96% are the defensible forms.
4. **Dead CSS.** `.labside`, `.labctl` and the retired `#ncPts` band rules no longer match
   anything. Sweep before launch.
5. **Not deployed.** Everything from sessions 6 and 7 is committed to `main` but the live site
   has not been rebuilt.
6. Unchanged: page title, headline, `og:image`, Nick's bundle, Montefiore gate, launch date,
   ghost forest permission, the -45.91 / -45.60 reconciliation, the Jacob interview's -15 ft/yr
   contradiction, Insync and `.git`.

**Note on `.git`.** Git cannot delete its own lock files in this folder, so every write leaves a
stale `index.lock` or `HEAD.lock`. Worked around by moving them aside before each operation;
several `.git/.stale-*` files are now sitting there and need deleting by hand.

---

## Mobile pass and a cleanup that was reverted, 2026-09-02

### Mobile, verified at 360, 390 and 430

Measured, not eyeballed. No horizontal overflow at any width, document width equals viewport.

- **The before/after wipe blocked scrolling.** `.ba` carried `touch-action:none`, so a thumb
  landing anywhere on that figure could not scroll the page past it. Now `pan-y`: the page
  scrolls, a horizontal drag still works the wipe.
- **Only sub-44px target on the page was the glossary button** at 42px. Now 44.
- **The interactive's legend covered the Beaufort and Oriental zones** on the phone crop, and
  stood 96px tall over a 342px map. Moved to the top left, the emptiest quarter of `MID_N`,
  and slimmed to 84px.
- Checked and already correct: footer clears the fixed Contents bar by 76px, type floors
  (h1 38, h2 27, deck 19, body 17), the supergraphic fits its column by container query with
  the percent sign 5px inside the edge, the overprint sits below the numeral rather than over
  it, and the three interactive stops all read at 390.

### The dead CSS is real, and removing it needs its own pass

An automated prune was written, run, and **reverted**. It removed 126 rules and 10KB, and it
silently dropped `footer .fbar{padding-bottom:calc(24px + 52px)}` from taking effect, which cost
52px of clearance under the phone Contents bar. Cause not fully established. Not worth 0.1% of
the file.

**Verified dead**, by scanning every CSS selector against markup and script, with base64 and SVG
path data excluded so short tokens do not false-positive:

`.bignum .byline .callout .cred .dec .decax .decbar .decfoot .decrow .e1 .e2 .e3 .e4 .figlegend
.herolab .hide .labbar .labctl .labctl-in .labctl-lab .labside .ladder .lbl .lrow .nm .photo
.reset .sgkey .sgsplit .stats .take .tk .txt .val` and `#heroArt #ncPts`

About 154 CSS lines. `.labside`, `.labctl*` and `.labbar` are mine, orphaned by the interactive
rebuild this session; the rest predate it.

**Why it was not removed by hand either.** The dead rules interleave with live ones at one and
two line gaps, so range deletion takes working CSS with it. This wants the harness: baseline
NCCF at 360/390/768/1440, prune, diff. `harness/check.mjs` does exactly that but is currently
BOP-specific.

**Do not remove `#ncFast`.** The empty group is still in the markup, and `.decbar i` shares a
rule with the live `.scale .bfill`.


---

## Session 8, 2026-09-18

Five fixes on the page, one new asset, and a repo cleanup. Every item in the open list at the
bottom was re-checked against the page and the data files rather than copied forward from
2026-09-02, and six of them turned out to be closed already.

### The scale bar bled because the halftone was too fine, and 3x renders hid it

The bar carried a 4.6px dot pitch inside a 26px bar. At that ratio the dots touch, so at device
pixel ratio 1 the bar closed into a solid green band with pinholes and no visible edge. It looked
correct in every render taken at 3x, which is why it was diagnosed three times without once
being fixed: at 3x the pitch is effectively 13.8 device pixels and the dots separate.

Now `#hsbar` is pitch 7.5 with a circle radius of 2.85, and `#tbDot` is dilate radius 0.20 with a
0.42 blur, so the bar ends read ragged the way the photo plates do. Commit `fbc49f8`.

**The rule, so this is not diagnosed a fourth time: halftone work is verified at 1x.** A screenshot
at 2x or 3x proves nothing about a halftone, because the artifact being looked for is dots closing
into a solid at the device pixel grid. Check at device pixel ratio 1 first, then confirm the
retina render separately.

Note that the photo plates (`#psgh`, `#psls`, `#psin`) still run at 4.5 pitch with radius 1.930,
and correctly so. They sit on large images where a coarse screen would be obvious. The 7.5 pitch
is specific to the thin 26px bar.

### Rail jumps replayed every beat they skipped

A rail click can cross a dozen reveal targets. The reveal observer staggered them 90ms apart the
way a scroll stagger works, so a jump past several beats spent seconds playing back everything it
skipped before the content the reader asked for appeared. While a jump is in flight, `jumping` is
set and every reveal fires at once with its transition delay zeroed.

The landing is re-asserted on `scrollend`, because `scrollIntoView` fixes its stop point at click
time and three unsized images decoding mid-flight moved the page underneath it, which is why the
eyebrow sometimes sat off the top. Those three images now carry intrinsic `width` and `height`.
The other two content images already reserved their space through an inline `aspect-ratio`, so the
whole set is layout-stable now.

`scrollend` is feature-detected, with a 1600ms timeout as the fallback for browsers that do not
fire it. Commit `bde04ca`.

### One green for every em that sits on paper

`--em` is `#2C7F6D` at 4.61:1 against the paper. It replaces two greens that were both too light
to carry text: `--tint` at 2.76:1, and the headline's own `#2E8371` at 4.37:1, neither of which
cleared AA at body size. `#2E8371` no longer appears anywhere in the file.

The pull-quote em is the one exception and stays `#7FD8C4`, because it sits on the ink block where
it measures 9.42:1. Inverting that one to `--em` would have made it unreadable. So the rule is by
background, not by element: `--em` on paper, `#7FD8C4` on ink. Commit `1a553e7`.

### 72 dead CSS rules removed, gated on a render diff rather than a text scan

96 lines, 6.6KB. Commit `cca46cc`. The method matters, because the text-scan version of this job
was written, run and reverted on 2026-09-02 after it silently dropped 52px of mobile footer
clearance.

**The method that worked.** Walk `document.styleSheets` in a real browser at 360, 390, 768, 1080
and 1440, with reveals forced in, the glossary open and all three interactive stops visited, then
test each selector against the live DOM. Keep any selector whose class or id token appears
anywhere in the fragment's markup or script regardless of what the DOM says, which is what
protects `.pl` and anything else created by the reveal JS at runtime. Scope the prune to the
fragment's own style blocks and never to `nccf.css`, which also serves the login and scaffold
pages and will look dead from inside this one page. Then diff full-page renders before and after
at every width, plus the glossary drawer and all three interactive stops.

**The charset trap, which cost the first run.** The fragment carries no `<meta charset>`, because
`route.ts` adds it when it wraps the fragment in a real document. Load the fragment over `file://`
and the browser sniffs the encoding instead, so the two copies can be sniffed differently, the
headline reflows as mojibake, and the harness reports a 24px regression at 768 that does not
exist. A `file://` diff needs a charset injected into both copies before anything it says can be
believed.

**The sweep did not finish the job.** It was finished later the same day, under the same gate.
See "The sweep is finished" below.

### The share card carries the headline

`public/images/og-nccf.png`, 1200x630, headline plus the NCCF x Natrx lockup on paper. Commit
`312c9e0`. og:image had been deferred pending a pass-2 render of the interactive. That is reversed:
the interactive is a hairline coastline over 780 aggregated stretches, a feed thumbnail gives it
roughly 250px, and it turns to mush at that size. The headline is the one thing that survives.

The card is built from `reference/og-nccf-source.html`, a purpose-built 1200x630 frame rather than
a crop of the page. The page sets its h1 on a viewport clamp and its masthead at 13px, both tuned
for a browser window, so cropping that to 630px of height gives type composed for the wrong box.
The source frame fits the headline by binary search against the available height, so the render is
reproducible rather than hand-tuned. Everything else is carried over verbatim: paper `#FAFAFA`,
ink `#121D54`, the second clause in `--em`, the multiply blend, the `tb` filter, and the 170px
grain tile.

`scripts/render-og-nccf.mjs` drives it with Playwright and throws if the webfonts fail to load,
rather than shipping a card set in a fallback face.

**Re-run the render after any headline edit, or the card quotes a dead headline:**

```
node scripts/render-og-nccf.mjs
```

All four tags are in `route.ts`: `og:image`, `og:image:width`, `og:image:height` and
`og:image:alt`. The URL is absolute and taken from `x-forwarded-host` and `x-forwarded-proto`,
with `request.url` as the fallback for a direct hit, because this page answers on localhost, the
Vercel preview domain and `nccf.natrx.report`. That is the only reason the document is now
assembled per request. The fragment is still read from disk once at module load, and the literal
`process.cwd()` join that Vercel's output file tracing follows is untouched.

### Git housekeeping

The 31 zero-byte stale lock files in `.git/` are deleted, and the 188 orphaned `tmp_obj_*` objects
are gone. `git fsck` reports only dangling commits and blobs, which are the expected residue of the
reverted prune and need no action.

The underlying problem is unchanged. Git still cannot delete its own lock files in this folder
because Insync holds them, so every write can leave an `index.lock` or `HEAD.lock` behind. The
workaround is still to move the lock aside and retry, and the debris still needs sweeping by hand
afterwards.

### Environment note: the Playwright browser path is per machine

A brief handed to a session hardcoded `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. That
path is the cloud container only and does not exist on darwin, where the browser is the
npx-cached Playwright 1.62.1 with `chromium_headless_shell` under
`~/Library/Caches/ms-playwright`. `render-og-nccf.mjs` reads `PLAYWRIGHT_MODULE` and `PW_CHROMIUM`
so it runs in either place without editing:

```
PLAYWRIGHT_MODULE=/Users/dylandibona/.npm/_npx/<hash>/node_modules/playwright/index.mjs \
  node scripts/render-og-nccf.mjs
```

**Do not hardcode a browser path in a brief again.** Name the tool and let the script resolve the
binary.

### The sweep is finished, and the guess about why it stalled was wrong

Two explanations were on the table for the 21 rules the 72-rule sweep left behind. Both were
tested against the artifacts before anything was changed, and the one written up earlier in this
entry turned out to be false.

**A, that the keep-rule's token search leaked stylesheet text, is falsified.** If the corpus had
included the stylesheet, every selector would have matched itself inside its own rule and nothing
could ever have been pruned. Testing that directly: of the 72 rules the sweep did remove, 71 would
have survived under a leaked corpus. The one exception is `strong`, which carries no class or id
token at all. The corpus was clean. This was a guess written up as a likely cause, and it was
wrong.

**B, that a group survives when only some of its members are dead, is confirmed, but it never
applied to the 21.** Zero mixed groups were removed by the sweep. All 21 of the rules in question
are pure dead groups, so B does not explain any of them.

**What actually held, for 16 of the 21: the sweep never descended into `@media`.** All 72 removals
sit at the top level and not one is inside a media block. `CSSMediaRule` has no `selectorText`, so
a walk that reads that property straight off each rule skips media blocks silently. That is a
whole class of rule the first pass could not see.

**The remaining 5 are top level and not explained.** `#heroArt`, `.callout`, `.labctl` and two
`.labside button` rules. Each has a same-selector twin elsewhere in the file that the sweep did
remove, so it was not keyed on selector text alone. The sweep script was never committed, so the
mechanism is not recoverable from what is in the repo. Recording the gap rather than inventing a
cause for it.

**What was removed.** 21 pure dead groups dropped outright. 12 mixed groups split, dead members
only, live members and their declarations untouched: the `#ncPts` family, `.decbar i` out of
`.decbar i,.scale .bfill`, `.sgsplit b` out of `.figure svg,.sgnum,.sgsplit b`, and `.decfoot` and
`.decfoot::before` out of their `.scale .srow` pairs. 6 media blocks left empty by the drops were
removed. 4 section comments that now headed nothing went with them. 401 rules to 380, 1,903 bytes.

`nccf.css` was not touched. It serves the login and scaffold pages too, so it cannot be pruned
against this page alone.

**Nothing dead is left, and the keep-rule still protects what it should.** Walking
`document.styleSheets` at 360, 390, 768, 1080 and 1440, with reveals forced in, the glossary open
and all three stops visited, leaves 49 selectors that match nothing at rest. Every one of them is
required by the keep-rule, because its class or id token appears in the fragment's markup or
script. `.pl` is the case that rule exists for, since the reveal JS creates it. `.figure` is the
instructive one: the token `figure` is in the markup, but as the element `<figure>` rather than as
a class, so the rule keeps a genuinely dead selector. That is the rule being conservative in the
direction it should be.

**The gate is committed this time.** `harness/nccf/css-diff.mjs`, which is the reason the first
text-scan attempt was reverted and this one was not. It renders both copies at 360, 390, 768 and
1440, plus the glossary drawer and all three interactive stops at 390 and 1440, and requires every
state to be pixel identical. It injects the charset into both copies, and it gives each stop
2000ms to let the viewBox camera land. It also adds a reduced-motion pass, which the earlier gate
did not have and needed: `.decbar i,.scale .bfill` lives inside
`@media(prefers-reduced-motion:reduce)`, and an edit to a rule in there is invisible to every
other state in the list. Final run: 14 states, all zero.

**One thing the gate does not owe you, recorded in `harness/nccf/NOISE_FLOOR.md`.** A 1440-width
state intermittently reports exactly 3 differing pixels. It is the same three pixels every time,
one least-significant bit apart, on the antialiased edge of the `#ncZones` marker circles. It is
not content-dependent: diffing the fragment against a byte-identical copy of itself fired it once
in ten runs. It is not a settle problem either, since ten runs at a 2000ms glossary settle fired
it twice. The gate is deliberately left strict at `threshold: 0` rather than tuned to swallow it,
because three pixels of slack is also enough slack to hide the 52px footer regression that got the
first attempt reverted.

### Em dashes, both files at zero

The three left in this file from the 2026-08-28 entry are now colons. Only the punctuation
changed; those entries are frozen history and the wording is untouched.

Removing the dead rules also orphaned two CSS comments that carried em dashes, and a third and
fourth that carried none. All four are gone with the rules they described. Two more em dashes
survived in comments attached to live rules, at the `.labrow` height override and the mobile type
floors, and both are now colons. The fragment and this file are both at zero.

### Closed this session, with the check that closed each one

| Item | Closed because |
|---|---|
| `og:image` | Built and wired, commit `312c9e0`. The PNG is 1200x630 and all four tags are in `route.ts`. This appears as open in five earlier sections of this file. Those are historical entries and are left alone. |
| Beat 5 "hardest hit overall" | The phrase is gone from the page. It now reads "Dare County, which takes in much of the Outer Banks, is eroding fastest. Hyde County, on the mainland to the southwest, is close behind." Fixed in `e78218b`. |
| Page title | Set to "Measuring Shoreline Erosion in Eastern North Carolina", and Dylan has confirmed it stays. |
| Favicon | Wired in both places: `route.ts` emits the `<link rel="icon">` on the fragment wrapper, and `layout.tsx` carries `icon: '/images/favicon.png'` for the gate and scaffold pages. The file is present. |
| em contrast | Closed by the `--em` change above. |
| Dead CSS | Closed. The 72-rule sweep ran, and the 33 rules it left behind were finished off later the same day under the same render gate. Zero dead selectors remain. See "The sweep is finished" below. |

### The page is open, noindexed, and live, 2026-09-18 afternoon

**The gate is off.** The nccf tenant was `accessMode: 'gated'`, so the root answered 307 to
`/login`. It is now `public`, following the precedent set when BOP was ungated on 2026-07-15:
`accessMode` to public and `passwordHash` to null, with a dated comment. The hash stays in the
history of `tenants.ts` if the page ever needs re-gating, and re-gating is that one registry entry
rather than anything in the gate code. Commit `f83d0c1`.

None of the auth machinery was removed. `gate.ts`, `credentials.ts`, `/api/auth/login` and every
project's login UI are all still there, nccf's included. The middleware matcher is unchanged: it
already excluded `images`, which is why the share card serves without a cookie and why nothing had
to be widened to make that check pass.

**Every tenant on the platform was checked, including the ones expected to stay put.** By Host header against a local server,
before and after, and again against production after the deploy:

| Host | Before | After | Verdict |
|---|---|---|---|
| `bop.natrx.report` | 200 | 200 | unchanged, still public |
| `demo.natrx.report` | 307 to /login | 307 to /login | unchanged, still gated |
| `nccf.natrx.report` | 307 to /login | 200, no redirect | the intended change |
| `natrx.report` | 302 to natrx.io | 302 to natrx.io | unchanged |
| `www.natrx.report` | 302 to natrx.io | 302 to natrx.io | unchanged |
| `nosuch.natrx.report` | 404 | 404 | unchanged |

demo's `/login` still serves 200, so its gate is intact rather than merely redirecting into a
hole. The diff touches only the nccf object, so the bop and demo entries are byte-identical to
what they were, which is the strongest form of that check.

**noindex until the Federation announces.** Commit `71fd022` adds
`<meta name="robots" content="noindex, nofollow">` to the wrapper alongside the share metadata.
Open access without it would let search engines index the story before the Federation has
announced it.

The removal condition is in the comment above the block, and it is one line: delete the robots
line at launch and nothing else in that file changes.

This deliberately does not block unfurling. Slack, iMessage and LinkedIn read og: tags and ignore
robots, so a shared link still previews with the card. noindex governs search engines, not
unfurlers. The og: tags were not touched: the diff is one meta line plus a comment, and the served
document still carries all nine share tags exactly as before.

**Live, verified against production.** Deployment `dpl_CFzB5DbWvJtxhM4SV1aYGT88B9kW`, readyState
READY, target production, branch main, commit SHA `71fd0229dd782efe9971a86a65cdfc8771771fb5`,
which matches local HEAD. The SHA came from the Vercel API because `vercel inspect` does not print
it. Checked after READY, not off a queued or building state.

- `nccf.natrx.report/` returns 200 with zero redirects and serves the story.
- `nccf.natrx.report/images/og-nccf.png` returns 200 as `image/png` with no cookie.
- All four share-card tags resolve against the real host:
  `og:image` is `https://nccf.natrx.report/images/og-nccf.png`, with width 1200, height 630 and
  the alt text. The URL in the tag fetches 200 `image/png`.
- The robots meta is present.
- No `localhost` appears anywhere in the served head, which is the failure mode the
  request-origin logic exists to prevent.

### The Federation caveat was not placed, and why

The line supplied for Beat 4 was to be applied exactly as written, with an instruction to stop and
flag rather than resolve if it collided with `CLAIMS.md`. It collides, so it was not placed and no
alternative was drafted.

The line: *"Which stretches got measured was the Federation's call, shaped by where it already
works. What was new was measuring every one of them to the same standard, including the places
nobody could reach on foot."*

Three collisions, all against rows the register marks CONFIRMED or WITHDRAWN:

1. **`CLAIMS.md` line 307, CONFIRMED:** the change analysis identified the areas addressable for
   the granular pass, per SOW Phases II and III. "Was the Federation's call" writes the wide pass
   out of a selection the contract gives it.
2. **`CLAIMS.md` line 308, CONFIRMED:** SOW Phase IV says the final selection was determined *in
   coordination with* NCCF. "The Federation's call" makes NCCF the decider rather than a
   co-decider.
3. **`CLAIMS.md` line 310, WITHDRAWN:** "the wide screen did not select the 39 survey areas" was
   withdrawn on 2026-09-02 as an overstatement enforced for three sessions. Attributing the
   selection wholly to the Federation is that same withdrawn claim from the other side.

The 2026-09-02 correction is explicit that the publishable form is both halves together: the first
pass pointed to the areas worth measuring, and the final list was settled with the Federation. It
lists "the screen alone picked the sites, with no client role" as not publishable, and the supplied
line is the mirror of that. The caption this line was meant to replace carried both halves, as
recorded above under the 03 Aerial note.

Separately, **"shaped by where it already works" has no source.** No row in `CLAIMS.md` supports
it. The nearest thing is this file's own paraphrase, "the Federation's own priorities," which is a
summary of SOW Phase IV coordination rather than a claim about where the Federation already
operates. As written it would put a new factual assertion about how NCCF chose onto the page
without a source behind it.

**The open item stays open.** The caveat still has no home in Beat 4.

### The Jacob contradiction, resolved as stale rather than wrong

Investigated, not edited. The finding is that the contradiction is real but misattributed, and
that nothing on the page is at risk.

**Jacob did not say it.** Line 131 of `INTERVIEW-JACOB-2026-08-17.md` is the note-writer's own
annotation under the heading "The 50 ft/yr figure in this interview," not a quotation. It reads:
*"`CLAIMS.md` traces the figure to the Wetland Stop-Loss memo (Gulf reef projects, 15 to 150
ft/yr), not to the NCCF dataset, which tops out near -15 ft/yr."* So it asserts a maximum rate for
the NCCF dataset, over the 2012 to 2022 aerial pass: a rate, and a single worst case, not a total
and not an average.

**Recomputed from the repo's own 39 layers, 93,418 transects, not from either document:**

| Quantity | Value |
|---|---|
| Peak erosion rate | **-45.9074 ft/yr**, Navy Shell, transect id 200, r² = 0.982 |
| The six worst transects | all Navy Shell |
| Transects at or beyond -15 ft/yr | **423**, 0.45% of all transects |
| Transects at or beyond -45 ft/yr | 2 |

**The interview figure is wrong, not a different quantity under a different name.** It states the
dataset maximum, and the dataset maximum is 3.06 times larger. 423 transects exceed the figure it
gives as the ceiling.

**It is stale rather than independently wrong.** `CLAIMS.md` line 37 already records this: an
earlier version of the register carried -15, that was corrected to -45.91 on 2026-08-27, and the
interview file was written 2026-08-17 and still quotes the pre-correction register. Jacob's own
contribution on magnitude was that he is "desensitized to like fifty feet" and that some NC areas
approach Louisiana rates, which sits with a 46 ft/yr peak and not with 15.

**Nothing on the page is falsified, because the figure is not correct.** Had it been, it would have
taken out Beat 5's "at the worst single spot measured, the marsh edge pulled back about 46 feet in
one year," the stat tile reading "the worst spot measured 45.9 ft," and the to-scale comparison
against the 0.7 ft typical spot, whose whole point is the ratio.

**Every page figure that can be recomputed reconciles.** 76,052 eroding points, exact. Peak 45.9 ft,
exact. Median retreat 0.72 ft, 8.6 inches, against the page's "eight and a half inches" and its
0.7 ft tile, on the page's own denominator of all 93,418 spots. Four in ten past 1 ft/yr, 40.68%.
1.96% past 10 ft/yr, exact.

**Bonus: the -45.91 and -45.60 reconciliation closes.** They were never competing values for one
quantity. In `339_navy_shell.geojson`, `land_change_ft_per_year` bottoms out at **-45.9074** on
transect 200 with r² 0.982, while `epr_ft_per_year`, the End Point Rate, bottoms out at
**-45.6038** on transect 210 with r² 0.944. `CLAIMS.md` line 246 records "-45.60 ft/yr, r² =
0.944," and that r² belongs to transect 210, so the register read the End Point Rate column for
one transect and the regression column for another. There is no data disagreement to reconcile.

**One observation outside the ask.** The page's 43.44% concentration figure did not reproduce
under either obvious reading: a top tenth of eroding transects by count gives 41.22%, and a top
tenth of eroding shoreline by length gives 45.81%. The published 43.44% sits between them, so a
third method is in play. The prose hedge, "nearly half," holds under all three, so this is not a
correction, only a note that the method behind that specific number is not written down anywhere
found.

### Open

Checked against the page, `CLAIMS.md` and production on 2026-09-18.

1. **Dead CSS. Closed, later the same day.** The residue is gone and the diagnosis that was
   guessed at here has been settled by measurement. See "The sweep is finished" below for the
   numbers and the method. Nothing dead is left: every selector in the fragment that still
   matches nothing is one the keep-rule requires, and there are 49 of those.

2. **The Federation-priorities caveat still has no home. Still open.** A line was supplied for
   Beat 4 on 2026-09-18 and was not placed, because it collides with three `CLAIMS.md` rows: the
   wide pass identifying the addressable areas (line 307, CONFIRMED), the final selection being
   made in coordination with NCCF rather than by it (line 308, CONFIRMED), and the withdrawn
   single-half claim (line 310). Its second clause, about where the Federation already works, has
   no source in the register at all. See "The Federation caveat was not placed" above. Needs a
   line carrying both halves of the sequence, with the second clause sourced or dropped.

3. **The zone count is a property of our rendering.** `CLAIMS.md` line 367 still carries it as
   PENDING with the method note. The miles and the 1.96% are the defensible forms.

4. **Not deployed. CLOSED 2026-09-18.** Pushed and live. Production deployment
   `dpl_CFzB5DbWvJtxhM4SV1aYGT88B9kW` reached READY on commit
   `71fd0229dd782efe9971a86a65cdfc8771771fb5`, matching local HEAD, and
   `nccf.natrx.report` serves the page at 200 with no redirect. Everything from sessions 6, 7 and
   8 is on the site.

5. **The share card could not unfurl while the page was gated. CLOSED 2026-09-18, retired by
   the gate removal.** The 307 to `/login` is gone, so an unfurler reaching the public URL now
   gets the document and its og: tags directly. The 2026-09-18 decision to leave `/login` bare is
   moot: nothing is sent there any more. Verified live, all four og:image tags resolving against
   `https://nccf.natrx.report` and the image itself fetching 200 as `image/png`. noindex keeps
   search engines out without touching unfurling.

6. **The Jacob interview's -15 ft/yr. Investigated 2026-09-18, Dylan's editorial call.** The
   figure is wrong and is not Jacob's: line 131 is the note-writer's annotation quoting a
   superseded version of `CLAIMS.md`. Recomputed peak is -45.9074 ft/yr and 423 transects exceed
   -15. Nothing on the page is falsified. The interview file sits outside this repo, at
   `NCCF x Natrx/files/`, so a repo-only grep still reports it fixed. Fixing that file is
   Dylan's call, not a page change. See "The Jacob contradiction" above.

7. **The -45.91 and -45.60 reconciliation. CLOSED 2026-09-18.** There was never a
   disagreement. -45.9074 is the minimum of `land_change_ft_per_year` on transect 200;
   -45.6038 is the minimum of `epr_ft_per_year`, the End Point Rate, on transect 210. Two
   different statistics on two different transects. `CLAIMS.md` line 255 can drop its
   "reconcile before print," and line 246 should say which column it is quoting.

8. **Ghost forest photograph permission.** `OPEN-QUESTIONS.md` line 186. Asked of Jacob, not
   answered.

9. **Carried forward, unverifiable from the repo:** Nick's bundle, the Montefiore gate, and the
   launch date.

10. **Insync and `.git`.** The debris is swept, the cause is not. See the housekeeping note above.
