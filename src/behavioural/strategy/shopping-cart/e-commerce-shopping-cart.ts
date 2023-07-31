import { DiscountStrategy } from "./discount-strategy";
import { ECommerceProductProtocol } from "./interfaces/e-commerce-product-protocol";

export class EcommerceShoppingCart {
    private products: ECommerceProductProtocol[] = [];
    private _discountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]): void { products.forEach(product => this.products.push(product)); }

    getProducts(): ECommerceProductProtocol[] { return this.products; }

    getTotal(): number { return this.products.reduce((sum, produc) => sum + produc.price, 0); }

    getTotalWithDiscount(): number { return this._discountStrategy.getDiscount(this); }

    set discount(discount: DiscountStrategy) { this._discountStrategy = discount; }
}