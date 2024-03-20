/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DeliveryFlyweight } from "./interfaces/deliveryFlyweight";
import { DeliveryLocationData } from "./types/deliveryTypes";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class DeliveryLocation implements DeliveryFlyweight {

    private readonly intrinsicState: DeliveryLocationData;

    public constructor(intrinsicState: DeliveryLocationData) {
        this.intrinsicState = intrinsicState;
    }

    public deliver(name: string, number: string): void {
        console.log(`Entrega para ${name}`);
        console.log(`Rua: ${this.intrinsicState.street}`);
        console.log(`Número: ${number}`);
        console.log(`Cidade: ${this.intrinsicState.city}`);
        console.log('- - - # # # - - -\n');
    }
}