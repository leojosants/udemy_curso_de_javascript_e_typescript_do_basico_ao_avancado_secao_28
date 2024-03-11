/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { RemoteControl } from "./remoteControl";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class RemoteControlWithVolume extends RemoteControl {

    public volumeUp(): void {
        this.changeVolume('up');
    }

    public volumeDown(): void {
        this.changeVolume('down');
    }

    private changeVolume(value: string): void {
        const oldVolume = this.device.getVolume();

        if (value.toLowerCase() === 'up') {
            this.device.setVolume(this.device.getVolume() + 10);
        }
        else if (value.toLowerCase() === 'down') {
            this.device.setVolume(this.device.getVolume() - 10);
        }

        console.log(`${this.device.getName()} tinha o volume ${oldVolume}, agora tem ${this.device.getVolume()}`);
    }
}