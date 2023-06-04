import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.page";

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(new LoginPage(page));
    },
});

export { expect } from "@playwright/test";
