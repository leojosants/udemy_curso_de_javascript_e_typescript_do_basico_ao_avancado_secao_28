import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { CustomerProtocol } from "../customer/interfaces/customer-protocol";
import { EnterpriseCar } from "../vehicle/enterprise-car";
import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";

export class CreateEnterpriseCustomerVehicleFactory {
    createCustomer(customerName: string): CustomerProtocol {
        return new EnterpriseCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    }
}