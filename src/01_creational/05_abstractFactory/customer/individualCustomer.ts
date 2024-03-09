/* - - - - - - - - - - - - - - - - - - - - import - - - - - - - - - - - - - - - - - - - - */
import { Customer } from "./interface/customer";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class IndividualCustomer implements Customer {

    public name: string;

    public constructor(name: string) {
        this.name = name +' (INDIVIDUAL)';
    }
}