/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { deliveryContextFN } from "./delivery/deliveryContextFN";
import { DeliveryFactory } from "./delivery/deliveryFactory";

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const factory = new DeliveryFactory();

deliveryContextFN(factory, 'Leo', '2', 'A', 'sjdr');
deliveryContextFN(factory, 'Luan', '2', 'A', 'sjdr');
deliveryContextFN(factory, 'Mara', '29', 'B', 'bh');
deliveryContextFN(factory, 'José', '20', 'A', 'sjdr');

console.log(factory.getLocations());