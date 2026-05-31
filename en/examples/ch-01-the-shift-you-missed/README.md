# Chapter 1 examples · The Shift You Missed

> Support label: **MIXED** (customizable select is CHROME ONLY, `:has()` is Baseline 2024)

## A dropdown, two eras

The chapter's star demo. The same dropdown built two ways, side by side:

- **CSS 2026**: a customizable select styled in pure CSS with `appearance: base-select`. Keyboard, focus and accessibility come for free. About 10 lines.
- **JavaScript 2020**: a hand built component with click handlers, and it still skips real keyboard support, focus trap and Escape. 50+ lines or a 15 KB library.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c01/dropdown/

Customizable select leads in Chromium. In other browsers the CSS 2026 panel
falls back to a normal native select that still works, which is the honest point
the chapter makes. Full coverage and the fallback pattern are in Chapter 19.
