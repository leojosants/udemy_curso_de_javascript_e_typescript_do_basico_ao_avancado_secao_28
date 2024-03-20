import { ProductDecorator } from "./productDecorator";

/* - - - - - - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - - - - - - */
export class ProductCustomizationDecorator extends ProductDecorator {

    public getName(): string {
        return this.product.getName() + ' -> customizada';
    }

    public getPrice(): number {
        return this.product.getPrice() + 50;
    }
}