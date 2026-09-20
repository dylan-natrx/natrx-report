# NCCF: Claims Register

**Every number that appears on the page must appear here first.**

Numbers that cannot be sourced do not get published, however good they sound.

**Status key:**
`CONFIRMED` — sourced, checked, publishable
`PENDING` — real but needs a source, a decision, or review
`BLOCKED` — do not publish under any circumstance until resolved

**Sources referenced:**
- SOW — "2025-04-04 Natrx SOW_NCCF.md," Natrx to NCCF, signed Nicholas Brady
- Nick 07-22 — Nick Brady interview, 2026-07-22, and his follow-up email the same day
- Jacob 08-17 — Jacob Boyd interview, 2026-08-17 (Plaud `19aae093faaec5ae25eaceed1f38346d`)
- Stop-Loss — Wetland Stop-Loss executive summary, Natrx internal memo

---

## Erosion findings

| Claim | Value | Status | Notes |
|---|---|---|---|
| Transects analyzed | 93,004 | CONFIRMED | Figure 1. The public webmap carries 93,418 points across 39 layers; the ~400 difference is filtering. |
| Median shoreline change | -0.72 ft/yr | CONFIRMED | Erosion |
| Transects retreating faster than 1 ft/yr | 40.7% | CONFIRMED | |
| Transects retreating faster than 2 ft/yr | 23.5% | CONFIRMED | |
| Transects retreating faster than 5 ft/yr | 8.3% | CONFIRMED | |
| 5th-percentile transect | -6.77 ft/yr | CONFIRMED | |
| **The worst tenth of the eroding shoreline accounts for 45.81% of all land lost** | **45.81%** | **CONFIRMED and published 2026-09-20, replacing 43.44%.** Method of record below. Regenerate with `node scripts/nccf-concentration.mjs`. | **Publish 43.44.** Matches `nccf-figdata.json`, which is the computation of record. 43.5 is the rounded internal figure and 43 was a display rounding in draft 2; both are superseded for publication. | Notes: the strongest number in the dataset and the one Nick endorses for the headline. Computed from the individual shoreline-change transect points, all ~76k eroding points equally weighted. **Not from the hexagon layer.** Robustness: filtering to points with regression r² ≥ 0.5, the top decile still accounts for ~39%. It holds. |
| Study period | 2012–2022 | CONFIRMED | |
| Resolution | 1 meter | CONFIRMED | |
| Temporal data points | 5 (2012, 2014, 2016, 2019, 2022) | CONFIRMED | Nick 07-22. Intended lower bound ~2010, in practice 2012. |
| Worst county: Dare | qualitative, "by far" | CONFIRMED | Nick 07-22: "Dare County. Dare County by far." Quotable. A peak rate from the final dataset is still wanted to attach. |
| Hyde County highly erosive | qualitative | CONFIRMED | Nick 07-22: Hyde "was bad," Dare "very bad." Jacob 08-17 independently: "pretty much the whole shoreline of Hyde County has disappeared at a pretty alarming rate." Quotable as severity, not as a number. |
| **Peak measured erosion** | **-45.91 ft/yr, Navy Shell** | **CONFIRMED** | Recomputed 2026-08-27 from the public ArcGIS webmap GeoJSON (39 layers, item f0ec44fa). r² = 0.98. Five transects past -42 ft/yr, all r² above 0.94, all at Navy Shell. Confirm the county before print. |
| Erosion up to 50 ft/yr | 50 ft/yr | **DO NOT USE the round 50** | Superseded. An earlier entry here claimed NCCF marsh tops out near -15 ft/yr. **That was wrong.** The real peak is -45.91. The 50 still traces to Stop-Loss (Gulf reef sites) rather than to this dataset, so do not publish 50. Publish the measured figure instead: erosion reaching roughly 46 feet per year at the worst transects. |
---

## Correlation findings

The central methodological claim. Handle carefully.

| Claim | Value | Status | Notes |
|---|---|---|---|
| Hexagons in analysis | n = 1,354 | CONFIRMED | Quality-controlled coastal hexagons |
| Spearman rho (overall) | 0.349 | CONFIRMED | p < 10^-39 |
| Pearson r (overall) | 0.196 | CONFIRMED | 95% CI 0.144–0.246 |
| **Pearson r² (overall)** | **0.038** | **CONFIRMED** | **Wetland change explains under 4% of variance. This number must accompany any claim of predictive power. Omitting it is the overclaim.** |

**Per-grid results.** Read the sample sizes before quoting any of these.

| Grid | n | Pearson r | p | Spearman rho | p | Read |
|---|---|---|---|---|---|---|
| 4 | 32 | -0.026 | 0.89 | 0.05 | 0.78 | No signal. Small n. |
| 5 | 14 | -0.209 | 0.47 | -0.232 | 0.43 | Wrong direction, n=14, not significant. Do not quote. |
| 6 | 223 | 0.098 | 0.15 | 0.19 | 0.0044 | Weak. Well-sampled. |
| 8 | 559 | 0.006 | 0.90 | 0.318 | 1.2e-14 | Largest sample. Zero linear relationship, moderate rank relationship. |
| 9 | 26 | 0.707 | 5.4e-05 | 0.546 | 0.0039 | Strong but n=26. Unstable. Do not lead with it. |
| 11 | 27 | 0.601 | 0.00091 | 0.593 | 0.0011 | Strong but n=27. Same caution. |
| 12 | 289 | 0.514 | 7.2e-21 | 0.478 | 6.6e-18 | Strong and well-sampled. Best evidence in the set. |
| 13 | 184 | 0.348 | 1.3e-06 | 0.483 | 3.7e-12 | Strong and well-sampled. Second best. |
| 1, 2, 3, 7, 10, 14, 15 | 0 | — | — | — | — | No surveyed shoreline. Nothing to compare. |

