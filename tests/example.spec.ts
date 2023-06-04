import { expect, test } from "../pages/basePage";

test("should login successfully", async ({ loginPage, page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page.getByText("Swag Labs")).toBeVisible();
});
