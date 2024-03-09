/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { IndividualCustomer } from "../customer/individualCustomer";
import { Customer } from "../customer/interface/customer";
import { IndividualCar } from "../vehicle/individualCar";
import { Vehicle } from "../vehicle/interface/vehicle";
import { CreateVehicleCustomerFactory } from "./interface/customerVehicleFactory";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class IndividualCustomerVehicleFactoryFactory implements CreateVehicleCustomerFactory {

    public createCustomer(customer: string): Customer {
        return new IndividualCustomer(customer);
    }

    public createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    }
}