**The honest summary:** among grids with meaningful samples, the relationship ranges from weak (grid 6, rho = 0.19) to moderate (grids 12 and 13, rho ≈ 0.48). It is not uniform. Grids 9 and 11 look strongest but have samples of 26 and 27 and cannot carry the argument.

**Grid 8.** Its divergence (no linear relationship, real monotonic one) is explained by the confounder Nick named: the change analysis is area-based, so a high-tide versus low-tide image pairing can make a hexagon look like it lost land when the shoreline barely moved. Not a standalone hole. Worth having the answer ready, because grid 8 is a third of the hexagon sample and a careful reader will notice.

---

## The image-quality claim

**Status: SUPPORTED on record. Dated artifact still wanted.**

The claim: the grids where the correlation is weak are the grids where image quality was flagged as poor *before* the shoreline analysis ran, which makes it a confirmed prediction rather than a post-hoc story.

Nick 07-22, in his words: "the areas where we flagged before we did these shoreline change analysis as unreliable data, sure enough was not as related at all."

For publication, still obtain a dated artifact (notebook, commit, or message) so the sequence is documented and not only recalled.

**On the geographic gradient.** Nick attributes the weak southwestern grids mostly to "large amounts of difficult-to-classify data" and "error in the change analysis itself," compounded by smaller samples, not primarily to shoreline type. The honest read is a data-quality story that reinforces the image-quality point. **Do not frame it as a clean geomorphic law.**

---

## The two footprints (do not conflate)

| Analysis | Footprint | Resolution | Status | Notes |
|---|---|---|---|---|
| Change analysis (wide screen) | ~4,000 sq mi | area-based | **PENDING confirm** | Nick 07-22: "I wouldn't be surprised" it was 4,000, but "I'd have to check." The public "4,000 square mile study" figure refers to this one. |
| Shoreline change analysis (granular) | ~800 sq mi / ~2,900 mi of shoreline | 1 meter | **CHALLENGED 2026-09-20. Nick now says 2,500 and has marked 2,900 wrong twice.** Originally his own figure: "25 desktop analyses, 39 subprojects, ~2,900 miles of shoreline including internal water features, 800+ sq mi." Neither figure is computable from the 39 layers, which cap at 1,550.8 mi. See "2,900 miles of shoreline, challenged 2026-09-20" below. | Nick: 25 desktop analyses, 39 subprojects, ~2,900 miles of shoreline including internal water features, 800+ sq mi. |

| North Carolina's total estuarine shoreline | **more than 12,000 miles** | **CONFIRMED, sourced 2026-08-28** | NC DEQ, Division of Coastal Management, Estuarine Shoreline Mapping Project: "the first ever continuous digital map of more than 12,000 miles of estuarine shoreline in North Carolina." **This is the state total. The 2,900 miles is what this project measured, roughly a quarter of it.** State both figures rather than publishing a computed percentage: the two counts come from different methods. Resolves the PENDING on the one-pager's 12,000 figure. |
| Shoreline geometry | ~2,900 mi of shoreline inside ~800 sq mi | CONFIRMED (derived from two confirmed figures) | The measure of how convoluted this coast is, and the reason the granular pass is expensive. Publishable only in service of the two-pass logic. |

**Two different analyses at two resolutions.** The public announcement used 4,000; an earlier briefing used 800. Both are true if labeled correctly. They are currently being used interchangeably, which is a factual error waiting to be caught. **Do not headline either until Nick confirms the 4,000.**

---

## Carbon

**Editorial decision, locked 2026-08-27: carbon appears once, as the reason the grant exists. See `EDITORIAL.md`.**

| Claim | Value | Status | Notes |
|---|---|---|---|
| The grant targeted carbon rather than treating it as a co-benefit | qualitative | CONFIRMED | Jacob 08-17: "It's a lot different than some of our previous work where the carbon was really the co-benefit. This was really targeting these areas for carbon." Client's own framing. Quotable. |
| Program target: up to 600 acres of marsh protected from eroding | 600 acres | **CONFIRMED, cleared for page** | SOW, Executive Summary. A land-protection target, which is what the grant bought. Cleared precisely because it carries no carbon-accounting claim. |
| Marsh loss releases carbon | qualitative | PENDING | True and uncontroversial. Needs a citation if stated as fact rather than as the grant's premise. |
| SOW CO2e figures: 183,000 Mt total, 305 Mt/acre | — | **BLOCKED by editorial decision** | Real, sourced to the SOW, deliberately excluded. Tonnage is a carbon-accounting claim and opens the methodology fight. |
| Verra, REDD+, VM0007, VM0033 | — | **BLOCKED** | Nick 07-22: "We're not doing carbon accounting, and we shouldn't claim to. I'd be very wary of mentioning Verra at all." Named in the SOW and in Stop-Loss citation 29, so it is a deliberate company framing rather than an error. It stays off this page regardless. |
| Global: disturbed coastal wetlands emit ~1.9 Gt CO2/yr, ~4.5% of anthropogenic emissions | 1.9 Gt / ~4.5% | CONFIRMED but **excluded** | Temmink et al. 2022, *Science*, via Stop-Loss. Scope is coastal wetlands as a class plus soil-carbon release on disturbance, **not marsh erosion alone**. Citable if ever needed, belongs to Natrx's Dry Forming thesis, not to NCCF. Never use Nick's off-the-cuff "5% from eroded marsh." |
| Per-acre marsh sequestration rate, "highest sequestering habitat in the world" | — | **BLOCKED, awaiting citation** | Jacob 08-17 tentatively attributed it to NOAA and could not name the source: "I can look at that and send it to you." Owed by Jacob. **A different figure from Temmink. Do not merge the two.** |

