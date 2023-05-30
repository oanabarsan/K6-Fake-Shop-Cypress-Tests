import { faker } from "@faker-js/faker";
import CheckOutPage from "../pages/CheckOutPage";

Cypress.Commands.add("checkoutForm", ()=>{

const randomFirstName = faker.person.firstName();
CheckOutPage.getFirstName().type(randomFirstName, { delay: 0 });

const randomLastName = faker.person.lastName();
CheckOutPage.getLastName().type(randomLastName, { delay: 0 });

const randomCompanyName = faker.company.name();
CheckOutPage.getCompanyName().type(randomCompanyName, { delay: 0 });

const country = "Romania";
CheckOutPage.getSelectCountry().select(country, { force: true });

const randomStreetAddress = faker.location.street();
CheckOutPage.getStreetAddress().type(randomStreetAddress, { delay: 0 });

const optionalAddress = faker.location.secondaryAddress();
CheckOutPage.getStreetOptionalAddress().type(optionalAddress, { delay: 0 });

const randomCity = faker.location.city();
CheckOutPage.getCity().type(randomCity, { delay: 0 });

const county = "Cluj";
CheckOutPage.getSelectState().select(county, { force: true }, { delay: 0 });


const randomZipCode = faker.location.zipCode()
CheckOutPage.getZipCode().type(randomZipCode, { delay: 0 });

const randomPhoneNumber = faker.phone.number("+40 74 ### ## ##")
CheckOutPage.getPhone().type(randomPhoneNumber, { delay: 0 });


const randomEmail = faker.internet.email();
CheckOutPage.getEmailAddress().type(randomEmail, { delay: 0 });


const randomSentence = faker.lorem.sentence();
CheckOutPage.getOrderComments().type(randomSentence);
})
