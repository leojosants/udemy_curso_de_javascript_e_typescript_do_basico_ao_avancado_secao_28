/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ProductProtocol } from "./interfaces/productProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ProductDecorator implements ProductProtocol {

    protected product: ProductProtocol;

    public constructor(product: ProductProtocol) {
        this.product = product;
    }

    public getName(): string {
        return this.product.getName();
    }

    public getPrice(): number {
        return this.product.getPrice();
    }
}