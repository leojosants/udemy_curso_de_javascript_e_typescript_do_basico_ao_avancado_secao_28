import { CreateEnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { CreateIndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new CreateEnterpriseCustomerVehicleFactory();
const individualFactory = new CreateIndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('car1', 'Nome_do_cliente1');
const car2 = individualFactory.createVehicle('car2', 'Nome_do_cliente2');

car1.pickUp();
car2.pickUp();