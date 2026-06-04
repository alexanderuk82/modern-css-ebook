# Ejemplos del capitulo 12 · Color en 2026

> Etiqueta de soporte: **BASELINE 2024** (OKLCH, color-mix, light-dark, color relativo) · **BASELINE 2026** (contrast-color)

## Deja atrás el hex

Tres demos visuales en una página, las tres BASELINE 2024:

- **Un color, una paleta entera**: seis tonos derivados de un solo `--brand` con color relativo, `oklch(from var(--brand) calc(l + 0.2) c h)`.
- **Escala con color-mix()**: la marca mezclada con el acento paso a paso, en el espacio OKLCH.
- **light-dark()**: la misma card forzada a claro y a oscuro con `color-scheme`, los colores desde una sola llamada a `light-dark()`.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c12/color/

`contrast-color()` se cubre en el capítulo (BASELINE 2026, úsala con fallback).
