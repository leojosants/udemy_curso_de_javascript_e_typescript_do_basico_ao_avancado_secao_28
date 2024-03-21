/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { BaseBudgetHandler } from "./baseBudgetHandler";
import { CustomerBudget } from "./customerBudget";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ManagerBudgetHandler extends BaseBudgetHandler {
    public handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 5_000) {
            budget.approved = true;
            console.log(`A gerência tratou o orçamento.`);
            return budget;
        }
        return super.handle(budget);
    }
}