class CartPage{
getProceedToCartBtn(){
  return cy.get('a[href="http://ecommerce.test.k6.io/checkout/"]').contains("Proceed to checkout");
}
}

export default new CartPage();