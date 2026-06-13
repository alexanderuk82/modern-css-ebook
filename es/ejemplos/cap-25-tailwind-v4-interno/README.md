# Ejemplos del capitulo 25 · Tailwind v4.3 por dentro

> Etiqueta de soporte: **N/A** (va de una herramienta, no de una feature de CSS)

## Config CSS-first con @theme y container queries de serie

El `index.html` está estilizado con **Tailwind v4.3 compilado de verdad**
(`tw.css`) desde un `@theme` CSS-first propio:

- **Los tokens de @theme se vuelven utilidades**: `--color-brand`, `--color-accent`
  y `--radius-card` en `@theme` generan `bg-brand`, `bg-accent`, `rounded-card`.
- **Container queries de serie**: una rejilla con `@sm:grid-cols-2` dentro de un
  `@container` pasa de una columna a dos según el ancho del contenedor.

Compilado desde [`/tailwind-build/input-c25.css`](../../../tailwind-build/input-c25.css):

```bash
cd tailwind-build
npx tailwindcss -i input-c25.css -o ../live-demos/es/c25/internals/tw.css --minify
```

**Ábrela:** el `index.html` de aquí, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c25/internals/
