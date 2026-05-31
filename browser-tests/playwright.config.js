// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Cross-browser config. We run the same feature-support checks on Chromium,
 * Firefox and WebKit so the book's support labels stay honest as browsers
 * update. If a feature dies or ships, a test here turns red and tells us.
 */
module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
