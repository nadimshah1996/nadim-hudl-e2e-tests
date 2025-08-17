import {type Locator, type Page} from '@playwright/test';

export class SignInPage {
    page: Page;
    userName: Locator;
    password: Locator;
    continue: Locator;
    invalidPassword: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.userName = this.page.locator('#username');
        this.password = this.page.locator('#password');
        this.continue = this.page.getByRole('button', { name: 'Continue', exact: true });
        this.invalidPassword = page.locator('#error-element-password');
    }

    async signIn(userName: string, password: string) {
        await this.userName.waitFor({ state: 'visible' });
        await this.userName.fill(userName);
        await this.continue.click();
        await this.password.waitFor({ state: 'visible' });
        await this.password.fill(password);
        await this.continue.click();
    }
}