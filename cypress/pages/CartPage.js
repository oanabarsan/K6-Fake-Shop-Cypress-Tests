class CartPage{
    getProceedToCheckoutBtn(){
    return cy.get('a[href="http://ecommerce.test.k6.io/checkout/"]').contains("Proceed to checkout");
  }
    getQuantityField(){
      return cy.get("input[type='number']");
    }

    getUpdateCart(){
      return cy.get("button").contains('Update cart');
    }

    getCouponCodeField(){
      return cy.get('input[name="coupon_code"]');
    }

    getApplyCouponBtn(){
      return cy.get("button").contains("Apply coupon");
    }
}

export default new CartPage();