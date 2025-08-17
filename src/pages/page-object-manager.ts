import { Page } from "@playwright/test";
import { SignInPage } from "./sign-in.page";
import { HudlHomePage } from "./hudl.home.page";
import { HudlPage as HudlSportsPage } from "./hudl-sports.page";
import { MessagingPage } from "./messaging-page";

export class PageObjectManager {
    page: Page;
    signInPage: SignInPage;
    hudlHomePage: HudlHomePage;
    hudlSportsPage: HudlSportsPage;
    messagingPage: MessagingPage;

    constructor(page: Page) {
    this.page = page;
    this.signInPage = new SignInPage(page);
    this.hudlHomePage = new HudlHomePage(page);
    this.hudlSportsPage = new HudlSportsPage(page);
    this.messagingPage = new MessagingPage(page);
    }

    getSignInPage(): SignInPage {
        return this.signInPage;
    }

    getHudlHomePage(): HudlHomePage {
        return this.hudlHomePage;
    }

    getHudlSportsPage(): HudlSportsPage {
        return this.hudlSportsPage;
    }

    getMessagingPage(): MessagingPage {
        return this.messagingPage;
    }
}