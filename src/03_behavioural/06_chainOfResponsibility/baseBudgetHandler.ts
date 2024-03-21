/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { CustomerBudget } from './customerBudget';

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export abstract class BaseBudgetHandler {
    protected nextHandler: BaseBudgetHandler | null = null;

    public setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(budget: CustomerBudget): CustomerBudget {
        if (this.nextHandler) {
            return this.nextHandler.handle(budget);
        }
        return budget;
    }
}