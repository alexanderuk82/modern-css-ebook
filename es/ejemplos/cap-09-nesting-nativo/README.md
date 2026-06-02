# Ejemplos del capitulo 9 · Nesting nativo y el adios a BEM

> Etiqueta de soporte: **BASELINE 2024/2025**

## Arquitectura limpia, sin Sass, sin BEM

- **Card anidada con variante destacada**: toda la card vive en un solo bloque anidado. La variante destacada es un `&.featured` anidado (con su propio `& .title` y `& .tag`), así que la card resaltada no necesita reglas extra fuera del bloque.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c09/nesting/

El nesting nativo es BASELINE 2024/2025. Combínalo con `@scope` y `@layer` del
capítulo 3 para la arquitectura moderna completa, sin preprocesador.
