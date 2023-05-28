class AccountDetailsPage{
 getFirstName(){
  return cy.get('#account_first_name');
 }

 getLastName(){
  return cy.get('#account_last_name');
 }

 getDisplayName(){
  return cy.get('#account_display_name');
 }

 getEmailAddress(){
  return cy.get('#account_email');
 }

 getCurrentPassword(){
  return cy.get('#password_current');
 }

 getUpdatedPassword(){
  return cy.get('#password_1');
 }

 getConfirmPassword(){
  return cy.get('#password_2');
 }

 getSaveChanges(){
  return cy.get('button').contains('Save changes');
 }
}

export default new AccountDetailsPage();