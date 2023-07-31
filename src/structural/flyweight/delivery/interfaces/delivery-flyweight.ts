export interface DeliveryFlyweightProtocol {
    deliver(
        name: string,
        number: number,
    ): void;
}