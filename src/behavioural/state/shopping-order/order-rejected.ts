import { ShoppingOrderStateProtocol } from "../interface/shopping-order-state-protocol";
import { ShoppingOrder } from "./shopping-order";

export class OrderRejected implements ShoppingOrderStateProtocol {
    private name = 'Order Rejected';
    constructor(private order: ShoppingOrder) { }
    getName(): string { return this.name; }
    approvePayment(): void { console.log(`Não posso 'aprovar' o pagamento porque o pedido 'foi recusado'.`); }
    rejectPayment(): void { console.log(`Não posso 'recusar' o pagamento porque o pedido 'já está recusado'.`); }
    waitPayment(): void { console.log(`Não posso 'mover' o pagamento para 'pendente' porque o pedido 'foi recusado'.`); }
    shipOrder(): void { console.log(`Não posso 'enviar' o pedido com 'pagamento recusado'.`); }
}
