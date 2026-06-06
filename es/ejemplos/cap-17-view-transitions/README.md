# Ejemplos del capitulo 17 · View transitions

> Etiqueta de soporte: **BASELINE 2025** (same-document) · **BASELINE 2026** (cross-document)

## Transiciones fluidas sin Framer Motion

- **Galería con elemento compartido**: tocas un recuadro y vuela desde su sitio y crece hasta el detalle, con un morph vía `view-transition-name: hero` compartido. El único JavaScript es `document.startViewTransition()`; la animación la hace CSS.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c17/view/

Las same-document view transitions son BASELINE 2025 y degradan limpio: donde no
existe `startViewTransition`, el estado cambia sin animación. Las cross-document
(`@view-transition { navigation: auto }`) se cubren en el capítulo.
