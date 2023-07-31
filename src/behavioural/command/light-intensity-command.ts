import { SmartHouseCommandProtocol } from "./interface/smart-house-command-protocol";
import { SmartHouseLight } from "./smart-house-light";

export class LightIntensityCommand implements SmartHouseCommandProtocol {
    constructor(private readonly light: SmartHouseLight) { }

    execute(): void {
        const intensity = this.light.increaseIntensity();
        console.log(`Intensidade de ${this.light.name} é ${intensity} (+)`);
    }
    undo(): void {
        const intensity = this.light.descreaseIntensity();
        console.log(`Intensidade de ${this.light.name} é ${intensity} (-)`);
    }
}