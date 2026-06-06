# Ejemplos del capitulo 15 · Transiciones modernas

> Etiqueta de soporte: **BASELINE 2024/2025** (@starting-style, allow-discrete, linear) · **BASELINE 2026** (calc-size)

## Animación expresiva, sin librerías

Dos demos sin JavaScript en una página:

- **Dropdown desde display:none**: un menú con checkbox que aparece con un fundido y un rebote usando `@starting-style` + `transition-behavior: allow-discrete`, y un rebote `linear()` en el transform.
- **Acordeón, sin JavaScript**: un `<details>` nativo que anima a altura auto con `interpolate-size: allow-keywords`.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c15/transitions/

El patrón `@starting-style` + `allow-discrete` es BASELINE 2024/2025.
`calc-size()` (BASELINE 2026) se cubre en el capítulo con un fallback de max-height.
