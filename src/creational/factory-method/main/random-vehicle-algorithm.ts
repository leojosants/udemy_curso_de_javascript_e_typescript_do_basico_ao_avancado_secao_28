import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { VehicleProtocol } from "../vehicle/interfaces/vehicle-protocol";
import { randomNumbers } from '../utils/random-numbers';

export function randomCarAlgorithm(): VehicleProtocol {
    const carFactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();

    const car1 = carFactory.getVehicle('Pálio');
    const car2 = carFactory.getVehicle('Ômega');

    const bicycle1 = bicycleFactory.getVehicle('Mônado');
    const bicycle2 = bicycleFactory.getVehicle('Specialize');

    const cars = [car1, car2, bicycle1, bicycle2];

    return cars[randomNumbers(cars.length)];
}