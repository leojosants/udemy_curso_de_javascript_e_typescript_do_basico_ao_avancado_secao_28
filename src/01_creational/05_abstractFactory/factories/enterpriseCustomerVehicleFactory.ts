/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { EnterpriseCustomer } from "../customer/enterpriseCustomer";
import { Customer } from "../customer/interface/customer";
import { EnterpriseCar } from "../vehicle/enterpriseCar";
import { Vehicle } from "../vehicle/interface/vehicle";
import { CreateVehicleCustomerFactory } from "./interface/customerVehicleFactory";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class EnterpriseCreateVehicleCustomerFactory implements CreateVehicleCustomerFactory {

    public createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName);
    }

    public createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    }
}