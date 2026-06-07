# Ejemplos del capitulo 19 · Customizable select

> Etiqueta de soporte: **CHROME ONLY 135+** (degrada a un select nativo en todos lados)

## Estiliza el select de verdad, conserva la accesibilidad nativa

Dos demos en una página:

- **Select de plan estilizado**: `appearance: base-select`, un disparador con `<button>` + `<selectedcontent>`, `::picker(select)`, `::picker-icon` que rota al abrir, y `option::checkmark`.
- **Country picker con banderas**: cada opción lleva una bandera y texto; `<selectedcontent>` refleja la elección en el botón.

**Ábrela:** el `index.html` de esta carpeta, o en vivo en
https://alexanderuk82.github.io/modern-css-ebook/es/c19/select/

Donde `appearance: base-select` no está soportado, los dos caen a un `<select>`
nativo perfectamente funcional. La accesibilidad nunca se pierde, solo el estilo.
