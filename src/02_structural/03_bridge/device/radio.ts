/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DeviceImplementation } from "./interface/deviceImplementation";


/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Radio implements DeviceImplementation {

    private volume = 10;
    private power = false;
    private name = 'Rádio';

    public getName(): string {
        return this.name;
    }

    public setPower(powerStatus: boolean): void {
        this.power = powerStatus;
    }

    public getPower(): boolean {
        return this.power;
    }

    public setVolume(volume: number): void {
        if (volume < 0 || volume > 100) {
            return;
        }
        this.volume = volume;
    }

    public getVolume(): number {
        return this.volume;
    }
}