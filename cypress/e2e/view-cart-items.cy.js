/// <reference types = "cypress" />

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

const firstProductPrice = 15.00;
const secondProductPrice = 18.00;
const totalPrice = firstProductPrice + secondProductPrice;

describe("View cart items in the nav bar test suite", () => {
  it("view cat items test", () => {
    HomePage.getHomePageLink().click();
    cy.intercept({
      method: "POST",
      url: "http://ecommerce.test.k6.io/?wc-ajax=add_to_cart",
    }).as("addFirstProductAPI");
    ShopPage.getFirstProduct().click();
    cy.wait("@addFirstProductAPI").its("response.statusCode").should("eq", 200);
    cy.intercept({
      method: "POST",
      url: "http://ecommerce.test.k6.io/?wc-ajax=add_to_cart",
    }).as("addSecondProductAPI");
    ShopPage.getAddProduct().click();
    cy.wait("@addSecondProductAPI").its("response.statusCode").should("eq", 200);
    cy.get("a.cart-contents").contains(`$${totalPrice}`).should("be.visible");
    cy.get("span.count").contains("2 items").should("be.visible");
  });
});
