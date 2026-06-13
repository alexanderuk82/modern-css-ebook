# Ejemplos del capitulo 27 · Producción real

> Etiqueta de soporte: **N/A** (práctica de producción, no una feature suelta)

## Detección de features con @supports en CSS puro

El `index.html` es un panel de soporte en vivo: cada fila la decide un `@supports`
en CSS puro (sin JavaScript), así que muestra qué soporta tu navegador ahora mismo
para `:has()`, container queries, `oklch()`, anchor positioning, scroll-driven
animations e `if()`.

Es el corazón del progressive enhancement: construye la base primero, y luego
mejora lo que `@supports` permita.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c27/production/
