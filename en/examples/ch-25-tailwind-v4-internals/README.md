# Chapter 25 examples · Tailwind v4.3 Internals

> Support label: **N/A** (about a tool, not a CSS feature)

## CSS-first @theme and built-in container queries

`index.html` is styled with **real compiled Tailwind v4.3** (`tw.css`) built from
a custom CSS-first `@theme`:

- **Tokens from @theme become utilities**: `--color-brand`, `--color-accent` and
  `--radius-card` in `@theme` generate `bg-brand`, `bg-accent`, `rounded-card`.
- **Container queries built in**: a grid with `@sm:grid-cols-2` inside a
  `@container` goes from one column to two based on the container width.

Built from [`/tailwind-build/input-c25.css`](../../../tailwind-build/input-c25.css):

```bash
cd tailwind-build
npx tailwindcss -i input-c25.css -o ../live-demos/en/c25/internals/tw.css --minify
```

**Open it:** `index.html` here, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c25/internals/
