# Ejemplos del capitulo 21 · La funcion if()

> Etiqueta de soporte: **CHROME ONLY 137+** (camino de Baseline)

## Lógica condicional inline, dentro de una propiedad

Dos demos en una página:

- **Tema desde una variable**: un solo CSS de tarjeta; los colores son `if(style(--tema: dark): ...; else: ...)`. Dos paneles, el mismo CSS, distinto `--tema`.
- **if() encadenado**: el color de cada pastilla sale de su `--estado` con `if(style(--estado: error): rojo; style(--estado: warn): ámbar; else: verde)`, como if / else if / else.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c21/if/

`if()` es CHROME ONLY de momento (Chromium 137+). Pon una declaración de fallback
antes de la de `if()` para los navegadores que aún no lo soportan.
