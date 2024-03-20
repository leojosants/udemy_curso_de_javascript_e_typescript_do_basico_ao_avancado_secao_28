/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ProductDecorator } from "./productDecorator";

/* - - - - - - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - - - - - - */
export class ProductStampDecorator extends ProductDecorator {

    public getName(): string {
        return this.product.getName() + ' -> estampada';
    }

    public getPrice(): number {
        return this.product.getPrice() + 10;
    }
}