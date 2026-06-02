# Chapter 10 examples · Logical Properties

> Support label: **BASELINE**

## CSS that works in any language without rewriting

- **The same card, two directions**: one class using `border-inline-start`, `padding-inline` and `text-align: start`. In LTR the accent bar is on the left; in an Arabic `dir="rtl"` card it flips to the right on its own. Same CSS, no duplication.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c10/logical/

Logical properties are BASELINE. Write logical by default (`margin-inline`,
`padding-block`, `inset`) and your CSS is ready for RTL and vertical writing.
