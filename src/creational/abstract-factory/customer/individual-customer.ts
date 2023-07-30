import { CustomerProtocol } from "../customer/interfaces/customer-protocol";

export class IndividualCustomer implements CustomerProtocol {
    constructor(public name: string) {
        this.name += ' (cliente INDIVIDUAL)';
    }
}