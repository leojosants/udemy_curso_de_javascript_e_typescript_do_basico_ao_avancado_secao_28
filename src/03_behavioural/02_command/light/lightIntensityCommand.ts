/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { SmartHouseCommandProtocol } from "../smartHouse/interfaces/smartHouseCommandProtocol";
import { SmartHouseLight } from "../smartHouse/smartHouseLight";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class LightIntensityCommand implements SmartHouseCommandProtocol {

    private readonly light: SmartHouseLight;

    public constructor(light: SmartHouseLight) {
        this.light = light;
    }

    public execute(): void {
        const intensity = this.light.increaseIntensity();
        console.log(
            `Intensidade de ${this.light.name} é ${intensity}`
        );
    }

    public undo(): void {
        const intensity = this.light.decreaseIntensity();
        console.log(
            `Intensidade de ${this.light.name} é ${intensity}`
        );
    }
}