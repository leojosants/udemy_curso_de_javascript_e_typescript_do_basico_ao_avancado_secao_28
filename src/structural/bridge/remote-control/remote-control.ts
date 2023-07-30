import { DeviceImplementationProtocol } from "../device/interfaces/device-implementation";

export class RemoteControl {
    constructor(protected device: DeviceImplementationProtocol) { }

    togglePower(): void {
        this.device.setPower(!this.device.getPower());
        console.log(`${this.device.getName()} power status:${this.device.getPower()}`);
    }
}