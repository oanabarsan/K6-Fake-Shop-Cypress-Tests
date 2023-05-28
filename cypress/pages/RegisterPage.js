class RegisterPage{
  getEmail(){
    return cy.get('input[type="email"');
  }

  getRegisterBtn(){
    return cy.get('button').contains('Register');
  }
}

export default new RegisterPage();