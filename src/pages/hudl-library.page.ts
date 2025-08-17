import {type Locator, type Page} from '@playwright/test';

export class HudlLibraryPage {
    page: Page;
    videoThumbnails: Locator;
    searchVideosInput: Locator;
    videoList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.videoThumbnails = page.locator('a._videoThumbnailLink_78i4e_28[data-qa-id="libraryitem-Asma-play"]')
        this.searchVideosInput = page.locator('input[data-qa-id="search-input"][placeholder="Search..."]');
        this.videoList = page.locator('div[data-qa-id="grid-library-item"]');
    }
}