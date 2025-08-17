import { type Locator, type Page } from "@playwright/test";

export class MessagingPage {
  page: Page;
  newMessageButton: Locator;
  searchBox: Locator;
  createMessageButton: Locator;
  sendMessageBox: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.newMessageButton = page.locator('[data-qa-id="create-new-message-button"]');
    this.searchBox = page.locator('input[placeholder="Search for..."][type="search"]');
    this.createMessageButton = page.locator("button.u-button--primary", {hasText: "Create Message",});
    this.sendMessageBox = page.locator('textarea[data-testid="message-input"][placeholder="Type your message"]');
  }
}
