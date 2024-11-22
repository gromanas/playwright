class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsPageTitle = this.page.locator('[data-test="secondary-header"]');
    }
}

export default ProductsPage;
