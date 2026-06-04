# Chapter 12 examples · Color in 2026

> Support label: **BASELINE 2024** (OKLCH, color-mix, light-dark, relative color) · **BASELINE 2026** (contrast-color)

## Leave hex behind

Three visual demos in one page, all BASELINE 2024:

- **One color, a whole palette**: six shades derived from a single `--brand` with relative color, `oklch(from var(--brand) calc(l + 0.2) c h)`.
- **color-mix() scale**: brand mixed into accent step by step, in the OKLCH space.
- **light-dark()**: the same card forced to light and to dark with `color-scheme`, colors from one `light-dark()` call.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c12/color/

`contrast-color()` is covered in the chapter (BASELINE 2026, use with a fallback).
