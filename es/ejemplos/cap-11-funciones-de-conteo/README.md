# Ejemplos del capitulo 11 · sibling-index() y sibling-count()

> Etiqueta de soporte: **CHROME ONLY** (esperado Baseline 2026)

## Movimiento escalonado sin índices a mano y sin JavaScript

- **Onda de ecualizador**: 12 barras, cada una desfasada por su número de hermano con `animation-delay: calc((sibling-index() - 1) * -0.09s)`. Con el fallback `nth-child` + `@supports` anima en todos los navegadores hoy; donde `sibling-index()` está soportada, usa la versión limpia.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c11/siblings/

`sibling-index()` y `sibling-count()` son CHROME ONLY de momento (Interop 2026,
esperado Baseline 2026). Úsalas siempre con el fallback nth-child.
