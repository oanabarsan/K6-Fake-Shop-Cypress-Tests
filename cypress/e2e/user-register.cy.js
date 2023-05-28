/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";

import RegisterPage from "../pages/RegisterPage";
import EditPswAndAccountDetailsPage from "../pages/EditPswAndAccountDetailsPage.js";
import AccountDetailsPage from "../pages/AccountDetailsPage";

describe("User register test suite", () => {
  let randomEmail = faker.internet.email();

  let existingEmail = randomEmail;

  it("Register with valid creds", () => {
    RegisterPage.getEmail().type(randomEmail, { delay: 0 });
    RegisterPage.getRegisterBtn().click();
    cy.contains(
      `From your account dashboard you can view your recent orders,`
    ).should("be.visible");
  });

  it("Try to register with existing email", () => {
    RegisterPage.getEmail().type(existingEmail, { delay: 0 });
    RegisterPage.getRegisterBtn().click();
    cy.contains(
      `Error: An account is already registered with your email address. Please log in.`
    ).should("be.visible");
  });

  it("Update password test", () => {
    let randomFirstName = faker.person.firstName();
    let randomLastName = faker.person.lastName();
    let randomEmailAddress = faker.internet.exampleEmail({
      firstName: randomFirstName,
      lastName: randomLastName,
    });
    let currentPassword = faker.internet.password();
    let updatedPassword = faker.internet.password();

    RegisterPage.getEmail().type(randomEmailAddress, { delay: 0 });
    RegisterPage.getRegisterBtn().click();
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
});
