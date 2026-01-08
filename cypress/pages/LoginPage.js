class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    error: () => cy.get('[data-test="error"]')
  };

  visit() {
    cy.visit("/");
  }

  login(user, pass) {
    this.elements.username().type(user);
    this.elements.password().type(pass);
    this.elements.loginBtn().click();
  }
}

export default new LoginPage();
