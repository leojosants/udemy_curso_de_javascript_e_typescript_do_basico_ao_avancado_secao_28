
import { ShoppingOrderStateProtocol } from "../interface/shopping-order-state-protocol";
import { OrderPending } from "./order-pending";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";

export class OrderApproved implements ShoppingOrderStateProtocol {
    private name = 'Order Approved';
    constructor(private order: ShoppingOrder) { }
    getName(): string { return this.name; }
    approvePayment(): void { console.log(`O pedido está no estado 'pagamento aprovado'.`); }
    rejectPayment(): void { this.order.setState(new OrderRejected(this.order)); }
    waitPayment(): void { this.order.setState(new OrderPending(this.order)); }
    shipOrder(): void { console.log(`'Enviando' pedido para o cliente...`); }
}