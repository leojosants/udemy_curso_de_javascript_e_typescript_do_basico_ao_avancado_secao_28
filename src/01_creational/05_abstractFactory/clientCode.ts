/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterpriseCustomerVehicleFactory';
import { IndividualCustomerVehicleFactoryFactory } from './factories/individualCustomerVehicleFactory';

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCustomerVehicleFactoryFactory();

const car1 = enterpriseFactory.createVehicle('Fusca','João');
const car2 = individualFactory.createVehicle('Celta', 'José');

car1.pickUp();
car2.pickUp();