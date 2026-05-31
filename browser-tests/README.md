# Browser tests

Playwright tests that keep the book honest over time. CSS moves fast. A feature
that is Baseline today could regress, and a Chrome-only feature could ship
everywhere. These tests check real engines (Chromium, Firefox, WebKit) and tell
us when reality drifts from a label in the book.

## Run them

```bash
cd browser-tests
npm install
npx playwright install        # downloads the browser engines, one time
npm test
```

> Heads up: `playwright install` downloads browser binaries and needs disk
> space. On a machine with a full system drive, point Playwright at another
> drive with `PLAYWRIGHT_BROWSERS_PATH` before installing.

## What the tests do

- **Baseline features** (`:has()`, container queries, `color-mix()`, `oklch()`,
  subgrid, logical properties) must be supported in all three engines. A red
  test here means a label in the book needs a second look.
- **Preview features** (`if()`, anchor positioning) are informational. The test
  records where each one is supported and never fails a browser for missing it.

## When a test changes

1. Confirm the change at https://baseline.web.dev and https://caniuse.com.
2. Update the feature's support label in the book.
3. Publish a short erratum in the repo so existing readers see it.
