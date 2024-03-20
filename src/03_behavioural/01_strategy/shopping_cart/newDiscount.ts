/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DiscountStrategy } from "./discountStrategy";
import { ECommerceShoppingCart } from "./eCommerceShoppingCart";

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
export class NewDiscount extends DiscountStrategy {

    protected discount = 0;

    public getDiscount(cart: ECommerceShoppingCart): number {
        const total = cart.getTotal();

        if (total >= 150 && total < 200) {
            this.discount = 5;
        }

        return total - total * (this.discount / 100);
    }
}