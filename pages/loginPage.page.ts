import { Locator, Page } from "@playwright/test";

class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('[data-test="username"]');
        this.passwordInput = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="loginh-button"]');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

export { LoginPage };
