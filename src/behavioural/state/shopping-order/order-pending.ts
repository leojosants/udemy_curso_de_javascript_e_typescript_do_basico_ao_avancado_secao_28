import { ShoppingOrderStateProtocol } from "../interface/shopping-order-state-protocol";
import { OrderApproved } from "./order-approved";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";

export class OrderPending implements ShoppingOrderStateProtocol {
    private name = 'Order Pending';
    constructor(private order: ShoppingOrder) { }
    getName(): string { return this.name; }
    approvePayment(): void { this.order.setState(new OrderApproved(this.order)); }
    rejectPayment(): void { this.order.setState(new OrderRejected(this.order)); }
    waitPayment(): void { console.log(`O pedido está no estado 'pagamento pendente'.`); }
    shipOrder(): void { console.log(`Não posso enviar pedido com 'pagamento pendente'.`); }
}