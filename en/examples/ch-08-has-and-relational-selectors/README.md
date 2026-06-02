# Chapter 8 examples · :has() and Relational Selectors

> Support label: **BASELINE 2024/2025**

## Patterns that used to need JavaScript, now one line

Two demos in one page, both with `:has()` and zero JavaScript:

- **A form that validates itself**: the field turns green via `.field:has(input:valid)` and red via `:has(input:user-invalid)`, and the submit button disables itself via `form:has(input:user-invalid)`.
- **Pick a plan**: each option lights up via `.option:has(:checked)`.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c08/has/

`:has()`, `:is()`, `:where()` and `:nth-child(of S)` are all BASELINE 2024/2025.
