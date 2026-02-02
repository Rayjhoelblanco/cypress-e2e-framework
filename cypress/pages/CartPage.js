class CartPage {
  elements = {
    cartItem: () => cy.get(".cart_item"),
    cartList: () => cy.get(".cart_list"),
    removeBtn: () => cy.get('[data-test^="remove"]')
  };

  removeItem() {
    this.elements.removeBtn().click();
  }

  getItems() {
    return this.elements.cartItem();
  }
}

export default new CartPage();
