import { CustomerProtocol } from "../../customer/interfaces/customer-protocol";
import { VehicleProtocol } from "../../vehicle/interfaces/vehicle-protocol";

export interface CreateCustomerVehicleFactory {
    createCustomer(customerName: string): CustomerProtocol;
    createVehicle(vehicleName: string): VehicleProtocol;
}