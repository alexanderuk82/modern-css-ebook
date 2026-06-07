# Ejemplos del capitulo 20 · Typed attr() y el puente HTML/CSS

> Etiqueta de soporte: **BASELINE 2025** (attr() tipado; el attr() clásico en content es más antiguo y universal)

## Pasa datos del HTML al CSS, sin variables intermedias

Dos demos en una página:

- **Columnas de grid desde un atributo**: el mismo CSS, dos rejillas; el número de columnas es `repeat(attr(data-columns type(<number>), 3), 1fr)`.
- **Color del chip desde un atributo**: el fondo de cada chip es `attr(data-color type(<color>), gray)`.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c20/attr/

Pon siempre el fallback (segundo argumento) para que la propiedad nunca se rompa
donde falte el atributo o no haya soporte de attr() tipado.
