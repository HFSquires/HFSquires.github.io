const { test, expect } = require("@playwright/test");

const viewports = [
  { name: "phone", width: 390, height: 844 },
  { name: "small-tablet", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "medium", width: 1100, height: 900 },
  { name: "desktop", width: 1280, height: 900 },
  { name: "ultrawide", width: 1920, height: 1080 }
];

test.describe("CV responsive layout", () => {
  for (const viewport of viewports) {
    test(`has no overflow or card overlap at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto("/cv/", { waitUntil: "networkidle" });

      const metrics = await page.evaluate(() => {
        const sidebar = document.querySelector("#main .sidebar");
        const archive = document.querySelector("#main .archive");
        const bio = document.querySelector("#main .author__bio");
        const doc = document.documentElement;

        const rect = (element) => {
          if (!element) return null;
          const box = element.getBoundingClientRect();
          return {
            top: box.top,
            right: box.right,
            bottom: box.bottom,
            left: box.left,
            width: box.width,
            height: box.height
          };
        };

        return {
          viewportWidth: window.innerWidth,
          scrollWidth: doc.scrollWidth,
          sidebar: rect(sidebar),
          archive: rect(archive),
          bioLineCount: (() => {
            if (!bio) return 0;
            const range = document.createRange();
            range.selectNodeContents(bio);
            return Array.from(range.getClientRects()).filter((line) => line.width > 1 && line.height > 1).length;
          })()
        };
      });

      expect(metrics.scrollWidth, "page should not scroll sideways").toBeLessThanOrEqual(metrics.viewportWidth + 1);
      expect(metrics.sidebar, "sidebar/profile card should exist").not.toBeNull();
      expect(metrics.archive, "CV content card should exist").not.toBeNull();

      if (viewport.width <= 1180) {
        expect(metrics.archive.top, "stacked CV card should sit below profile card").toBeGreaterThanOrEqual(metrics.sidebar.bottom + 12);
        expect(Math.abs(metrics.sidebar.left - metrics.archive.left), "stacked cards should be similarly centered").toBeLessThanOrEqual(120);
      } else {
        const overlapX = Math.max(
          0,
          Math.min(metrics.sidebar.right, metrics.archive.right) -
            Math.max(metrics.sidebar.left, metrics.archive.left)
        );
        const overlapY = Math.max(
          0,
          Math.min(metrics.sidebar.bottom, metrics.archive.bottom) -
            Math.max(metrics.sidebar.top, metrics.archive.top)
        );
        expect(overlapX * overlapY, "desktop sidebar and CV card should not visually overlap").toBe(0);
        expect(metrics.bioLineCount, "desktop sidebar bio should only wrap when it has to").toBeLessThanOrEqual(1);
      }
    });
  }
});