**Natrx measured no carbon on this project.** The deliverable was erosion-based site selection. Any copy implying otherwise is wrong on the facts, not just off-message.

---

## The grant behind the work

| Claim | Value | Status | Notes |
|---|---|---|---|
| EPA award to the Atlantic Conservation Coalition | $421,238,074 | **CONFIRMED, sourced 2026-08-28** | EPA Climate Pollution Reduction Grant program, July 2024. Four-state partnership (NC DNCR, SC Office of Resilience, Maryland Dept of the Environment, Virginia DEQ), administered by NC DNCR. Each state gets $50M for shovel-ready projects; The Nature Conservancy gets $200M. Note the SOW cover letter calls it "Atlantic Coast Coalition"; the body is correct. |
| NCCF's share | ~$30M over five years | **CONFIRMED, sourced 2026-08-28** | Outer Banks Voice, 2024-08-18. Largest grant in the organization's history. Covers 15 acres of peatlands and **595 acres of coastal habitat over five years**. |
| That this is the same money funding the Natrx scope | — | **CONFIRMED. Closes STATUS open item #5.** | The award's 595 acres is the SOW's 600 acres. Same program. Established in `ANALYSIS-2026-07-13` from public documents. **Nick does not need to confirm this.** |

---

## Cost

| Claim | Value | Status | Notes |
|---|---|---|---|
| Traditional-method equivalent cost | $3.5–5M | PENDING (soft, attributed) | Nick 07-22: doing this the traditional way "would have easily been three and a half to five million dollars," with "I don't want to pin ourselves" to it. Attributed, order-of-magnitude, never a hard figure. |
| Comparator: engineering firm site survey | ~$65,000 for 3–4 sites | **NOT FOR PUBLICATION** | Nick 07-22: the firm Coastal Fed uses would charge ~$65K to survey three or four sites. This is Nick's estimate of a third party's pricing, so it is hearsay twice removed and not sourced to the firm. Retained for internal reasoning only. Dylan, 2026-08-28: not real enough to print, and naming a competitor's price puts an antagonist in the story. Keep it off the page. The apples-to-oranges caveat belongs **here**, to a field-versus-desktop comparison, and nowhere else. |
| Physical inspection at this scale is impractical | qualitative | CONFIRMED | Nick: practical ceiling of field inspection is "less than a single municipality"; an engineering firm on Natrx's budget could cover "probably a single county." |
| Contract value | $350,000 | CONFIRMED | SOW. Phase I $55,000, Phase II $52,500, Phase III $152,500, Phase IV $90,000. **Check with Nick and Dylan before publishing a client contract value.** |
| **Percent-of-program-spend framing** | **about 1% of the NCCF award** | **LIVE. Un-retired 2026-08-28.** | **The earlier RETIRED entry was a register error and is withdrawn.** Nick did not object to this framing; he proposed it, unprompted, 2026-07-22 transcript 19:09: "contextualize it for the money that's going to be spent, the entire grant in North Carolina... this is like point oh two, point oh one percent of total cost to optimize everything. It's a rounding error." His apples-to-oranges caveat attaches to the $65K field-survey comparator above, and was lifted onto this row by mistake. What was actually wrong was the **number**: `ANALYSIS-2026-07-13` found Nick's 0.01–0.02% off by 50–100x once a real denominator existed. Corrected figure: **$350,000 against the $30M NCCF award is 1.17%.** |
| Publishable form of that framing | "about one percent" | CONFIRMED, with one caveat | Publish as **about one percent**, not 1.2%. Truer to the hedge, and it does not invite the back-calculation as directly. **Note before publishing:** the ratio times the public $30M award reconstructs the contract value to within a rounding error, so shipping the percentage is in practice shipping $350K. That is Dylan's and Nick's call, not a register decision. The "rounding error" phrasing stays dead. |

Avoid the word "cheap" in copy. It undersells the work.

---

## Downstream benefits (Jacob 08-17)

