/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";
import ShopPage from "../pages/ShopPage";
import HomePage from "../pages/HomePage";
import CheckOutPage from "../pages/CheckOutPage";

describe("Add to cart test suite", () => {
  it("Submit order test", () => {
    HomePage.getHomePageLink().click();

    cy.intercept({
      method: "GET",
      url: "**/?wc-ajax/*",
    }).as("addProductAPI");

    ShopPage.getAddProduct().click();

    cy.wait("@getProductAPI").its("response.statusCode").should("eq", 200);
    ShopPage.getViewCartBtn().click();
    CheckOutPage.getFirstName().type(faker.person.firstName(), { delay: 0 });
    CheckOutPage.getLastName().type(faker.person.lastName(), { delay: 0 });
    CheckOutPage.getCompanyName().type(faker.company.name(), { delay: 0 });
    CheckOutPage.getSelectCountry("United State (US)");
    CheckOutPage.getStreetAddress().type(faker.location.street(), { delay: 0 });
    CheckOutPage.getStreetOptionalAddress().type(faker.location.secondaryAddress(), { delay: 0 });
    CheckOutPage.getCity().type(faker.location.city(), { delay: 0 });
    CheckOutPage.getSelectState("California");
    CheckOutPage.getZipCode(faker.location.zipCode(), { delay: 0 });
    CheckOutPage.getPhone().type(faker.phone.number(), { delay: 0 });
    CheckOutPage.getEmailAddress().type(faker.internet.email(), { delay: 0 });
    CheckOutPage.getOrderComments().type(faker.lorem.sentence());
    CheckOutPage.getPlaceOrder().click();
  });
});
