# Chapter 22 examples · Custom Functions

> Support label: **CHROME ONLY 139+** (on its way to Baseline)

## Your own CSS functions, native and no build

Two demos in one page:

- **A spacing scale from one function**: `@function --space(--level) { result: calc(var(--level) * 0.5rem); }`. Each bar's height is `--space(level)`.
- **Color steps from --darken()**: `@function --darken(--c, --by) { result: oklch(from var(--c) calc(l - var(--by)) c h); }`. One base color, progressively darkened.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c22/function/

`@function` is CHROME ONLY (Chromium 139+). Keep a fallback declaration before the
one that calls your function for browsers without support.
