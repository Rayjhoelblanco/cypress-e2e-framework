# Cypress E2E Automation Framework – SauceDemo

End-to-End (**E2E**) automation framework built with **Cypress**, applying real-world QA Automation best practices commonly used in **SaaS and e-commerce** projects.

---

## Why this framework exists

This framework is not intended to cover every possible test case.

Its main goal is to ensure that **the core business flows remain stable** after changes, deployments, or fixes.

It is designed for real-world contexts such as:
- E-commerce platforms
- SaaS products
- Agile teams with CI/CD pipelines

---

## What does it validate?

Smoke and Regression test suites focused on:

- Functional login
- Product navigation
- Adding and removing products from the cart
- End-to-end checkout flow

---

## Testing Strategy

- **Smoke Tests**  
  Quickly validate that the system is usable after changes.

- **Regression Tests**  
  Ensure that critical business flows are not broken by new features or fixes.

- **End-to-End (E2E)**  
  Simulate real user behavior from login to purchase confirmation.

---

## 🏗 Technical Architecture

- Cypress (E2E Testing)
- JavaScript
- Page Object Model (POM)
- Reusable Custom Commands
- Fixtures for test data decoupling

---

## Project Structure

```text
cypress/
├─ e2e/
│  ├─ login.cy.js
│  ├─ cart.cy.js
│  └─ checkout.cy.js
├─ pages/
│  ├─ LoginPage.js
│  ├─ ProductsPage.js
│  ├─ CartPage.js
│  └─ CheckoutPage.js
├─ fixtures/
│  ├─ users.json
│  └─ checkout.json
├─ support/
│  ├─ commands.js
│  └─ e2e.js


## ▶️ How to run the project

### Install dependencies
npm install

### Open Cypress UI
npx cypress open

### Run Smoke Tests
npx cypress run --env grepTags=@smoke

### Run full suite
npx cypress run

## Good practices applied

- Clear separation of responsibilities using POM
- Test data decoupled via fixtures
- Stable selectors using data-test
- Functional assertions (not visual-based)
- Technical decisions driven by business impact

Framework Goal

This project does not aim to exhaustively test all scenarios, but to demonstrate:
- Strong analytical thinking
- Technical decision-making
- Maintainable test design
- Business-oriented QA mindset

Author
Ray Blanco
QA Analyst | QA Automation
Focused on functional testing, automation, and quality in SaaS environments.