import { test, expect, devices } from "@playwright/test";
import { PageObjectManager } from "../pages/page-object-manager";

test.describe("Responsive Home Page", () => {
  const viewports = [
    {
      name: "Mobile (iPhone 15 Pro)",
      device: devices["iPhone 15 Pro"],
      size: "393x852",
    },
    {
      name: "Tablet (iPad Pro 12.9 2021)",
      device: devices["iPad Pro 12.9 2021"],
      size: "1024x1366",
    },
    {
      name: "Desktop (1280x720)",
      device: {
        viewport: { width: 1280, height: 720 },
        userAgent: devices["Desktop Chrome"].userAgent,
      },
      size: "1280x720",
    },
  ];

  test("Home page is responsive on Mobile, Tablet, and Desktop", async ({
    browserName,
    browser,
  }) => {
    for (const { name, device, size } of viewports) {
      // Only run mobile/tablet emulation for Chromium/WebKit, always run desktop
      if (
        (name.startsWith("Mobile") || name.startsWith("Tablet")) &&
        browserName === "firefox"
      ) {
        console.log(
          `Skipping ${name} for Firefox (mobile emulation not supported)`
        );
        continue;
      }
      const context = await browser.newContext({ ...device });
      const page = await context.newPage();
      const pageObjectManager = new PageObjectManager(page);
      await page.goto("/home");
      await expect(pageObjectManager.hudlHomePage.homepageTab).toBeVisible();
      // Optionally, add more assertions for responsiveness here
      console.log(`Checked responsiveness for: ${name} (${size})`);
      await context.close();
    }
  });
});
