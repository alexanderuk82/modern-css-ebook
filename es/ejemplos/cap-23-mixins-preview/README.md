# Ejemplos del capitulo 23 · @mixin y @apply, early preview

> Etiqueta de soporte: **BEHIND FLAG** (Chrome Canary, `--enable-features=CSSMixins`)

## Bloques de declaraciones reutilizables, nativos

Nota honesta: `@mixin` solo corre en Chrome Canary con el flag, y su sintaxis puede
cambiar. El `index.html` de aquí muestra el **resultado** que empaqueta un mixin,
dibujado con CSS normal para que renderice en todas partes:

- **Niveles de elevación**: lo que sacaría `--elevation(1..3)`, una escala de sombras coherente.
- **Rejilla responsive**: lo que empaqueta `--responsive-grid(min)`, una rejilla auto-fit en una línea.

La sintaxis real de `@mixin` / `@apply` está en el capítulo.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c23/mixins/

No lleves `@mixin` a producción. Hoy usa Sass o utilidades; esto es una preview de
hacia dónde va CSS.
