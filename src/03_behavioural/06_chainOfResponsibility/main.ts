import { CEOBudgetHandler } from './ceoBudgetHandler';
import { CustomerBudget } from './customerBudget';
import { DirectorBudgetHandler } from './directorBudgetHandler';
import { ManagerBudgetHandler } from './managerBudgetHandler';
import { SellerBudgetHandler } from './sellerBudgetHandler';

/* - - - - - - - - - - - - - - - - - - - - function - - - - - - - - - - - - - - - - - - - - */
function generatePrice(): number {
    return Number((Math.random() * 50_000).toFixed(2));
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const customerBudget = new CustomerBudget(generatePrice());
const seller = new SellerBudgetHandler();

seller
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);

console.log(customerBudget);