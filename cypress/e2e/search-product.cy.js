/// <reference types = "cypress" />

import HomePage from "../pages/HomePage";

describe("Search product test suite", () => {
  it("Search products by 'cap' keyword", () => {
    HomePage.getSearchField().type("cap{enter}");
    cy.get("h1.product_title.entry-title").should("be.visible");
    cy.contains("Cap").should("be.visible");
  });

  it("Try to search products by non-existing product keyword", () => {
    HomePage.getSearchField().type("tree{enter}");
    cy.get("p.woocommerce-info").should("be.visible");
    cy.contains("No products were found matching your selection.").should(
      "be.visible"
    );
  });
});
