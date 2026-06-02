# Ejemplos del capitulo 10 · Logical properties y CSS multilingue

> Etiqueta de soporte: **BASELINE**

## CSS que funciona en cualquier idioma sin reescribir

- **La misma tarjeta, dos direcciones**: una clase con `border-inline-start`, `padding-inline` y `text-align: start`. En LTR la barra de acento va a la izquierda; en una tarjeta árabe con `dir="rtl"` salta sola a la derecha. El mismo CSS, sin duplicar.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c10/logical/

Las logical properties son BASELINE. Escribe lógico por defecto (`margin-inline`,
`padding-block`, `inset`) y tu CSS queda listo para RTL y escritura vertical.
