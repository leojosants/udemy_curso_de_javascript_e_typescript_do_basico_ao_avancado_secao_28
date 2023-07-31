import { DeliveryFlyweightProtocol } from "./interfaces/delivery-flyweight";
import { DeliveryLocationData } from "./types/delivery-types";

export class DeliveryLocation implements DeliveryFlyweightProtocol {
    constructor(private readonly intrinsicState: DeliveryLocationData) { }

    deliver(name: string, number: number): void {
        console.log(`Entrega para:\n\tNome: \t${name}\n\tEm: \t${this.intrinsicState.street}\n\tCidade: ${this.intrinsicState.city}\n\tNúmero: ${number}\n--*--*--*--*--*--*--*--\n`);

        // console.log('Entrega para %s', name)
        // console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
        // console.log('Número: %s', number);
        // console.log('#*#');
    };
}