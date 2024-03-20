/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ECommerceShoppingCart } from "./eCommerceShoppingCart";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class DiscountStrategy {

    protected discount = 0;

    public getDiscount(cart: ECommerceShoppingCart): number {
        return cart.getTotal();
    }
}