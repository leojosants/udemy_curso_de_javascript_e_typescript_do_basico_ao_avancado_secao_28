import { ShoppingOrderStateProtocol } from "../interface/shopping-order-state-protocol";
import { OrderPending } from "./order-pending";

export class ShoppingOrder {
    private state: ShoppingOrderStateProtocol = new OrderPending(this);
    getState(): ShoppingOrderStateProtocol { return this.state }

    setState(state: ShoppingOrderStateProtocol): void {
        this.state = state;
        console.log(`O estado do pedido agora é: ${this.getStateName()}`);
    }

    getStateName(): string { return this.state.getName(); }
    approvePayment(): void { this.state.approvePayment(); }
    rejectPayment(): void { this.state.rejectPayment(); }
    waitPayment(): void { this.state.waitPayment(); }
    shipOrder(): void { this.state.shipOrder(); }
}