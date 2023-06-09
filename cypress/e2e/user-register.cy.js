/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";

import MyAccountPage from "../pages/MyAccountPage";
import EditPswAndAccountDetailsPage from "../pages/EditPswAndAccountDetailsPage.js";
import AccountDetailsPage from "../pages/AccountDetailsPage";

let randomEmail = faker.internet.email();
let existingEmail = randomEmail;
let randomFirstName = faker.person.firstName();
let randomLastName = faker.person.lastName();
let randomEmailAddress = faker.internet.exampleEmail({
  firstName: randomFirstName,
  lastName: randomLastName,
});
let currentPassword = faker.internet.password();
let updatedPassword = faker.internet.password();

describe("User auth test suite", () => {
  it("Register with valid creds", () => {
    MyAccountPage.getEmail().type(randomEmail, { delay: 0 });
    MyAccountPage.getRegisterBtn().click();
    cy.contains(
      `From your account dashboard you can view your recent orders,`
    ).should("be.visible");
  });

  it("Try to register with existing email", () => {
    MyAccountPage.getEmail().type(existingEmail, { delay: 0 });
    MyAccountPage.getRegisterBtn().click();
    cy.contains(
      `Error: An account is already registered with your email address. Please log in.`
    ).should("be.visible");
  });

  it("Try to update password test", () => {
    MyAccountPage.getEmail().type(randomEmailAddress, { delay: 0 });
    MyAccountPage.getRegisterBtn().click();
    cy.contains(
      `From your account dashboard you can view your recent orders,`
    ).should("be.visible");
    EditPswAndAccountDetailsPage.getEditPswLink().click();
    AccountDetailsPage.getFirstName().type(randomFirstName, { delay: 0 });
    AccountDetailsPage.getLastName().type(randomLastName, { delay: 0 });
    AccountDetailsPage.getDisplayName().should("be.visible");
    AccountDetailsPage.getCurrentPassword().type(currentPassword, { delay: 0 });
    AccountDetailsPage.getUpdatedPassword().type(updatedPassword, { delay: 0 });
    AccountDetailsPage.getConfirmPassword().type(updatedPassword, { delay: 0 });
    AccountDetailsPage.getSaveChanges().click();
    cy.get("ul.woocommerce-error")
      .contains("Your current password is incorrect.")
      .should("be.visible");
  });

  it("Try to login test", () => {
   MyAccountPage.getLoginUserName().type(existingEmail);
   MyAccountPage.getLoginPassword().type(currentPassword);
   MyAccountPage.getLoginBtn().click();
   cy.get("ul.woocommerce-error>li").contains("Error: The password you entered for the email address").should("be.visible");

  });
});
