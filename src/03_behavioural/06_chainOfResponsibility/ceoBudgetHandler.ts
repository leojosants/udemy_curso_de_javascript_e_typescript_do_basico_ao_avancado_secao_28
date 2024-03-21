/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { BaseBudgetHandler } from "./baseBudgetHandler";
import { CustomerBudget } from "./customerBudget";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class CEOBudgetHandler extends BaseBudgetHandler {
    public handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total <= 50_000) {
            console.log(`O CEO trata qualquer orçamento.`);
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}