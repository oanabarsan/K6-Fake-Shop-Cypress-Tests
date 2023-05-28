import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
});

beforeEach(() => {
  cy.visit("http://ecommerce.test.k6.io/my-account/");
});