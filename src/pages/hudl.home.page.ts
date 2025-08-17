import {type Locator, type Page} from '@playwright/test';

export class HudlHomePage {
    page: Page;
    searchBox: Locator;
    searchRow: Locator;
    homepageTab: Locator;
    globalUserMenu: Locator;
    logOutButton: Locator;
    messagesIcon: Locator;
    libraryTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator('.uni-form__input.search-bar__input');
        this.searchRow = page.locator('.search-row');
        this.homepageTab = page.getByRole('link', { name: 'Home' });
        this.globalUserMenu = page.locator('.hui-globalusermenu');
        this.logOutButton = page.getByRole('link', { name: 'Log Out' });  
        this.messagesIcon = page.getByRole('link', { name: 'messages' }).first();
        this.libraryTab = page.locator('[data-qa-id="webnav-primarynav-video"]');
    }
}