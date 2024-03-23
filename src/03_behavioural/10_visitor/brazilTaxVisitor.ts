/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { AlcoholicDrink } from "./alcoholicDrink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./interfaces/taxVisitorProtocol";


/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class BrazilTaxVisitor implements TaxVisitorProtocol {
    public calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.05;
    }

    public calculateTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.getPrice() + cigarette.getPrice() * 1.5;
    }

    public calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
        return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
    }
}