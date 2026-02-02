class ProductsPage {
  elements = {
    inventoryList: () => cy.get(".inventory_list"),
    addBackpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeBackpackBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    cartBadge: () => cy.get(".shopping_cart_badge"),
    cartIcon: () => cy.get(".shopping_cart_link"),
    addToCartButtons: () => cy.get('[data-test^="add-to-cart"]')
  };

  addBackpackToCart() {
    this.elements.addBackpackBtn().click();
  }

  removeBackpackFromCart() {
    this.elements.removeBackpackBtn().click();
  }

  openCart() {
    this.elements.cartIcon().click();
  }

  getProductsCount() {
    return this.elements.inventoryList().then(($list) => {
      return $list.find('[data-test^="add-to-cart"]').length;
    });
  }

  addAllProductsToCart() {
    this.elements.addToCartButtons().each(($btn) => {
      cy.wrap($btn).click();
    });
  }
}

export default new ProductsPage();
