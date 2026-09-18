# Measured noise floor, NCCF fragment

Calibration 2026-09-18, darwin, Playwright 1.62.1 chromium headless shell,
`deviceScaleFactor: 1`. Every figure below came out of `css-diff.mjs`.

| State | Run-to-run pixel delta |
|---|---|
| full-360 / full-390 / full-768 | 0 |
| glossary-390, stop0 / stop1 / stop2 at 390 | 0 |
| reduced-motion-390 / reduced-motion-1440 | 0 |
| **any 1440-width state** | **0, or exactly 3, intermittently** |

## The three pixels

When it fires, it is always the same three pixels, in the same place, with
the same values, whichever 1440 state happens to be capturing at the time:

```
x=450 y=8729   (199,200,213) vs (199,201,214)
x=792 y=8901   (232,234,238) vs (231,233,237)
x=791 y=8902   (184,187,203) vs (185,188,202)
```

One least-significant bit, in isolated pixels whose immediate neighbours are
byte-identical. They sit on the antialiased edge of `circle.zr` and
`circle.zf` inside `#ncZones`, the zone markers on the coast band. Those
circles are stroked, statically positioned, and land on fractional device
pixels once the viewBox is scaled, which is where a rasterizer has a free
choice between two roundings.

## What it is not

- **Not content-dependent.** Diffing the fragment against a byte-identical
  copy of itself, ten runs, returned `0,0,0,0,0,0,0,3,0,0`. Same file both
  sides, so nothing in the page can explain it.
- **Not an unfinished transition.** Ten runs at a 2000ms glossary settle
  returned `0,0,0,0,0,3,0,0,0,3`, which is worse than the default. Waiting
  longer does not help, and neither `.zr` nor `.zf` carries an animation.
- **Not a regression.** A real one cannot move a single pixel by one bit and
  leave every neighbour exact. Layout shifts, colour changes and missing
  elements all register in contiguous regions.

## The gate stays strict

`threshold: 0`, and any nonzero count still fails the run. Loosening it to
swallow three pixels would also swallow the 52px footer-clearance class of
regression this harness exists to catch. Read a failure instead of muting it.

## How to read a failure

- Only a 1440 state, count exactly 3, at the coordinates above: re-run. If
  it clears, it was this. If it reproduces on every run, it is real.
- Anything else, any other count, or any 360/390/768 state: treat as a real
  regression and read the artifacts in `/tmp/nccf-cssdiff/`.
