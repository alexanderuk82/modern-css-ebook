# Chapter 23 examples · Mixins Preview

> Support label: **BEHIND FLAG** (Chrome Canary, `--enable-features=CSSMixins`)

## Reusable blocks of declarations, native

Honest note: `@mixin` only runs in Chrome Canary with the flag, and its syntax may
change. The `index.html` here shows the **results** a mixin packages, drawn with
plain CSS so they render everywhere:

- **Elevation levels**: what `--elevation(1..3)` would output, a coherent shadow scale.
- **Responsive grid**: what `--responsive-grid(min)` packages, an auto-fit grid in one line.

The real `@mixin` / `@apply` syntax is in the chapter.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c23/mixins/

Do not ship `@mixin` to production. Use Sass or utilities today; this is a preview
of where CSS is going.
