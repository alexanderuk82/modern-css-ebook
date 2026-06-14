# Chapter 16 examples · Scroll-Driven Animations

> Support label: **CHROME ONLY**

## Tied to the scroll, not the clock

One scrollable page, two effects, no IntersectionObserver:

- **Reading progress bar**: a fixed top bar driven by `animation-timeline: scroll(root block)`. It fills as you scroll the page.
- **Reveal on enter**: each card rises and fades in with `animation-timeline: view()` and `animation-range: entry 0% cover 35%`.

It also respects `prefers-reduced-motion` and turns the motion off.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c16/scroll/

Scroll-driven animations are CHROME ONLY for now (Chromium and Safari,
Firefox behind a flag) and degrade cleanly: where unsupported, content
just shows in its final state.
