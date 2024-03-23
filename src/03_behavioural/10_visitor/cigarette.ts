/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { TaxVisitorProtocol } from "./interfaces/taxVisitorProtocol";
import { VisitableProduct } from "./visitableProduct";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Cigarette extends VisitableProduct {
    public constructor(price: number) {
        super('Cigarette', price);
    }

    public getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForCigarette(this);
    }
}