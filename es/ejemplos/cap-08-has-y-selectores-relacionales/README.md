# Ejemplos del capitulo 8 · :has() y selectores relacionales

> Etiqueta de soporte: **BASELINE 2024**

## Patrones que antes pedían JavaScript, ahora una línea

Dos demos en una página, las dos con `:has()` y cero JavaScript:

- **Un formulario que se valida solo**: el campo se pone verde con `.campo:has(input:valid)` y rojo con `:has(input:user-invalid)`, y el botón de enviar se desactiva con `form:has(input:user-invalid)`.
- **Elige un plan**: cada opción se ilumina con `.option:has(:checked)`.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c08/has/

`:has()`, `:is()`, `:where()` y `:nth-child(of S)` son todos BASELINE 2024.
