/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Bicycle } from "../vehicle/bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFatory } from "./vehicleFactory";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class BicycleFactory extends VehicleFatory {

    public getVehicle(vehicleName: string): Vehicle {
        return new Bicycle(vehicleName);
    }
}