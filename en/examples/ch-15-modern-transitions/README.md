# Chapter 15 examples · Modern Transitions

> Support label: **BASELINE 2024/2025** (@starting-style, allow-discrete, linear) · **BASELINE 2026** (calc-size)

## Expressive animation, no libraries

Two zero-JS demos in one page:

- **Dropdown from display:none**: a checkbox-toggled menu that fades and springs in with `@starting-style` + `transition-behavior: allow-discrete`, and a `linear()` bounce on the transform.
- **Accordion, no JavaScript**: a native `<details>` that animates to auto height with `interpolate-size: allow-keywords`.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c15/transitions/

The `@starting-style` + `allow-discrete` pattern is BASELINE 2024/2025.
`calc-size()` (BASELINE 2026) is covered in the chapter with a max-height fallback.
