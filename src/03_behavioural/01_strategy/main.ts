/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ECommerceShoppingCart } from "./shopping_cart/eCommerceShoppingCart";
import { NewDiscount } from "./shopping_cart/newDiscount";

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const shoppingCart = new ECommerceShoppingCart();

// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();

shoppingCart.addProduct({
    name: 'Produto 1',
    price: 50,
});

shoppingCart.addProduct({
    name: 'Produto 2',
    price: 50,
});

shoppingCart.addProduct({
    name: 'Produto 3',
    price: 50,
});

console.log(
    '\nTotal: R$', shoppingCart.getTotal()
);

console.log(
    'Total com desconto: R$', shoppingCart.getTotalWithDiscount()
);