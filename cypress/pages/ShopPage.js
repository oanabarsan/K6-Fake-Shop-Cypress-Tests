class ShopPage{
getAddProduct(){
  return cy.get('a[href="?add-to-cart=16"][data-product_id="16"]').contains("Add to cart");
}

getViewCartBtn(){
  return cy.get('li.post-16:nth-child(2) a[href="http://ecommerce.test.k6.io/cart/"]').contains('View cart');
}
}

export default new ShopPage();