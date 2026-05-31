# Ejemplos del capitulo 1 · El cambio que pasaste por alto

> Etiqueta de soporte: **MIXED** (customizable select es CHROME ONLY, `:has()` es Baseline 2024)

## Un dropdown, dos épocas

La demo estrella del capítulo. El mismo dropdown de dos maneras, lado a lado:

- **CSS 2026**: un customizable select estilizado en CSS puro con `appearance: base-select`. El teclado, el foco y la accesibilidad vienen gratis. Unas 10 líneas.
- **JavaScript 2020**: un componente hecho a mano con manejadores de click, y aun así se salta el teclado real, el focus trap y Escape. 50+ líneas o una librería de 15 KB.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c01/dropdown/

Customizable select va por delante en Chromium. En otros navegadores el panel
CSS 2026 cae a un select nativo normal que sigue funcionando, que es justo lo
que cuenta el capítulo con honestidad. La cobertura completa y el patrón de
fallback están en el capítulo 19.
