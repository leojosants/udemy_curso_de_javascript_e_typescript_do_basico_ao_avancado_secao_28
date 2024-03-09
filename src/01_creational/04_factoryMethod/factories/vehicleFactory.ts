/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Vehicle } from "../vehicle/vehicle";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export abstract class VehicleFatory {
    public abstract getVehicle(vehicleName: string): Vehicle;

    public pickUp(customerName: string, vehicleName: string): Vehicle {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }
}