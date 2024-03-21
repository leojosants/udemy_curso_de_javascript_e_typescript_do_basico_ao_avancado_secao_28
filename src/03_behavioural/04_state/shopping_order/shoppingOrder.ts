/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ShoppingOrderStateProtocol } from "./interfaces/shoppingOrderStateProtocol";
import { OrderPending } from "./orderPending";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ShoppingOrder {
    private state: ShoppingOrderStateProtocol = new OrderPending(this);

    public getState(): ShoppingOrderStateProtocol {
        return this.state;
    }

    public setState(state: ShoppingOrderStateProtocol): void {
        this.state = state;
        console.log(`O estado do pedido agora é '${this.getStateName()}'`);
    }

    public getStateName(): string {
        return this.state.getName();
    }

    public approvePayment(): void {
        this.state.approvePayment();
    }

    public rejectPayment(): void {
        this.state.rejectPayment();
    }

    public waitPayment(): void {
        this.state.waitPayment();
    }

    public shipOrder(): void {
        this.state.shipOrder();
    }
}