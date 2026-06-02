# Chapter 9 examples · Native Nesting, Goodbye BEM

> Support label: **BASELINE 2024/2025**

## Clean architecture, no Sass, no BEM

- **Nested card with a featured variant**: the whole card lives in one nested block. The featured variant is a nested `&.featured` (with its own nested `& .title` and `& .tag`), so the highlighted card needs no extra rules outside the block.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c09/nesting/

Native nesting is BASELINE 2024/2025. Pair it with `@scope` and `@layer` from
Chapter 3 for the full modern architecture, no preprocessor.
