import { VehicleProtocol } from "./interfaces/vehicle-protocol";

export class Car implements VehicleProtocol {
    constructor(private name: string) { }

    pickUp(customerName: string): void { console.log(`Veículo ${this.name}, está buscando ${customerName}.`); }

    stop(): void { console.log(`Veículo ${this.name} parou.`); }
}