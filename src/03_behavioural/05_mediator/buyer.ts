/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Mediator } from "./mediator";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Buyer {

    private mediator: Mediator;

    public constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public viewProducts(): void {
        this.mediator.showProducts();
    }

    public buy(id: string): void {
        this.mediator.buy(id);
    }
}