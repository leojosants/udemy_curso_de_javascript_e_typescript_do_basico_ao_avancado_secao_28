/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ShoppingOrderStateProtocol } from "./interfaces/shoppingOrderStateProtocol";
import { OrderApproved } from "./orderApproved";
import { OrderRejected } from "./orderRejected";
import { ShoppingOrder } from "./shoppingOrder";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class OrderPending implements ShoppingOrderStateProtocol {

    private name = 'OrderPending';
    private order: ShoppingOrder;

    constructor(order: ShoppingOrder) {
        this.order = order;
    }

    public getName(): string {
        return this.name;
    }

    public approvePayment(): void {
        this.order.setState(new OrderApproved(this.order));
    }

    public rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    public waitPayment(): void {
        console.log(`O pedido já está no estado 'pagamento pendent'e.`);
    }

    public shipOrder(): void {
        console.log(`Não posso enviar o pedido com 'pagamento pendente'.`);
    }
}