import { test as base, expect } from "@playwright/test";
import { PageObjectManager } from "../pages/page-object-manager";
import testData from "../utils/parameters.json";

// Override storageState for this file so it does NOT use the global authenticated state
const test = base.extend({
  storageState: undefined,
});

const hudlLoginUrl = "https://www.hudl.com/login";
const invalidUsername = "invaliduser@example.com";
const invalidPassword = "wrongpassword123";

test("Invalid login shows error message", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  await page.goto(hudlLoginUrl);
  await pageObjectManager.signInPage.userName.fill(invalidUsername);
  await pageObjectManager.signInPage.continue.click();
  await pageObjectManager.signInPage.password.fill(invalidPassword);
  await pageObjectManager.signInPage.continue.click();
  // Assert that an error message appears
  await expect(pageObjectManager.signInPage.invalidPassword).toBeVisible();
  await expect(pageObjectManager.signInPage.invalidPassword).toHaveText(testData.invalidPasswordError.text);
});
