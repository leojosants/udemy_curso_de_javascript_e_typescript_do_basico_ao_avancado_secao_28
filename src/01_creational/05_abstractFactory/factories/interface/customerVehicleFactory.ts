/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Customer } from "../../customer/interface/customer";
import { Vehicle } from "../../vehicle/interface/vehicle";

/* - - - - - - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - - - - - - */
export interface CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}