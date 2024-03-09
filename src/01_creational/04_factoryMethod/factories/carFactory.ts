/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Car } from "../vehicle/car";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFatory } from "./vehicleFactory";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class CarFactory extends VehicleFatory {

    public getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName);
    }
}