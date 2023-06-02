/// <reference types = "cypress" />
import { faker } from "@faker-js/faker";
import ShopPage from "../pages/ShopPage";
import HomePage from "../pages/HomePage";
import CheckOutPage from "../pages/CheckOutPage";
import CartPage from "../pages/CartPage";
const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomCompanyName = faker.company.name();
const country = "Romania";
const randomStreetAddress = faker.location.street();
const optionalAddress = faker.location.secondaryAddress();
const randomCity = faker.location.city();
const county = "Cluj";
const randomZipCode = faker.location.zipCode();
const randomPhoneNumber = faker.phone.number("+40 74 ### ## ##");
const randomEmail = faker.internet.email();
const randomSentence = faker.lorem.sentence();

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
    CheckOutPage.getFirstName().type(randomFirstName, { delay: 0 });
    CheckOutPage.getLastName().type(randomLastName, { delay: 0 });
    CheckOutPage.getCompanyName().type(randomCompanyName, { delay: 0 });
    CheckOutPage.getSelectCountry().select(country, { force: true });
    CheckOutPage.getStreetAddress().type(randomStreetAddress, { delay: 0 });
    CheckOutPage.getStreetOptionalAddress().type(optionalAddress, { delay: 0 });
    CheckOutPage.getCity().type(randomCity, { delay: 0 });
    CheckOutPage.getSelectState().select(county, { force: true }, { delay: 0 });
    CheckOutPage.getZipCode().type(randomZipCode, { delay: 0 });
    CheckOutPage.getPhone().type(randomPhoneNumber, { delay: 0 });
    CheckOutPage.getEmailAddress().type(randomEmail, { delay: 0 });
    CheckOutPage.getOrderComments().type(randomSentence);
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
