import { chromium } from "@playwright/test";

const url = "https://alexanderuk82.github.io/modern-css-ebook/";
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  colorScheme: "dark",
  deviceScaleFactor: 2,
});
const p = await ctx.newPage();
await p.goto(url, { waitUntil: "networkidle" });
await p.screenshot({ path: "../assets/preview/live-dark.png" });
console.log("status", (await p.evaluate(() => document.title)));
await browser.close();
