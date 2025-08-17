import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../pages/page-object-manager";

test("User can successfully log out", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  await page.goto("/home");
  await pageObjectManager.hudlHomePage.globalUserMenu.hover();
  await expect(pageObjectManager.hudlHomePage.globalUserMenu).toBeVisible();
  await pageObjectManager.hudlHomePage.logOutButton.click();
  await expect(page).toHaveURL("https://www.hudl.com/");
});
