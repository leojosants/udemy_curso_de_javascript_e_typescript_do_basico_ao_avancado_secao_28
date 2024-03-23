/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { TaxVisitorProtocol } from "./interfaces/taxVisitorProtocol";
import { VisitableProduct } from "./visitableProduct";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class AlcoholicDrink extends VisitableProduct {
    public constructor(price: number) {
        super('AlcoholicDrink', price);
    }

    public getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForCigarette(this);
    }
}