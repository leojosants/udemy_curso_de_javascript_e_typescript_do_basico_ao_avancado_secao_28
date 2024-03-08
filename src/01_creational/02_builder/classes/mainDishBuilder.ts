/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MealBuilderProtocol } from "../interfaces/mealBuilderProtocol";
import { MealBox } from "./mealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

/* - - - - - - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - - - - - - */
export class MainDishBuilder implements MealBuilderProtocol {

    private _meal: MealBox = new MealBox();

    public reset(): this{
        this._meal = new MealBox();
        return this;
    }

    public makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        const meat = new Meat('Carne', 20);
        this._meal.add(rice, beans, meat);
        return this;
    }

    public makeBeverage(): this {
        const beverage = new Beverage('Bebida', 7);
        this._meal.add(beverage);
        return this;
    }

    public makeDessert(): this {
        const dessert = new Dessert('Sobremesa', 10);
        this._meal.add(dessert);
        return this;
    }

    public getMeal(): MealBox {
        return this._meal;
    }

    public getPrice(): number{
        return this._meal.getPrice();
    }
}