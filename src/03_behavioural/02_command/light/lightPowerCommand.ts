/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { SmartHouseCommandProtocol } from "../smartHouse/interfaces/smartHouseCommandProtocol";
import { SmartHouseLight } from "../smartHouse/smartHouseLight";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class LightPowerCommand implements SmartHouseCommandProtocol {

    private readonly light: SmartHouseLight;

    public constructor(light: SmartHouseLight) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }

    public undo(): void {
        this.light.off();
    }
}