| Claim | Status | Notes |
|---|---|---|
| Better data lets living shorelines be sized to actual conditions rather than built to permit maximums | **CONFIRMED, headline-safe** | Jacob, quoted in full in `EDITORIAL.md`. The economic lead. |
| Data improves funding competitiveness | CONFIRMED | Jacob: "If it comes down to you and another proposal, if you have the data they don't, you're going to get funded versus other projects." |
| Data eases permitting and reduces cost | CONFIRMED | Jacob: "the regulators and permit reviewers, we definitely want to see as much data as possible, so it definitely helps move everything along more efficiently." |
| Prior method required more upfront field verification | CONFIRMED | Jacob: "you would have to go out and do a lot more upfront pre-site verification and looking at rates... Now we have the shorelines prioritized, so that's step one done." |
| Permit submission targeted within ~6 months, construction within ~2 years | CONFIRMED as intent | Jacob 08-17. Frame as his stated timeline, not a commitment. |
| Datasets and tool public on the Federation site by fall 2026, via ArcGIS Online | CONFIRMED as intent | Jacob: "It'll certainly all be publicly available by this fall at some point." No date. The page cannot promise one. |
| No site moved up or down once the data landed | CONFIRMED | Jacob, asked directly: "Not really." **The page cannot claim the data surprised the experts.** |

---

## Scope

| Claim | Status | Notes |
|---|---|---|
| Coverage expanded to most of the Pamlico | CONFIRMED | |
| Coverage exceeded original scope | CONFIRMED | Nick's "over-delivery." The expansion made the comparison possible at all. Jacob 08-17 corroborates and explains why: "We both got better at identifying sites and they got better at running it. They were able to take on more." |
| Method suits marsh-dominated estuaries across Southeast, East, Gulf | PENDING | Reasonable. Wants Lise's sign-off as a generalization. |
| Method unsuited to sandy beaches | CONFIRMED | The method reads the vegetation line as a shoreline proxy, accurate for marsh, not for beaches. State it plainly. Naming the limitation buys credibility for everything else. |
| The moat is process, not the model | CONFIRMED (Nick, attributed) | Methodology public, NAIP imagery free, ML not the hard part. The hard part is a reproducible process across 39 subprojects, human-in-the-loop QA, and trained judgment on ambiguous tidal imagery. Two people in the company can do the interpretation well. |
| One meter matters | CONFIRMED (Nick) | NCCF cared about rates as low as 2 ft/yr. Over ten years that is ~20 feet, near the floor of what can be confidently fit. Ten-meter data would miss it. **Correction 2026-08-28: the earlier "roughly 7 one-meter pixels" was off by one and rounded in the flattering direction. 20 ft is 6.1 m, so six pixels. Copy should not count pixels at all; state the movement and state that free satellite imagery cannot see it.** |

---

## Not for print

**Site selection versus erosion data.** Nick 07-22: the Coastal Federation chose some sites as pet projects rather than by peak erosion, so projected savings came in below a Dare-County-first selection. This explains why the erosion data and the final site list do not perfectly align. **Internal only. Never external, and never characterized in any way that reflects on the client.**

**Ranked top-ten list. Do not build.** Nick 07-22: keep it high level, defer to NCCF's own takeaways, lead with the concentration finding. Dare County can be named as worst, on record. No sortable leaderboard of named places.

---

---

## Jacob Boyd follow-up answers, 2026-09-01

Source: `Natrx Story Facts.docx`, Jacob's written answers to our open questions. **Client-sourced, which
supersedes the news-article sourcing on the grant.**

| Claim | Value | Status | Notes |
|---|---|---|---|
| Jacob's name and title for print | **Jacob Boyd, Salt Marsh Program Director** | **CONFIRMED. Closes the print-attribution item.** | The page already renders it this way, with the Federation appended. No change needed. |
| Coalition name | **Atlantic Conservation Coalition** | **CONFIRMED** | The SOW's "Atlantic Coast Coalition" is an error. Do not use it. |
| Coalition membership | NC, SC, VA, MD **and The Nature Conservancy** | **CONFIRMED** | Our copy says "a four-state conservation coalition," which is accurate but omits TNC. Naming the coalition is now available. |
| EPA award | $421M Climate Pollution Reduction Grant | **CONFIRMED, client-sourced** | Was sourced to Outer Banks Voice; now confirmed by NCCF. |
| NCCF's share | ~$30M | **CONFIRMED, client-sourced** | |
| **What the $30M funds** | **eight large-scale coastal restoration projects** | **CONFIRMED, new** | Jacob: NCCF leads "the coastal habitat enhancement initiative in North Carolina implementing eight large scale coastal restoration projects." Concrete and cleared. |
| Scope of those projects | salt marsh, seagrass beds, and marsh migration corridors | CONFIRMED | Broader than our page's "600 acres of marsh." The 600-acre target stands; do not imply marsh is the only habitat. |
| Publication timing | mapping tool **hoped for November** | CONFIRMED as intent | Jacob: "hope to have it ready by November." **Frame as hope, never as a date.** The page's "this fall" survives. |
| Dataset licensing | **none** | CONFIRMED | "There shouldn't be any licensing terms." |
| RCCP | **North Carolina Resilient Coastal Communities Program** | CONFIRMED | Our interview notes render it "RCPP," which is wrong. Not on the page. |

### The South Atlantic Salt Marsh Initiative

All of the following is from Jacob's written answer and traces to SASMI's own published plan.

| Claim | Status |
|---|---|
| SASMI formed 2021 under The Pew Charitable Trusts and SERPPAS | CONFIRMED |
| More than 400 partners across federal, state and local agencies, academia, NGOs and coastal communities | CONFIRMED |
| Covers North Carolina, South Carolina, Georgia and Florida | CONFIRMED |
| **About a million acres of salt marsh across those four states** | **CONFIRMED. The scale number Beat 7 was missing.** |
| **The Federation leads North Carolina's State Implementation Team**, which functions as the Salt Marsh Steering Committee | **CONFIRMED. Client credit, cleared.** |
| The Federation led development of the NC Salt Marsh Action Plan, released May 2024 | CONFIRMED |

