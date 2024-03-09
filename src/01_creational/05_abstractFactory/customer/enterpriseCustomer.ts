/* - - - - - - - - - - - - - - - - - - - - import - - - - - - - - - - - - - - - - - - - - */
import { Customer } from "./interface/customer";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class EnterpriseCustomer implements Customer {

    public name: string;

    public constructor(name: string) {
        this.name = name + ' (ENTERPRISE)';
    }
}