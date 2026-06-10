# Chapter 21 examples · The if() Function

> Support label: **CHROME ONLY 137+** (on its way to Baseline)

## Inline conditional logic, right inside a property

Two demos in one page:

- **Theme from a variable**: one card CSS; the colors are `if(style(--theme: dark): ...; else: ...)`. Two panels, same CSS, different `--theme`.
- **Chained if()**: each pill's color comes from its `--status` with `if(style(--status: error): red; style(--status: warn): amber; else: green)`, like if / else if / else.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c21/if/

`if()` is CHROME ONLY for now (Chromium 137+). Keep a fallback declaration before
the `if()` one for browsers that do not support it yet.
