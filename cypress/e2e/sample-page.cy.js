/// <reference types = "cypress" />

import HomePage from "../pages/HomePage";

describe("Sample page test suite", () => {
  it("Sample page test", () => {
    HomePage.getSamplePageLink().click();
    cy.get("h1.entry-title").should("be.visible");
    cy.contains("Sample Page").should("be.visible");
  });
});
