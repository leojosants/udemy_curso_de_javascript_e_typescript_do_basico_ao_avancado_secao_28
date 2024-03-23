import { TaxVisitorProtocol } from "./interfaces/taxVisitorProtocol";
import { VisitableProduct } from "./visitableProduct";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */export class Food extends VisitableProduct {
    public constructor(price: number) {
        super('Food', price);
    }

    public getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForFood(this);
    }
}