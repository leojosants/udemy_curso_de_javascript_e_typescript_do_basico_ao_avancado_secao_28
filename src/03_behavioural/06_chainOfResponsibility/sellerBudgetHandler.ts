/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { BaseBudgetHandler } from "./baseBudgetHandler";
import { CustomerBudget } from "./customerBudget";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class SellerBudgetHandler extends BaseBudgetHandler {
    public handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 100) {
            console.log(`O vendedor tratou o orçamento.`);
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}