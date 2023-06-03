class HomePage{
  getHomePageLink(){
    return cy.get('a[href="http://ecommerce.test.k6.io/"]').contains('Home');
  }

  getSamplePageLink(){
    return cy.get('a[href="http://ecommerce.test.k6.io/sample-page/"]').contains('Sample Page');
  }

  getSearchField(){
    return cy.get("#woocommerce-product-search-field-0");
  }
}

export default new HomePage();