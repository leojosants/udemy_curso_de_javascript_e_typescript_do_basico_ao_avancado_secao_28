import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";
import { CustomerProtocol } from "../customer/interfaces/customer-protocol";

export class EnterpriseCar implements VehicleProtocol {
    constructor(
        public name: string,
        private readonly customer: CustomerProtocol,
    ) { }

    pickUp(): void { console.log(`${this.name} está buscando ${this.customer.name}`); }

}