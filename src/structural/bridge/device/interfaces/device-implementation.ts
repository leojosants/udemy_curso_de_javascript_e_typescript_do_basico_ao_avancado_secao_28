export interface DeviceImplementationProtocol {
    getName(): string;
    setPower(powerStatus: boolean): void;
    getPower(): boolean;
    setVolume(volume: number): void;
    getVolume(): number;
}