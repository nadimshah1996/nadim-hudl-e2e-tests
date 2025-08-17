import { Page } from "@playwright/test";
import { SignInPage } from "./sign-in.page";
import { HudlHomePage } from "./hudl.home.page";
import { HudlPage as HudlSportsPage } from "./hudl-sports.page";
import { MessagingPage } from "./hudl-messaging.page";
import { HudlLibraryPage } from "./hudl-library.page";

export class PageObjectManager {
    page: Page;
    signInPage: SignInPage;
    hudlHomePage: HudlHomePage;
    hudlSportsPage: HudlSportsPage;
    messagingPage: MessagingPage;
    hudlLibraryPage: HudlLibraryPage;

    constructor(page: Page) {
    this.page = page;
    this.signInPage = new SignInPage(page);
    this.hudlHomePage = new HudlHomePage(page);
    this.hudlSportsPage = new HudlSportsPage(page);
    this.messagingPage = new MessagingPage(page);
    this.hudlLibraryPage = new HudlLibraryPage(page);
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

    getHudlLibraryPage(): HudlLibraryPage {
        return this.hudlLibraryPage;
    }
}