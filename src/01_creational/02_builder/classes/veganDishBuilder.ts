/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MealBuilderProtocol } from "../interfaces/mealBuilderProtocol";
import { MealBox } from "./mealBox";
import { Beans, Rice } from "./meals";

/* - - - - - - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - - - - - - */
export class VeganDishBuilder implements MealBuilderProtocol {

    private _meal: MealBox = new MealBox();

    public reset(): this {
        this._meal = new MealBox();
        return this;
    }

    public makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        this._meal.add(rice, beans);
        return this;
    }

    public getMeal(): MealBox {
        return this._meal;
    }

    public getPrice(): number {
        return this._meal.getPrice();
    }
}