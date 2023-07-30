import { IndividualCar } from './../vehicle/individual-car';
import { IndividualCustomer } from './../customer/individual-customer';
import { CustomerProtocol } from "../customer/interfaces/customer-protocol";
import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";

export class CreateIndividualCustomerVehicleFactory {
    createCustomer(customerName: string): CustomerProtocol {
        return new IndividualCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    }
}