import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/specs",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"], // Shows ✓ and x in the terminal
    ["html", { outputFolder: "playwright-report" }],
  ],
  use: {
    baseURL: "https://hudl.com", // <-- Base URL
    trace: "on-first-retry",
    screenshot: "only-on-failure", // Take screenshots on failure
    video: "retain-on-failure", // Optionally, keep video on failure
  },
  projects: [
    {
      name: "Chrome",
      testMatch: /^(?!.*invalid-login).*\.spec\.ts$/, // all except invalid-login
      use: {
        ...devices["Desktop Chrome"],
        storageState: "storageState.json",
      },
    },
    {
      name: "unauthenticated for Chrome",
      testMatch: /invalid-login\.spec\.ts$/, // only invalid-login
      use: {
        ...devices["Desktop Chrome"],
        storageState: undefined,
      },
    },
    {
      name: "firefox",
      testMatch: /^(?!.*invalid-login).*\.spec\.ts$/, // all except invalid-login
      use: {
        ...devices["Desktop Firefox"],
        storageState: "storageState.json",
      },
    },
    {
      name: "unauthenticated for Firefox",
      testMatch: /invalid-login\.spec\.ts$/, // only invalid-login
      use: {
        ...devices["Desktop Firefox"],
        storageState: undefined,
      },
    },
  ],
  outputDir: "test-results/",
  globalSetup: require.resolve("./src/utils/global-setup"),
});
