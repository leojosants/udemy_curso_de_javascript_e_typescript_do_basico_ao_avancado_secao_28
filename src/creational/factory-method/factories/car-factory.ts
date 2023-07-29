import { Car } from "../vehicle/car";
import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";
import { VehicleFactory } from "./vehicle-factory";

export class CarFactory extends VehicleFactory {
    getVehicle(vehicleName: string): VehicleProtocol { return new Car(vehicleName) }
}