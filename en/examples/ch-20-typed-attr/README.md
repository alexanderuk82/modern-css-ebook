# Chapter 20 examples · Typed attr()

> Support label: **BASELINE 2025** (typed attr; classic attr() in content is older and universal)

## Pass data from HTML to CSS, no intermediate variables

Two demos in one page:

- **Grid columns from an attribute**: the same CSS, two grids; the column count is `repeat(attr(data-columns type(<number>), 3), 1fr)`.
- **Chip color from an attribute**: each chip's background is `attr(data-color type(<color>), gray)`.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c20/attr/

Always pass the fallback (second argument) so the property never breaks where the
attribute is missing or typed attr() is unsupported.
