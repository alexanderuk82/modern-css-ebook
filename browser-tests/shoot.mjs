import { chromium } from "@playwright/test";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const page = pathToFileURL(resolve("../live-demos/index.html")).href;
const browser = await chromium.launch();

for (const scheme of ["light", "dark"]) {
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    colorScheme: scheme,
    deviceScaleFactor: 2,
  });
  const p = await ctx.newPage();
  await p.goto(page, { waitUntil: "networkidle" });
  await p.screenshot({ path: `../assets/preview/landing-${scheme}.png`, fullPage: true });
  await ctx.close();
  console.log(`shot ${scheme}`);
}
await browser.close();
