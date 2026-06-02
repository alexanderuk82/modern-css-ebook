# Ejemplos del capitulo 6 · Container queries completas

> Etiqueta de soporte: **BASELINE 2025** (size + unidades) · **CHROME ONLY** (style + scroll-state)

## Piensa en componente, no en viewport

Dos demos en una página, las dos BASELINE 2025:

- **La misma card, dos contenedores**: el mismo HTML en un envoltorio estrecho y en uno ancho. La card estrecha se apila, la ancha va en horizontal, con `@container (min-width: 20rem)`. El contenedor es el envoltorio, no la card.
- **La tipografía escala con el contenedor**: el mismo título en dos anchos, con `clamp(..., 9cqi, ...)`.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c06/container/

Las style queries y las scroll-state queries (el header con sombra al pegarse)
se cubren en el texto del capítulo con su etiqueta CHROME ONLY y su código
completo. Necesitan un Chrome reciente, así que no van en esta demo Baseline.
