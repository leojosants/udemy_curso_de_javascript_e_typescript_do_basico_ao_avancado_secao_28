import { CustomerProtocol } from '../customer/interfaces/customer-protocol';

export class EnterpriseCustomer implements CustomerProtocol {
    constructor(public name: string) {
        this.name += ' (cliente ENTERPRISE)';
    }
}