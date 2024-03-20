/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DeliveryLocation } from "./deliveryLocation";
import { DeliveryFlyweight } from "./interfaces/deliveryFlyweight";
import { DeliveryLocationData, DeliveryLocationDictionary } from "./types/deliveryTypes";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class DeliveryFactory {

    private locations: DeliveryLocationDictionary = {};

    private createID(data: DeliveryLocationData): string {
        return Object.values(data)
            .map(item => item.replace(/\s+/, '').toLowerCase())
            .join('_');
    }

    public makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
        const key = this.createID(intrinsicState);

        if (key in this.locations) {
            return this.locations[key];
        }

        this.locations[key] = new DeliveryLocation(intrinsicState);
        return this.locations[key];
    }

    public getLocations(): DeliveryLocationDictionary {
        return this.locations;
    }
}