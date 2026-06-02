# Chapter 6 examples · Container Queries

> Support label: **BASELINE 2024/2025** (size + units) · **CHROME ONLY** (style + scroll-state)

## Think in component, not viewport

Two demos in one page, both BASELINE 2024/2025:

- **Same card, two containers**: identical markup in a narrow wrapper and a wide one. The narrow card stacks, the wide one goes horizontal, via `@container (min-width: 20rem)`. The wrapper is the container, not the card.
- **Type scales with the container**: the same heading in two widths, sized with `clamp(..., 9cqi, ...)`.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c06/container/

Style queries and scroll-state queries (the sticky-shadow header) are covered in
the chapter text with their CHROME ONLY label and full code. They need a recent
Chrome, so they are not in this Baseline demo.
