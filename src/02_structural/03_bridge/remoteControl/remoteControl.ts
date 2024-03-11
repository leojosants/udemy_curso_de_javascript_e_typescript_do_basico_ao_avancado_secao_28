/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DeviceImplementation } from "../device/interface/deviceImplementation";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class RemoteControl {

    protected device: DeviceImplementation;

    public constructor(device: DeviceImplementation) {
        this.device = device;
    }

    public togglePower(): void {
        this.device.setPower(!this.device.getPower());

        if (this.device.getPower()) {
            console.log(`${this.device.getName()} power status: on`);
        }
        else {
            console.log(`${this.device.getName()} power status: off`);
        }
    }
}