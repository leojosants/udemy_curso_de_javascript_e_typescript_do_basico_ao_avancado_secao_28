/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { BicycleFactory } from "../factories/bicycleFactory";
import { CarFactory } from "../factories/carFactory";
import { randomNumbers } from "../utils/randomNumbers";
import { Vehicle } from "../vehicle/vehicle";

/* - - - - - - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - - - - - - */
export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();

    const car1 = carFactory.getVehicle('Fusca');
    const car2 = carFactory.getVehicle('Lander');
    const bicyel1 = bicycleFactory.getVehicle('Monark');
    const bicyel2 = bicycleFactory.getVehicle('Caloi');

    const vehicles = [car1, car2, bicyel1, bicyel2];

    return vehicles[randomNumbers(vehicles.length)];
}