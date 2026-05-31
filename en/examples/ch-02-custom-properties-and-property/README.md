# Chapter 2 examples · Custom Properties and @property

> Support label: **BASELINE 2024**

## Typed custom properties the browser can animate

Three demos in one page:

- **Animated gradient**: a conic gradient whose start angle is a registered `@property <angle>`. The browser animates the angle, so the gradient spins. No JavaScript.
- **One variable, light to dark**: a single custom property, set by a slider, blends a card from light to dark with `color-mix()`.
- **Transition, not just keyframes**: a button whose registered `<percentage>` transitions smoothly on hover.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c02/property/

All of this is BASELINE 2024, so it works in Chrome, Firefox and Safari today.
