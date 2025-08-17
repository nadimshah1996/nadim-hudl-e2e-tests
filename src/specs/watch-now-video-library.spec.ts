import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../pages/page-object-manager";
import testData from "../utils/parameters.json";

test.describe("Verify Watch Now Video Library", () => {
  let pageObjectManager: PageObjectManager;

  test.beforeEach(async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto('/home');
  });

  test("should go to library, search for video, and match title", async ({page,}) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto('/home');

    // Go to library page
    await expect(pageObjectManager.hudlHomePage.libraryTab).toBeVisible();
    await pageObjectManager.hudlHomePage.libraryTab.click();
    await expect(page).toHaveURL('https://app.hudl.com/watch/team/320073/analyze');

    // Search for the video
    await expect(pageObjectManager.hudlLibraryPage.searchVideosInput).toBeVisible();
    await pageObjectManager.hudlLibraryPage.searchVideosInput.fill(testData.videoTitleText);
    await pageObjectManager.hudlLibraryPage.searchVideosInput.press("Enter");
    await expect(page.locator(testData.videoTitleSelector, { hasText: testData.videoTitleText })).toBeVisible();
    const videoTitle = await page.locator(testData.videoTitleSelector, { hasText: testData.videoTitleText }).first().textContent();
    expect(videoTitle?.trim()).toBe(testData.videoTitleText);

    //open video
    await expect(pageObjectManager.hudlLibraryPage.videoThumbnails).toBeVisible();
    await pageObjectManager.hudlLibraryPage.videoThumbnails.first().click();
    await expect(page).toHaveURL('https://www.hudl.com/watch/playlist/UGxheWxpc3Q2MGE3MDgyODBjNWU5NDA0YzBhZTMwODA='); // Verify it navigates to a video page
    });
});
