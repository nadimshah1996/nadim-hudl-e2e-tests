import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../pages/page-object-manager";
import testData from "../utils/parameters.json";

test.describe("Validate Hudl Search Box", () => {
  let pageObjectManager: PageObjectManager;
  let page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    pageObjectManager = new PageObjectManager(page);
    await page.goto('/home');
    const searchText = "soccer highlights";
    await expect(pageObjectManager.hudlHomePage.searchBox).toBeVisible();
    await pageObjectManager.hudlHomePage.searchBox.fill(searchText);
    await pageObjectManager.hudlHomePage.searchBox.press("Enter");
    const result = pageObjectManager.hudlHomePage.searchRow.filter({hasText: "Soccer Highlights",});
    await expect(result).toBeVisible();
    await Promise.all([result.click()]);
    await expect(page).toHaveURL('https://www.hudl.com/page/soccer-highlights');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Verify search functionality", async () => {
    await expect(page.locator(testData.headlineSelector)).toHaveText(/soccer highlights/i);
  });

  test("Verify Sports page images", async () => {
    await expect(pageObjectManager.hudlSportsPage.headerImage).toBeVisible();
    await expect(pageObjectManager.hudlSportsPage.profileImage).toBeVisible();
  });

  test("Verify share button is visible", async () => {
    await expect(pageObjectManager.hudlSportsPage.shareButton).toBeVisible();
  });

  test("Verify follow button is visible", async () => {
    await expect(pageObjectManager.hudlSportsPage.followButton).toBeVisible();
  });

  test("Verify this video feed is visible and exists", async () => {
    await expect(pageObjectManager.hudlSportsPage.thisVideoFeed.first()).toBeVisible();
    const videoFeedCount = await pageObjectManager.hudlSportsPage.thisVideoFeed.count();
    expect(videoFeedCount).toBeGreaterThan(1);
  });

  test("Verify videos can be opened", async () => {
    await expect(pageObjectManager.hudlSportsPage.videoTab).toBeVisible();
    await pageObjectManager.hudlSportsPage.videoTab.first().click();
    await expect(page).toHaveURL('https://www.hudl.com/page/soccer-highlights/videos');
    await expect(pageObjectManager.hudlSportsPage.videos.first()).toBeVisible();
    await pageObjectManager.hudlSportsPage.videos.first().click();
  });

  test('Verify user can navigate back to the home page', async () => {
    await pageObjectManager.hudlHomePage.homepageTab.click();
    await expect(page).toHaveURL('https://www.hudl.com/home');
  });
});