**Handling note.** Jacob's text is lifted from the SASMI and NC SMAP plan documents. **Rewrite into the
page's voice; do not quote it and do not attribute the plan's prose to Jacob.**

**Do not claim the method will be replicated in the other three states.** Jacob said there is interest,
not that anyone has committed. "Boyd expects the results to travel" is the ceiling.

### Carbon: the citation arrived, and it is a different claim

Jacob owed a per-acre NOAA sequestration rate. What he sent is **NOAA stating that mangroves and salt
marshes sequester carbon at a rate roughly ten times greater than tropical forests**, citing an
*Ecological Society of America* paper, plus a Duke summary.

| Claim | Status |
|---|---|
| Marshes and mangroves sequester ~10x the rate of tropical forests (NOAA) | **CONFIRMED and sourced, but EXCLUDED by the locked carbon decision.** |
| The per-acre "highest sequestering habitat in the world" figure | **Never supplied. Remains BLOCKED. Do not use.** |
| A source for the ~5% global emissions figure | **Not supplied.** Already excluded; Temmink remains our source if ever needed. |

**Why it stays off.** Carbon appears once, as the reason the grant exists. A comparative sequestration
claim turns that paragraph into an argument, which `EDITORIAL.md` forbids. Logged as sourced so nobody
reopens it looking for a citation that now exists.

### Still owed by Jacob

- **Permission for Federation ghost forest photographs.** Asked, not answered.
- **A named ghost forest location.** He sent two articles rather than a place. Resolved independently: the NASA Earth Observatory piece names the **Albemarle-Pamlico Peninsula**, the **Alligator River National Wildlife Refuge**, and the marshes and ghost forests around **Manns Harbor**, imaged 2005-10-01 (Landsat 5) and 2024-10-13 (Landsat 9). Manns Harbor is Dare County mainland, roughly fifteen miles north of Navy Shell on the same shore.

---

## Navy Shell, resolved from the data 2026-08-28

Determined from `src/app/projects/nccf/data/layers/339_navy_shell.geojson` in this repo, not from Nick.

