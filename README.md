# Modern CSS 2026 · CSS Moderno 2026 · Companion repo

> Runnable demos and live pages for the book **Modern CSS 2026** by Alexander Burgos.
> Demos ejecutables y paginas vivas para el libro **CSS Moderno 2026** de Alexander Burgos.

Bilingual repo (English and Español). This is the public code companion. Every
QR code and every demo reference in the book resolves to a folder here, and to a
live page under [`/live-demos`](./live-demos/).

The book manuscript itself lives in a separate private repo. This one holds only
the code, the demos, and the tooling.

---

## 🇬🇧 English

### What this repo is

The book is visual first. CSS is meant to be seen running, and a printed page
cannot animate. So the book stays readable on paper, and the moving parts live
here. Each chapter sends you to a QR code that opens a live demo.

```
en/examples/ch-21-the-if-function/   demos for Chapter 21
es/ejemplos/cap-21-la-funcion-if/    las mismas demos en Espanol
live-demos/                          the GitHub Pages site the QR codes open
browser-tests/                       Playwright checks that features stay alive
chrome-flags/                        how to try preview features (Chapter 23)
scripts/                             voice check, code width check, scaffold
assets/covers/                       cover art and promo images
```

### The support label system

CSS moves fast, so every feature in the book carries a label that tells you what
is safe to ship right now.

| Label | Meaning |
| --- | --- |
| **Baseline 2024/2025** | Cross browser. Ship it, fallback optional. |
| **Baseline 2026** | Just reached every browser. Ship with progressive enhancement. |
| **Chrome only** | Chromium for now, sometimes Safari. Use with a fallback. |
| **Behind flag** | Chrome Canary with a flag. For experiments, not production. |

Always confirm a label at [baseline.web.dev](https://baseline.web.dev) and
[caniuse.com](https://caniuse.com). The `browser-tests/` folder checks the
Baseline ones automatically.

### How the demos are organised

Most demos are a single `index.html` you open straight in a modern browser, no
build and no `node_modules`. A few preview features need Chrome Canary with a
flag, and those folders say so and point to [`/chrome-flags`](./chrome-flags/).

Demos land chapter by chapter as the book is written. Folders already exist for
all 28 chapters so every link in the book resolves from day one.

### Run things

```bash
# open any demo
open en/examples/ch-04-grid-in-2026/index.html   # or just double click it

# run the feature support tests
cd browser-tests && npm install && npx playwright install && npm test
```

---

## 🇪🇸 Español

### Qué es este repo

El libro es visual primero. El CSS hay que verlo funcionando, y una pagina
impresa no puede animar. Por eso el libro se lee bien en papel y lo que se mueve
vive aqui. Cada capitulo te manda a un QR que abre una demo viva.

### El sistema de etiquetas de soporte

El CSS cambia rapido, asi que cada feature lleva una etiqueta que te dice que
puedes usar en produccion hoy mismo.

| Etiqueta | Significado |
| --- | --- |
| **Baseline 2024/2025** | Cross browser. A produccion, con fallback opcional. |
| **Baseline 2026** | Acaba de llegar a todos los navegadores. Con progressive enhancement. |
| **Chrome only** | Solo Chromium por ahora, a veces Safari. Con fallback. |
| **Behind flag** | Chrome Canary con flag. Para experimentar, no para produccion. |

Confirma cualquier etiqueta en [baseline.web.dev](https://baseline.web.dev) y
[caniuse.com](https://caniuse.com).

### Cómo están organizadas las demos

Casi todas son un solo `index.html` que abres directo en un navegador moderno,
sin build y sin `node_modules`. Algunas features preview necesitan Chrome Canary
con flag, y esas carpetas lo avisan y enlazan a [`/chrome-flags`](./chrome-flags/).

Las demos van llegando capitulo a capitulo segun se escribe el libro. Las
carpetas de los 28 capitulos ya existen para que todos los enlaces del libro
funcionen desde el primer dia.

---

## Status

| Phase | Scope | Status |
| --- | --- | --- |
| 1 | Repo scaffold, 28 chapters x 2 languages, README, live-demos hub, scripts, Playwright config | ✅ done |
| 2 | Front matter and Chapter 1 | ⏳ next |
| 3+ | Chapters by part, demos go live, QR pages fill in | ⏳ pending |

## Links

- Author: [Alexander Burgos](https://alexanderburgos.netlify.app/), UX Engineer
- First book: Build Your Design System (on Amazon)
- Tokens tool: [DS Sync](https://ds-sync.netlify.app)

## License

Code is MIT. Book text and figures are Copyright © 2026 Alexander Burgos, all
rights reserved. See [LICENSE](./LICENSE).
