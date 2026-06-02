# Chapter 11 examples · Tree-Counting Functions

> Support label: **CHROME ONLY** (expected Baseline 2026)

## Staggered motion with no hand indexes and no JavaScript

- **Equalizer wave**: 12 bars, each offset by its sibling number via `animation-delay: calc((sibling-index() - 1) * -0.09s)`. With the `nth-child` + `@supports` fallback it animates in every browser today; where `sibling-index()` is supported, it uses the clean version.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c11/siblings/

`sibling-index()` and `sibling-count()` are CHROME ONLY for now (Interop 2026,
expected Baseline 2026). Always pair them with the nth-child fallback.
