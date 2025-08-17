import { type Locator, type Page } from "@playwright/test";

export class HudlPage {
  page: Page;
  headerImage: Locator;
  profileImage: Locator;
  shareButton: Locator;
  followButton: Locator;
  thisVideoFeed: Locator;
  videoTab: Locator;
  videos: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerImage = page.locator(".prof-header-image");
    this.profileImage = page.locator(".prof-image");
    this.shareButton = page.locator("button.uni-btn--subtle.uni-btn--small", { hasText: "Share" }).first(); 
    this.followButton = page.locator('button[data-qa-id="profile-follow-button"]').first();
    this.thisVideoFeed = page.locator(".feeditem");
    this.videoTab = page.locator('.prof-subnav-item', { hasText: 'Video' }).first();
    this.videos = page.locator('.video-wrapper');
  }
}
