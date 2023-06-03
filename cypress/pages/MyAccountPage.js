class MyAccountPage{
  getEmail(){
    return cy.get('input[type="email"');
  }

  getRegisterBtn(){
    return cy.get('button').contains('Register');
  }

  getLoginUserName(){
    return cy.get("#username");
   }
  
   getLoginPassword(){
    return cy.get("#password");
   }
  
   getLoginBtn(){
    return cy.get('button[type="submit"').contains("Log in");
   }
}

export default new MyAccountPage();