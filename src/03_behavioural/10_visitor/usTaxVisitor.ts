/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { AlcoholicDrink } from "./alcoholicDrink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./interfaces/taxVisitorProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class USTaxVisitor implements TaxVisitorProtocol {
    public calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.15;
    }

    public calculateTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.getPrice() + cigarette.getPrice() * 2;
    }

    public calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
        return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1;
    }
}