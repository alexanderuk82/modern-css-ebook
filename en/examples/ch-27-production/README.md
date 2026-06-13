# Chapter 27 examples · Production

> Support label: **N/A** (production practice, not a single feature)

## Pure-CSS @supports feature detection

`index.html` is a live support panel: each row is decided by a pure CSS
`@supports` query (no JavaScript), so it shows what your browser supports right
now for `:has()`, container queries, `oklch()`, anchor positioning, scroll-driven
animations and `if()`.

It is the heart of progressive enhancement: build the base first, then enhance
what `@supports` allows.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c27/production/
