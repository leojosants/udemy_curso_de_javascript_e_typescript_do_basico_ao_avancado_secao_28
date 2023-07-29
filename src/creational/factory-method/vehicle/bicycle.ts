import { VehicleProtocol } from "./interfaces/vehicle-protocol";

export class Bicycle implements VehicleProtocol {
    constructor(private name: string) { }

    pickUp(customerName: string): void { console.log(`Veículo ${this.name}, pegou cliente ${customerName}.`); }

    stop(): void { console.log(`Veículo ${this.name} parou.`); }
}