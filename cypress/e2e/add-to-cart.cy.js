/// <reference types = "cypress" />

import ShopPage from "../pages/ShopPage";
import HomePage from "../pages/HomePage";
import CheckOutPage from "../pages/CheckOutPage";
import CartPage from "../pages/CartPage";

describe("Add to cart test suite", () => {
  it("Submit order test", () => {
    HomePage.getHomePageLink().click();
    cy.intercept({
      method: "POST",
      url: "http://ecommerce.test.k6.io/?wc-ajax=add_to_cart",
    }).as("addProductAPI");
    ShopPage.getAddProduct().click();
    cy.wait("@addProductAPI").its("response.statusCode").should("eq", 200);
    ShopPage.getViewCartBtn().click();
    CartPage.getProceedToCheckoutBtn().click();
    cy.checkoutInformation();
    cy.intercept({
      method: "POST",
      url: "http://ecommerce.test.k6.io/?wc-ajax=checkout",
    }).as("placeOrderAPI");

    CheckOutPage.getPlaceOrder().click();
    cy.wait("@placeOrderAPI").its("response.statusCode").should("eq", 200);

    cy.get(".entry-header .entry-title")
      .contains("Order received")
      .should("be.visible");

    cy.get(
        ".woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received"
      )
        .contains("Thank you. Your order has been received.")
        .should("be.visible");
  });
});
