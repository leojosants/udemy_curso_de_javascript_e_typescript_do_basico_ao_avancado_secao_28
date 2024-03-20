/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { DeliveryLocation } from "../deliveryLocation";

/* - - - - - - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - - - - - - */
export type DeliveryLocationData = {
    readonly street: string;
    readonly city: string;
}

export type DeliveryLocationDictionary = {
    [key: string]: DeliveryLocation,
}