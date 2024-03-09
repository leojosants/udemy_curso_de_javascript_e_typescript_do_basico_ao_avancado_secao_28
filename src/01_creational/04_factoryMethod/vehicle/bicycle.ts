/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Vehicle } from "./vehicle";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Bicycle implements Vehicle {

    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public pickUp(customerName: string): void {
        console.log();
        console.log(`${this.name} está buscando ${customerName}!`);
    }

    public stop(): void {
        console.log(`${this.name} parou!`);
    }

}