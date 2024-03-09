/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Customer } from "../customer/interface/customer";
import { Vehicle } from "./interface/vehicle";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class EnterpriseCar implements Vehicle {

    public name: string;
    private readonly customer: Customer;

    public constructor(name: string, customer: Customer) {
        this.name = name;
        this.customer = customer;
    }

    pickUp(): void {
        console.log();
        console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE)`);
    }
}