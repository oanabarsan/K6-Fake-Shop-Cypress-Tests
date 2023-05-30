/// <reference types = "cypress" />

import ShopPage from "../pages/ShopPage";
import HomePage from "../pages/HomePage";
import CheckOutPage from "../pages/CheckOutPage";
import CartPage from "../pages/CartPage";

describe("Add to cart test suite", () => {
  it("Submit order test", () => {
    HomePage.getHomePageLink().click();
    ShopPage.getAddProduct().click();
    ShopPage.getViewCartBtn().click();
    CartPage.getProceedToCheckoutBtn().click();
    cy.checkoutInformation();
    CheckOutPage.getPlaceOrder().click();
  });
});
