class CheckoutPage {
  elements = {
    checkoutBtn: () => cy.get('[data-test="checkout"]'),
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),
    finishBtn: () => cy.get('[data-test="finish"]'),
    successTitle: () => cy.get(".complete-header")
  };

  startCheckout() {
    this.elements.checkoutBtn().click();
  }

  fillCustomerInfo(first, last, zip) {
    this.elements.firstName().type(first);
    this.elements.lastName().type(last);
    this.elements.postalCode().type(zip);
    this.elements.continueBtn().click();
  }

  finishCheckout() {
    this.elements.finishBtn().click();
  }
}

export default new CheckoutPage();
