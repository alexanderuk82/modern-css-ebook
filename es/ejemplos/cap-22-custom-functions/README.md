# Ejemplos del capitulo 22 · @function, custom functions

> Etiqueta de soporte: **CHROME ONLY 139+** (camino de Baseline)

## Tus propias funciones de CSS, nativas y sin build

Dos demos en una página:

- **Una escala de espaciado desde una función**: `@function --space(--level) { result: calc(var(--level) * 0.5rem); }`. La altura de cada barra es `--space(level)`.
- **Pasos de color desde --darken()**: `@function --darken(--c, --by) { result: oklch(from var(--c) calc(l - var(--by)) c h); }`. Un color base, oscurecido poco a poco.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c22/function/

`@function` es CHROME ONLY (Chromium 139+). Pon una declaración de fallback antes
de la que llama a tu función para los navegadores sin soporte.
