# Chapter 17 examples · View Transitions

> Support label: **BASELINE 2025** (same-document) · **BASELINE 2026** (cross-document)

## Fluid transitions without Framer Motion

- **Shared-element gallery**: tap a tile and it flies from its spot and grows into the detail view, morphing via a shared `view-transition-name: hero`. The only JavaScript is `document.startViewTransition()`; CSS does the animation.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c17/view/

Same-document view transitions are BASELINE 2025 and degrade cleanly: where
`startViewTransition` is missing, the state changes with no animation.
Cross-document (`@view-transition { navigation: auto }`) is covered in the chapter.
