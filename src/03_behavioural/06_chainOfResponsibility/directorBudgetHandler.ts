/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { BaseBudgetHandler } from "./baseBudgetHandler";
import { CustomerBudget } from "./customerBudget";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class DirectorBudgetHandler extends BaseBudgetHandler {
    public handle(budget: CustomerBudget): CustomerBudget {
        console.log(`O diretor tratou o orçamento.`);
        budget.approved = true;
        return budget;
    }
}