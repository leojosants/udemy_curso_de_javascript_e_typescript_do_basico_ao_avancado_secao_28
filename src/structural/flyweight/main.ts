import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();

deliveryContext(factory, 'Leonardo', '601', 'Rua A', 'SJDR');
deliveryContext(factory, 'João', '601', 'Rua A', 'SJDR');
deliveryContext(factory, 'Joana', '600', 'Rua B', 'BH');
deliveryContext(factory, 'Maria', '600', 'Rua B', 'BH');

console.log('\n', factory.getLocations());