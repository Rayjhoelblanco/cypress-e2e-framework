import LoginPage from "../pages/LoginPage";

describe("Login - SauceDemo", { tags: ["@smoke", "@regression"]}, () => {

  it("Login exitoso con usuario válido", () => {
    cy.login("standard");
    cy.url().should("include", "/inventory");
    cy.get(".inventory_list").should("be.visible");
  });

  it("Login fallido con usuario bloqueado", { tags: ["@regression"]}, () => {
    cy.login("locked");

    LoginPage.elements.error()
      .should("be.visible")
      .and("contain.text", "locked out");
  });

});
