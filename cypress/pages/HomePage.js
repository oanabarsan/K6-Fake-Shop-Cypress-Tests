class HomePage{
getHomePageLink(){
  return cy.get('a[href="http://ecommerce.test.k6.io/"]').contains('Home');
}
}

export default new HomePage();