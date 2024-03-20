/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DiscountStrategy } from "./discountStrategy";
import { ECommerceProductProtocol } from "./interfaces/eCommerceProductProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ECommerceShoppingCart {

    private products: ECommerceProductProtocol[] = [];
    private _discountStrategy: DiscountStrategy = new DiscountStrategy();

    public set discount(discount: DiscountStrategy) {
        this._discountStrategy = discount;
    }

    public addProduct(...products: ECommerceProductProtocol[]): void {
        products.forEach((product) => {
            this.products.push(product);
        });
    }

    public getProducts(): ECommerceProductProtocol[] {
        return this.products;
    }

    public getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    public getTotalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    }
}