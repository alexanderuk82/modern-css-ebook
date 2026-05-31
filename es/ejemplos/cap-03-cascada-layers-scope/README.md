# Ejemplos del capitulo 3 · Cascada, layers, @scope

> Etiqueta de soporte: **BASELINE 2025/2026**

## Decide qué regla gana sin pelear

Dos demos en una página:

- **El orden de capa gana a la especificidad**: un botón es rojo por un `#lbox .lbtn` de alta especificidad en una capa base, y verde por un `.lbtn` de baja especificidad en una capa theme posterior. El botón sale verde. Sin `!important` por ningún lado.
- **@scope no se filtra**: los estilos aplican desde la tarjeta exterior y se paran en la anidada, con `@scope (.outer) to (.nested)`. Sin convenciones de nombres, sin fugas.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c03/cascade/

`@layer`, `:is()` y `:where()` llevan años en Baseline. `@scope` es Baseline
desde finales de 2025, así que úsalo con progressive enhancement.
