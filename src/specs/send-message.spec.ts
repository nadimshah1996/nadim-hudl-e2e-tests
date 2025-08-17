import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../pages/page-object-manager";

test.describe("Validate sending messages", () => {
  let pageObjectManager: PageObjectManager;

  test.beforeEach(async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto("/home");
  });

  test("User can send a message", async ({ page }) => {
    await expect(pageObjectManager.hudlHomePage.messagesIcon).toBeVisible();
    await pageObjectManager.hudlHomePage.messagesIcon.click();
    await expect(page).toHaveURL('https://app.hudl.com/messaging');
    await expect(pageObjectManager.messagingPage.newMessageButton).toBeVisible();
    await pageObjectManager.messagingPage.newMessageButton.click();
    // Click the search box and type 'No Name'
    await expect(pageObjectManager.messagingPage.searchBox).toBeVisible();
    await pageObjectManager.messagingPage.searchBox.click();
    await pageObjectManager.messagingPage.searchBox.fill("No Name");
    // Select the 'No Name' result row's checkbox
    const noNameCheckbox = page.locator("._resultRow_b5dgs_72", { hasText: "No Name" }).locator('[role="checkbox"]');
    await expect(noNameCheckbox).toBeVisible();
    await noNameCheckbox.click();
    await pageObjectManager.messagingPage.createMessageButton.click();
    // Create a unique message using a timestamp
    const uniqueMessage = `Hello No Name - ${Date.now()}`;
    await pageObjectManager.messagingPage.sendMessageBox.fill(uniqueMessage);
    await pageObjectManager.messagingPage.sendMessageBox.press("Enter");
    // Assert the sent message text matches the unique message (inline locator)
    const sentMessage = await page.locator('div.str-chat__message-text-inner[data-testid="message-text-inner-wrapper"] p').last().textContent();
    expect(sentMessage).toContain(uniqueMessage);
    // Assert the timestamp is present and contains 'Today' (inline locator)
    const sentTimestamp = await page.locator("time.str-chat__message-simple-timestamp").last().textContent();
    expect(sentTimestamp).toBeTruthy();
    expect(sentTimestamp).toContain("Today");
  });
});
