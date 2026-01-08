import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

describe("Carrito - SauceDemo", { tags: ["@smoke", "@regression"] }, () => {

  beforeEach(() => {
    cy.login("standard");//Para logín con api usamos cy.loginByApi("standard");
  });

  it("Agregar producto al carrito", () => {
    ProductsPage.addBackpackToCart();
//smoke + regression
    ProductsPage.elements.cartBadge()
      .should("be.visible")
      .and("contain.text", "1");
  });

  it("Eliminar producto del carrito", { tags: ["@regression"] }, () => {
    ProductsPage.addBackpackToCart();
    ProductsPage.openCart();
//solo regression
    CartPage.elements.cartList().should("be.visible");
    CartPage.removeItem();

    CartPage.elements.cartItem().should("not.exist");
  });

});


