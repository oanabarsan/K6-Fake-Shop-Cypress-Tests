class CheckOutPage{
  getFirstName(){
    return cy.get("#billing_first_name");
  }

  getLastName(){
    return cy.get("#billing_last_name");
  }

  getCompanyName(){
   return cy.get("#billing_company");
  }


  getSelectCountry(){
    return cy.get("#billing_country_field select");
  }

  getStreetAddress(){
    return cy.get("#billing_address_1");
  }

  getStreetOptionalAddress(){
    return cy.get("#billing_address_2");
  }

  getCity(){
    return cy.get("#billing_city");
  }

  getSelectState(){
    return cy.get("#billing_state_field select");
  }

  getZipCode(){
    return cy.get("#billing_postcode");
  }

  getPhone(){
    return cy.get("#billing_phone");
  }

  getEmailAddress(){
    return cy.get("#billing_email");
  }

  getOrderComments(){
    return cy.get("#order_comments");
  }

  getPlaceOrder(){
    return cy.get("#place_order");
  }
}

export default new CheckOutPage();