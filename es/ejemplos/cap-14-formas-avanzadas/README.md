# Ejemplos del capitulo 14 · Formas avanzadas

> Etiqueta de soporte: **BASELINE** (mask, polygon, border-image, mix-blend-mode) · **BASELINE 2026** (shape()) · **BEHIND FLAG** (corner-shape)

## Formas que antes pedían SVG, ahora en CSS puro

Tres demos en una página, todas BASELINE hoy:

- **Ticket dentado**: muescas laterales recortadas con `mask` + dos degradados radiales y `mask-composite: intersect`. Sin imagen.
- **mix-blend-mode**: círculos solapados que se tiñen donde se cruzan con `multiply`.
- **border-image**: un borde en degradado en vez de una línea de color plano.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c14/shapes/

`shape()` (BASELINE 2026) y los squircles con `corner-shape` (BEHIND FLAG) se
cubren en el capítulo con sus etiquetas.
