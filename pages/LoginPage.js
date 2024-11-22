class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = this.page.locator('[data-test="username"]');
        this.password = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/');
    }
}

export default LoginPage;
