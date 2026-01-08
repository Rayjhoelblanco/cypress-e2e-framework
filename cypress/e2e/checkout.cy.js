import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Checkout E2E - SauceDemo", { tags: ["@regression"] }, () => {
  beforeEach(() => {
    cy.login("standard");

    ProductsPage.addBackpackToCart();
    ProductsPage.openCart();
  });

  it("Completar compra exitosamente", () => {
    cy.fixture("checkout").then((data) => {
      CheckoutPage.startCheckout();
      CheckoutPage.fillCustomerInfo(
        data.customer.firstName,
        data.customer.lastName,
        data.customer.postalCode
      );
    });

    CheckoutPage.finishCheckout();

    CheckoutPage.elements.successTitle()
      .should("be.visible")
      .and("contain.text", "Thank you for your order");
  });
});