| Finding | Value |
|---|---|
| Navy Shell centroid | **35.7411 N, 75.7332 W** |
| Worst transect in that layer | **-45.60 ft/yr, r² = 0.944** |
| Rank in the full dataset | **The six worst transects across all 39 layers are all Navy Shell** |
| Nearest sourced reference point | Stumpy Point, 35.6983 N, 75.7408 W, **Dare County** ([Wikipedia](https://en.wikipedia.org/wiki/Stumpy_Point,_North_Carolina)) |
| Mashoes, north on the same shore | 35.81 N, Dare County mainland |

**Navy Shell sits about three miles due north of Stumpy Point on the same shore, between it and Mashoes. It is in Dare County.**

**Status: geographic inference from repo data plus a sourced reference point. Not Nick's confirmation.** Strong enough to restore "on the mainland shore of Dare County" to Beat 4 and the chart label if Dylan wants it. Nick's confirmation is still worth having and is no longer blocking.

**Discrepancy to log:** this register carries the peak as **-45.91**, recomputed from the public ArcGIS webmap. The repo's derived layer gives **-45.60**. The page says "about 46 feet", which survives either figure. Reconcile before print.

---

## On-page audit, 2026-08-28

Every claim found live in `reference/vanishing-edge-draft2.html` that had no entry in this register.

| On the page | Where | Status | Disposition |
|---|---|---|---|
| The peak retreat attributed to Dare County | Beat 4 body, bar label, interactive note 4 | **RESOLVED 2026-08-28. County now sourced; copy still decoupled.** | The peak of -45.91 ft/yr is at **Navy Shell**, county unconfirmed. All three places now name the rate and not the county: "At the worst single spot measured", "The worst spot measured", "the worst spot measured anywhere on this coast". Dare as worst county overall and Hyde second are confirmed and remain on the page. Navy Shell's county is still the only open question for Nick, but **the page no longer depends on the answer.** |
| "In 2024 the EPA awarded $421 million... the Coastal Federation's share is roughly $30 million over five years" | Beat 7 | **CLEARED 2026-08-28** | Both figures now sourced. See "The grant behind the work" above. Accurate as written. |
| "A single project runs well into six figures..." | Beat 3 | **CUT 2026-08-28, applied** | Unsourced. No construction cost exists anywhere in this register. Dylan's call: the beat carries its weight from the physical reality of marine construction, not from a figure we would have to defend. Sentence struck rather than sourced. |
| "North Carolina has about 2,900 miles of shoreline..." | Interactive, note 0 | **FIXED 2026-08-28** | Was a factual error: 2,900 is the measured footprint, not the state total. Now states both, the state's 12,000+ and this project's 2,900. |
| "Nothing like it had been done here before" | Beat 2, coast band figcaption | **CLEARED** | Not in this register but sanctioned by `EDITORIAL.md`: "The page can say plainly that no comparable dataset existed. Nick, who built it, cannot point to one. Stating that is reporting." Entered here so it stops being relitigated. |
| "about 93,000" measurement spots | Beat 4, interactive note 3 | CONFIRMED | Rounds 93,004. The page carries no exact transect figure and 93,418 appears nowhere in the build. |
| "several million dollars" for the traditional approach | Beat 5 | CONFIRMED | Correctly softens the PENDING $3.5–5M. Keep the hedge. |
| "less than four percent" of the variance | Beat 5 | CONFIRMED | Matches r² = 0.038. Satisfies the overclaim rule. |

---

## Review

The July register carried a line that nothing ships without Lise Montefiore's review. Whether that gate still stands for NCCF is open. See `OPEN-QUESTIONS.md` #2.

---

## Prior public claims (the Natrx OS one-pager)

A Natrx OS project page for this engagement, "NC Coastal Federation Coastal Wetlands Assessment & Planning," exists as a five-page asset and carries a cleared Jacob Boyd quote, which means it has been client-reviewed. Anything it states publicly is already attributable to Natrx, and this page cannot silently contradict it.

| Claim on that page | Relationship to this register |
|---|---|
| "808 SQ MI · SHORELINE CHANGE ANALYSIS (SCA)" | Consistent with the ~800 sq mi granular footprint. **Resolves the labeling question in public: 808 is the SCA number.** The 4,000 figure is the change analysis and still needs Nick's confirm. |
| "600+ ACRES · WETLANDS TARGETED FOR PROTECTION" | Consistent. Cleared for our page. |
| "1m IMAGERY PRECISION" | Consistent. |
| "183K+ TONS OF CO2 KEPT OUT OF THE ATMOSPHERE · 25-YEAR HORIZON" | **Conflicts with the locked editorial decision to carry no tonnage.** The figure is already public under Natrx's name. See `OPEN-QUESTIONS.md` #1a. |
| "wetland loss ... can happen at up to eight feet of shoreline retreat per year" | Consistent with the SOW's 4–8 ft/yr band and with the measured data. **Note that the public Natrx claim is 8 ft/yr, not 50.** Further reason the 50 stays dead. |
| "soil-organic-carbon mapping," "carbon maps" as deliverables | **Conflicts with Nick's 2026-07-22 position** that Natrx is not doing carbon accounting. Both cannot be described the same way. Needs Nick. |
| "turning history into prediction," "predictive erosion-hotspot identification" | **Conflicts with the triage-not-predictor rule.** Do not repeat this phrasing on the NCCF page. |
| Jacob Boyd, cleared quote: "This level of decision-ready, coastwide data has never been available before. With the results of Natrx's assessment, we will have the insight needed to direct resources where they will have the greatest impact." | CONFIRMED and already client-approved. Usable. |
| "more than 12,000 miles of estuarine shoreline" in NC | **RESOLVED 2026-08-28.** Sourced to NC DEQ Division of Coastal Management. Cleared for reuse. See the footprints section. |
| Contact: Drew Keeley, Solutions Specialist | Note: that page routes to sales. This one routes to press. |

The one-pager is written largely in future tense ("is mapping," "will have") under a headline that says the analysis is complete. Our page is past tense for completed work, so the two will read differently by design.

---

## 2,900 miles of shoreline, challenged 2026-09-20

Regenerate with `node scripts/nccf-shoreline-length.mjs`.

**Nick has twice marked 2,900 wrong and says 2,500.** He is the source of the 2,900 in the first
place: the row above records it as "Nick: 25 desktop analyses, 39 subprojects, ~2,900 miles of
shoreline including internal water features, 800+ sq mi." So this is the CTO correcting his own
earlier figure, not a dispute between the page and the data.

**Neither figure is computable from the 39 layers the page is built on.**

| Measure | Miles |
|---|---|
| `rect_width` summed over all 93,418 transects | **1,550.8** |
| `rect_width` summed over the 76,052 eroding transects | 1,278.3 |
| `rect_width` excluding the 401 null-geometry features | 1,538.4 |
| the 401 null-geometry features alone | 12.4 |
| geodesic polyline, within-run gaps only | 1,724.6 |
| the same, plus half a spacing at each of the 3,426 run ends | 1,795.9 |

**No subset reaches 2,500.** Summing `rect_width` over every transect is the ceiling at 1,550.8
miles, and every subset is smaller by construction. 2,500 would require 1.61 times that total and
2,900 would require 1.87 times it.

**The two methods disagree with each other by about 11 percent, and that is worth knowing.**
`rect_width` has a median of 95.1 feet while the geodesic spacing between consecutive transects has
a median of 109.3 feet, so the rectangles do not tile the shoreline continuously. Summing them
understates the extent the transects span.

**A near-miss that is an artifact, recorded so nobody reaches for it.** Walking the polyline with a
5,000 foot break tolerance returns 2,467.9 miles, which looks like 2,500. It is not shoreline. That
figure includes 653 miles of 1,000 to 5,000 foot jumps and 1,672 miles of 5,000 to 20,000 foot
jumps, which are the connector lines between disjoint runs across open water. 96.35% of consecutive
gaps are under 200 feet and those account for 1,724.6 miles; everything above 500 feet is a jump.

**The likely explanation for the gap, unconfirmed.** Nick's figure is qualified "including internal
water features." The transects appear to be cast only where the granular analysis ran, so a footprint
measure that counts the full convoluted shoreline inside the study area, creeks and internal features
included, can legitimately exceed what the transect set spans. That would make 2,500 a footprint
figure and 1,551 a transect-coverage figure, two different quantities. **This needs Nick to confirm
what his number counts.** Until then the page has no computed basis for either.

**Not decided here.** The page was not touched. Whether to publish 2,500 on Nick's authority, wait
for his definition, or state what the transects cover is an editorial call.

---

## The concentration figure: 45.81% replaces 43.44%, decided 2026-09-20

Regenerate with `node scripts/nccf-concentration.mjs`. Committed so this is never derived from
scratch a third time.

**The figure reproduces exactly, and the method was recorded all along.** The register already said
"all ~76k eroding points equally weighted," and that is precisely it: rank the 76,052 eroding
transects by rate, take the top tenth **by transect count**, and report their share of the
**summed rate**. That returns 43.4374%, and it reproduces every decile in `nccf-figdata.json` to
within 0.004 points, so there is no doubt about provenance.

| Decile | `nccf-figdata.json` | Equal weight, recomputed | Length weighted |
|---|---|---|---|
| 1 | 43.44 | **43.44** | **45.81** |
| 2 | 19.04 | 19.04 | 18.20 |
| 3 | 11.79 | 11.79 | 11.24 |
| 4 | 8.06 | 8.06 | 7.67 |
| 5 | 5.82 | 5.82 | 5.60 |
| 6 | 4.35 | 4.35 | 4.21 |
| 7 | 3.24 | 3.24 | 3.15 |
| 8 | 2.31 | 2.31 | 2.24 |
| 9 | 1.43 | 1.43 | 1.39 |
| 10 | 0.51 | 0.51 | 0.49 |

**The problem is that equal weighting answers a different question from the one the page asks.**
The page says: *"Nearly half of all the land lost came from one tenth of the eroding shoreline."*
Both halves of that sentence are length claims. Equal weighting supplies neither.

1. **"One tenth of the eroding shoreline" is not what the method selects.** `rect_width`, the
   stretch of coast each transect represents, runs from 1.02 to 172.96 feet, median 95.18,
   coefficient of variation 0.49. The top 7,605 transects by count cover 105.2 miles, which is
   **8.23%** of the 1,278 miles of eroding shoreline, not a tenth.
2. **The bias is systematic rather than noise.** The fastest tenth sit on stretches averaging
   73.0 feet against 90.5 feet for the rest, a ratio of 0.807. The fastest transects stand for
   *less* coast than average, so equal weighting inflates their share.
3. **"Land lost" is an area and the method never computes one.** Land lost is rate times width.
   Summing bare rates drops the width entirely.

**The figure the sentence describes is 45.81%.** Rank by rate, take the top tenth of the eroding
shoreline **by length**, report their share of **land lost**. That is 45.8103%, and it is robust:
splitting the boundary transect instead of excluding it moves it by 0.0001 points.

**Both readings of the prose survive, and the correct one survives better.** "Nearly half" is
truer at 45.81 than at 43.44. "One tenth of the eroding shoreline" becomes literally true under
length weighting, where under the published method it is 8.23% of the shoreline described as a
tenth.

**Methods tested**, all against the then-published 43.44:

| Method | Result |
|---|---|
| Eroding, rank by rate, top tenth by count, loss = rate (published until 2026-09-20) | **43.44** |
| Eroding, rank by rate, top tenth by length, loss = rate x width **(published from 2026-09-20)** | **45.81** |
| Eroding, rank by rate, top tenth by count, loss = rate x width | 41.22 |
| Eroding, rank by rate, top tenth by length, loss = rate | 48.41 |
| Eroding, rank by total loss rather than rate, four variants | 32.57 to 46.90 |
| All 93,418 transects rather than the eroding subset, eight variants | 37.36 to 53.41 |
| Excluding the 401 null-geometry features | 43.49, near but not the figure |
| r squared filtering at 0.3, 0.5, 0.7, 0.8, 0.9, 0.95 | 36.05 to 43.15 |
| Aggregating into 780 stretches first | 30.69 to 32.33 |
| Accretion offsetting loss in the denominator | 45.87 and 49.85 |

The r squared 0.5 row also confirms the method independently: this register's own robustness note
says "filtering to points with r² >= 0.5, the top decile still accounts for ~39%," and equal
weighting at that threshold gives 39.34%.

**Decided 2026-09-20: the page publishes 45.81%.** 43.44 measures neither land nor shoreline,
while the sentence above the figure claims both. 45.81 is the top tenth of eroding shoreline by
length with loss as rate times width, which is what the prose describes, and it makes "one tenth
of the eroding shoreline" literally true where the old method made it 8.23%.

**Method of record.** Rank the 76,052 eroding transects by rate, most negative first. Walk down
that ranking accumulating `rect_width` until 10% of the total eroding shoreline length is covered,
which takes 9,208 transects and 127.8 of the 1,278 miles. Sum `rate x rect_width` over those and
divide by the same product summed over all eroding transects. That is 45.8103%, and splitting the
boundary transect rather than excluding it moves it by 0.0001 points. Regenerate with
`node scripts/nccf-concentration.mjs`.

**"Nearly half" holds**, as it did at 41.22 and 43.44. It is truer at 45.81 than at either.

**Still carrying the old curve:** `nccf-figdata.json`, which sits outside this repo in the
Marketing folder, holds the ten-decile equal-weight curve starting 43.44. Nothing on the page
reads it at runtime, so it is a stale working artifact rather than a live inconsistency, but it
should be regenerated before anyone quotes it again. The length-weighted curve is in the table
above.

---

## Sequence correction, 2026-09-02

| Claim | Status |
|---|---|
| The change analysis (wide pass) identified the areas addressable for the granular pass | **CONFIRMED. SOW Phases II and III, quoted in `STATUS.md`.** |
| The final selection of shoreline segments was determined in coordination with NCCF | **CONFIRMED. SOW Phase IV.** |
| Coverage expanded from 25 planned subprojects to 39 | CONFIRMED |
| "The wide screen did not select the 39 survey areas" | **WITHDRAWN.** An overstatement written from interview fragments and never checked against the contract. It was enforced for three sessions. |
| That the wide pass predicts erosion rates | **STILL BLOCKED.** Unchanged by the above. r² = 0.038 governs, and the page states it. |
| **On the page, Beat 4, placed 2026-09-18:** *"The wide pass narrowed the coast to the stretches worth a closer look. Which of those got measured in detail was settled with the Federation."* | **CLEARED against this table.** Clause one rests on the wide-pass row above, and on SOW Phase II, "where further analysis is warranted." Clause two rests on the coordination row, and on SOW Phase IV verbatim. Both halves present, neither party the sole decider, nothing asserted that this register does not carry. Does not touch the blocked prediction claim: "worth a closer look" is about where to spend the measuring budget, not about predicting rates. |


---

## County loss, computed 2026-09-02

Computed in this repo from all 39 layers, 93,418 transects. Loss per transect is
`rect_width × land_change_ft_per_year` where the rate is negative. County assignment is
geographic inference from layer centroids, not a boundary-file join.

| County | Loss sq ft/yr | Share | Mean rate | Median rate | Past 5 ft/yr | Loss per surveyed mile |
|---|---|---|---|---|---|---|
| Hyde | 4,782,539 | 39.0% | −1.67 | −0.85 | 9.4% | 8,450 |
| Carteret | 3,769,808 | 30.7% | −1.28 | −0.78 | 8.9% | 7,699 |
| Dare | 2,624,949 | 21.4% | −2.08 | −0.68 | 10.5% | 11,960 |
| Pamlico | 895,606 | 7.3% | −0.92 | −0.53 | 2.5% | 4,550 |
| Pender/Onslow | 201,614 | 1.6% | −0.41 | −0.33 | 0.5% | 2,557 |

| Claim | Status |
|---|---|
| Dare erodes fastest: worst mean rate, largest share of transects past 5 ft/yr, most loss per surveyed mile, and the peak transect | **CONFIRMED from the data.** Consistent with Nick’s “Dare County by far.” |
| Hyde is second on intensity | **CONFIRMED.** Second on mean rate and on share past 5 ft/yr. |
| Dare loses the most land in total | **FALSE as computed.** Dare is third on total loss, behind Hyde and Carteret. |
| Any ranking of counties by total loss | **NOT FOR PUBLICATION.** These totals rank where Natrx surveyed, not where North Carolina erodes. Carteret has 490 surveyed miles against Dare’s 220. A county-total ranking derived from a chosen survey footprint is not a statement about counties. |

**Collision closed 2026-09-02.** Beat 5 said Dare “is the hardest hit overall.” *Overall* read as
a total, and Dare is third on total loss. The page now says Dare **is eroding fastest**, which every
intensity measure supports and which the rebuilt map agrees with: the four highest shares of
shoreline past 10 ft/yr in the dataset are Mashoes (76.8%), Navy Shell (42.4%), Stumpy Point (34.3%)
and Parched Corn Bay (26.9%), all Dare, and all carry the largest zone markers on the interactive.

**Still not publishable:** any ranking of counties by total land lost. Those totals rank the survey
allocation, not the counties. Carteret has 490 surveyed miles against Dare's 220.

---

## The interactive's top band, computed 2026-09-02

Derived in this repo from the 39 layers. Rate thresholds are the ones already published in
this register (1, 2, 5 ft/yr); the 10 ft/yr cut is new and exists to separate the extreme
from the merely fast, because "over 5" otherwise holds everything from 5 to 46.

| Faster than | Transects | Share |
|---|---|---|
| 1 ft/yr | 38,006 | 40.68% |
| 2 ft/yr | 21,942 | 23.49% |
| 5 ft/yr | 7,724 | 8.27% |
| 10 ft/yr | 1,835 | 1.96% |
| 15 ft/yr | 423 | 0.45% |

**On the page, in the interactive's legend:** *25 stretches are losing more than 10 feet a
year. About 17 miles of shore.*

| Claim | Status |
|---|---|
| 25 stretches / about 17 miles past 10 ft/yr | **PENDING.** Ours, reproducible, but it is a property of our own rendering, not of the dataset. It counts merged polylines after resampling the measured line to a vertex every 0.75 map units and banding each run by its median rate. A different resampling gives a different count. Publishable only with that method note, or state the miles alone. |
| 1.96% of transects past 10 ft/yr | **CONFIRMED**, computed directly from the layers, no resampling involved. Prefer this form if the stretch count is challenged. |

**Not a leaderboard.** The map bands by threshold and names no places, which keeps it inside
Nick's 07-22 instruction not to build a ranked top-ten list.

