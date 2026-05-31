# Ejemplos del capitulo 2 · Custom properties y @property

> Etiqueta de soporte: **BASELINE 2024**

## Custom properties con tipo que el navegador sí puede animar

Tres demos en una página:

- **Gradiente animado**: un gradiente cónico cuyo ángulo de inicio es una `@property <angle>` registrada. El navegador anima el ángulo, así que el gradiente gira. Sin JavaScript.
- **Una variable, de claro a oscuro**: una sola custom property, cambiada por un slider, mezcla una tarjeta de claro a oscuro con `color-mix()`.
- **Transición, no solo keyframes**: un botón cuyo `<percentage>` registrado transiciona suave al pasar el ratón.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c02/property/

Todo esto es BASELINE 2024, así que funciona en Chrome, Firefox y Safari hoy.
