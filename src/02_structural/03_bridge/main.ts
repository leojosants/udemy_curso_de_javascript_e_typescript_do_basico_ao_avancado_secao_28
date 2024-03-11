/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remoteControl/remoteControl';
import { RemoteControlWithVolume } from './remoteControl/remoteControlWithVolume';

/* - - - - - - - - - - - - - - - - - - - - function - - - - - - - - - - - - - - - - - - - - */
export function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {

    abstraction.togglePower();

    if (!('volumeUp' in abstraction)) {
        return;
    }
    
    abstraction.volumeUp();
    abstraction.volumeUp();
    abstraction.volumeDown();
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlWithVolume(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

console.log();
clientCode(radioRemoteControl);

console.log();
clientCode(tvRemoteControl);