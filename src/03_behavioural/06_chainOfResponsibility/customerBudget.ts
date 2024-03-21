/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class CustomerBudget {
    public approved = false;
    public total: number;

    public constructor(total: number) {
        this.total = total;
    }
}