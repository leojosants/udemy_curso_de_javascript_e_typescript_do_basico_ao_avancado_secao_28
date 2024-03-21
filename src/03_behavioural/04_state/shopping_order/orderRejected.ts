/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ShoppingOrderStateProtocol } from "./interfaces/shoppingOrderStateProtocol";
import { ShoppingOrder } from "./shoppingOrder";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class OrderRejected implements ShoppingOrderStateProtocol {

    private name = 'OrderRejected';
    private order: ShoppingOrder;

    constructor(order: ShoppingOrder) {
        this.order = order;
    }

    public getName(): string {
        return this.name;
    }

    public approvePayment(): void {
        console.log(`Não posso aprovar o pagamento porque o 'pedido foi recusado'.`);
    }

    public rejectPayment(): void {
        console.log(`Não posso recusar o pagamento porque o 'pedido já está recusado'.`);
    }

    public waitPayment(): void {
        console.log(`Não posso mover para pendente porque o 'pedido foi recusado'.`);
    }

    public shipOrder(): void {
        console.log(`Não posso enviar um pedido com 'pagamento recusado'.`);
    }
}