import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductsPage from "../pages/ProductsPage";

test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.username.fill('standard_user');
    await loginPage.password.fill('secret_sauce');
    await loginPage.loginButton.click();

    const productsPage = new ProductsPage(page);
    await expect(productsPage.productsPageTitle).toBeVisible();
});
