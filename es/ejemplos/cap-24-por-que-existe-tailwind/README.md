# Ejemplos del capitulo 24 · Por qué existe Tailwind

> Etiqueta de soporte: **N/A** (este capítulo va de una herramienta, no de una feature de CSS)

## El mismo botón, cuatro formas

El `index.html` muestra el mismo botón construido de cuatro maneras, todas
renderizando igual: CSS clásico, BEM, CSS modules y Tailwind. El botón Tailwind
usa **salida real de Tailwind v4.3 compilada** en `tw.css`.

El `tw.css` de aquí lo genera `@tailwindcss/cli@4.3.1` desde
[`/tailwind-build`](../../../tailwind-build/), escaneando este HTML y emitiendo
solo las utilidades que usa (`px-4 py-2 rounded-lg bg-violet-700 text-white
font-semibold`). Para recompilarlo:

```bash
cd tailwind-build
npm install
npx tailwindcss -i input.css -o ../live-demos/es/c24/tailwind/tw.css --minify
```

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c24/tailwind/
