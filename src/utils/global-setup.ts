
import { FullConfig } from '@playwright/test';
import { Credentials } from '../setup/credentials';
import { chromium } from 'playwright';
import { PageObjectManager } from '../pages/page-object-manager';

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Go to login page
  await page.goto(`${baseURL}/login`);

  const pageObjectManager = new PageObjectManager(page);
  const signInPage = pageObjectManager.getSignInPage();
  await signInPage.userName.waitFor({ state: 'visible' });
  await signInPage.userName.fill(Credentials.username);
  await signInPage.continue.click();
  await signInPage.password.waitFor({ state: 'visible' });
  await signInPage.password.fill(Credentials.password);
  await signInPage.continue.click();

  // Wait for navigation to home page
  await page.waitForURL('https://www.hudl.com/home');

  // Save authentication state for reuse in tests
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
