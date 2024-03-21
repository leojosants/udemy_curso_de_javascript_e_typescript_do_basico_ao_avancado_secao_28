/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ShoppingOrderStateProtocol } from "./interfaces/shoppingOrderStateProtocol";
import { OrderPending } from "./orderPending";
import { OrderRejected } from "./orderRejected";
import { ShoppingOrder } from "./shoppingOrder";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class OrderApproved implements ShoppingOrderStateProtocol {

    private name = 'OrderApproved';
    private order: ShoppingOrder;

    constructor(order: ShoppingOrder) {
        this.order = order;
    }

    public getName(): string {
        return this.name;
    }

    public approvePayment(): void {
        console.log(`O pedido já está no estado 'pagamento aprovado'.`);
    }

    public rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    public waitPayment(): void {
        this.order.setState(new OrderPending(this.order));
    }

    public shipOrder(): void {
        console.log(`Enviando pedido para o cliente...`);
    }
}