# Ejemplos del capitulo 16 · Scroll-driven animations

> Etiqueta de soporte: **CHROME ONLY**

## Ligadas al scroll, no al reloj

Una página con scroll, dos efectos, sin IntersectionObserver:

- **Barra de progreso de lectura**: una barra fija arriba movida por `animation-timeline: scroll(root block)`. Se llena al hacer scroll.
- **Reveal al entrar**: cada tarjeta sube y aparece con `animation-timeline: view()` y `animation-range: entry 0% cover 35%`.

También respeta `prefers-reduced-motion` y apaga el movimiento.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c16/scroll/

Las scroll-driven animations son CHROME ONLY por ahora (Chromium y Safari,
Firefox tras un flag) y degradan limpio: donde no hay soporte, el contenido
se ve en su estado final.
