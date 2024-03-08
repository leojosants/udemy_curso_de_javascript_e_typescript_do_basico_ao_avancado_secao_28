/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MealCompositeProtocol } from "../interfaces/mealCompositeProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export abstract class AbstractMeal implements MealCompositeProtocol {
    private name: string;
    private price: number;

    public constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }
}