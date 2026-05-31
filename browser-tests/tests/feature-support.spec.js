// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * Feature support smoke tests.
 *
 * The book labels every feature with its support status. These tests verify
 * those labels against real browser engines using CSS.supports(). If a Baseline
 * feature ever stops being supported, or a Chrome-only feature ships everywhere,
 * a test here changes and we update the book and publish an erratum.
 *
 * Run with: npm install && npm test
 */

// Features the book treats as Baseline. They must be supported everywhere.
const BASELINE = [
  { name: ":has() relational selector", test: () => CSS.supports("selector(:has(*))") },
  { name: "container-type", test: () => CSS.supports("container-type", "inline-size") },
  { name: "color-mix()", test: () => CSS.supports("color", "color-mix(in oklch, red, blue)") },
  { name: "oklch() color", test: () => CSS.supports("color", "oklch(62% 0.2 295)") },
  { name: "subgrid", test: () => CSS.supports("grid-template-columns", "subgrid") },
  { name: "logical margin-inline", test: () => CSS.supports("margin-inline", "1rem") },
];

// Features the book treats as not-yet-everywhere. Informational only: we record
// where they are supported, but we do not fail a browser for lacking them.
const PREVIEW = [
  { name: "if() function", test: () => CSS.supports("color", "if(style(--x: 1): red; else: blue)") },
  { name: "anchor positioning", test: () => CSS.supports("position-anchor", "--a") },
];

test.describe("Baseline features are supported everywhere", () => {
  for (const feature of BASELINE) {
    test(feature.name, async ({ page }) => {
      const supported = await page.evaluate(feature.test);
      expect(supported, `${feature.name} should be supported`).toBe(true);
    });
  }
});

test.describe("Preview features (informational)", () => {
  for (const feature of PREVIEW) {
    test(feature.name, async ({ page, browserName }) => {
      const supported = await page.evaluate(feature.test);
      test.info().annotations.push({
        type: "support",
        description: `${feature.name}: ${supported ? "yes" : "no"} in ${browserName}`,
      });
      // Always passes. The annotation is the signal we read in the report.
      expect(typeof supported).toBe("boolean");
    });
  }
});
