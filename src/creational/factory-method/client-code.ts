import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

const carFactory = new CarFactory();

const customerNames = ['Flávio', 'Valdeir', 'Jony', 'Vertinho'];

for (let i = 0; i < 10; i++) {
    const name = customerNames[randomNumbers(customerNames.length)]

    const vehicle = randomCarAlgorithm();
    vehicle.pickUp(name);
    vehicle.stop();

    const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
    newCar.stop();

    console.log('- - -');
}