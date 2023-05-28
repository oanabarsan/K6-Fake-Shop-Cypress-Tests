class EditPswAndAccountDetailsPage{
  getEditPswLink(){
    return cy.get('a[href="http://ecommerce.test.k6.io/my-account/edit-account/"]').contains('edit your password and account details');
  }
}

export default new EditPswAndAccountDetailsPage();