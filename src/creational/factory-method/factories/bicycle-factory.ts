import { Bicycle } from "../vehicle/bicycle";
import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): VehicleProtocol { return new Bicycle(vehicleName) }
}