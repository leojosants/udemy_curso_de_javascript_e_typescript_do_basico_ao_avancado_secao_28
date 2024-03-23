/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { TaxVisitorProtocol } from "./interfaces/taxVisitorProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export abstract class VisitableProduct {
    private name: string;
    protected price: number;

    public constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    abstract getPriceWithTaxes(visitor:TaxVisitorProtocol): number;
}