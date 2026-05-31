# Chapter 3 examples · Cascade, Layers, @scope

> Support label: **BASELINE 2025/2026**

## Decide which rule wins without fighting

Two demos in one page:

- **Layer order beats specificity**: a button is red via a high-specificity `#lbox .lbtn` in a base layer, and green via a low-specificity `.lbtn` in a later theme layer. The button is green. No `!important` anywhere.
- **@scope does not leak**: styles apply from the outer box and stop at the nested one, using `@scope (.outer) to (.nested)`. No naming conventions, no leaks.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c03/cascade/

`@layer`, `:is()` and `:where()` are long Baseline. `@scope` is Baseline since
late 2025, so use it with progressive enhancement.
