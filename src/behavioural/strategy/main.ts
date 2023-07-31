import { EcommerceShoppingCart } from "./shopping-cart/e-commerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/new-discount";

const shoppingCart = new EcommerceShoppingCart();

// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 3', price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());