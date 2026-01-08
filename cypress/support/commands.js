// LOGIN POR UI
import LoginPage from "../pages/LoginPage";

Cypress.Commands.add("login", (userType = "standard") => {
  cy.fixture("users").then((users) => {
    const user = users[userType];

    LoginPage.visit();
    LoginPage.login(user.username, user.password);
  });
});
// ===============================
// LOGIN POR API + SESSION 
// ===============================
Cypress.Commands.add("loginByApi", (userType = "standard") => {
  cy.session(userType, () => {
    cy.fixture("users").then((users) => {
      const user = users[userType];

      cy.request({
        method: "POST",
        url: "https://www.saucedemo.com/",
        form: true,
        body: {
          user_name: user.username,
          password: user.password
        }
      });

      // Validamos que la sesión quedó activa
      cy.visit("/inventory");
      cy.url().should("include", "/inventory");
    });
  });
});
// ===============================