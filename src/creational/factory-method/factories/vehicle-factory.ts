import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";

export abstract class VehicleFactory {
    abstract getVehicle(vehicleName: string): VehicleProtocol;

    pickUp(customerName: string, vehicleName: string): VehicleProtocol {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    };
}