import { DiscountStrategy } from "./discount-strategy";
import { EcommerceShoppingCart } from "./e-commerce-shopping-cart";

export class NewDiscount extends DiscountStrategy {
    protected discount = 0;

    getDiscount(cart: EcommerceShoppingCart): number {
        const total = cart.getTotal();
        if (total >= 150) this.discount = 5;
        return total - total * (this.discount / 100);
    }
}
