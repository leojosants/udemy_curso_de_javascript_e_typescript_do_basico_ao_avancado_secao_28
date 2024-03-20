/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class SmartHouseLight {

    public name: string;
    private isOn = false;
    private intensity = 50;

    public constructor(name: string) {
        this.name = name;
    }

    public getPowerStatus(): string {
        return this.isOn ? 'ON' : 'OFF';
    }

    public on(): boolean {
        if (this.isOn) {
            console.log(
                `${this.name} já está 'ON'`
            );
            return this.isOn;
        }

        this.isOn = true;

        console.log(
            `${this.name} agora está '${this.getPowerStatus()}'`
        );

        return this.isOn;
    }

    public off(): boolean {
        if (!this.isOn) {
            console.log(
                `${this.name} já está 'OFF'`
            );
            return this.isOn;
        }

        this.isOn = false;

        console.log(
            `${this.name} agora está '${this.getPowerStatus()}'`
        );

        return this.isOn;
    }

    public increaseIntensity(): number {
        if (this.intensity >= 100) {
            console.log(
                `Intensidade ${this.name} já está no máximo`
            );
            return this.intensity;
        }
        this.intensity += 1;
        return this.intensity;
    }

    public decreaseIntensity(): number {
        if (this.intensity <= 0) {
            console.log(
                `Intensidade ${this.name} já está no mínimo`
            );
            return this.intensity;
        }
        this.intensity -= 1;
        return this.intensity;
    }
}