import { EcommerceShoppingCart } from "./e-commerce-shopping-cart";

export class DiscountStrategy {
    protected discount = 0;
    getDiscount(cart: EcommerceShoppingCart): number { return cart.getTotal(); }
}