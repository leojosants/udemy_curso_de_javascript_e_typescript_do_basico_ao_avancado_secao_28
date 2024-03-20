/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MainDishBuilder } from '../../01_creational/02_builder/classes/mainDishBuilder';
import { VeganDishBuilder } from '../../01_creational/02_builder/classes/veganDishBuilder';

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
// essa é uma fachada para src\01_creational\02_builder\index.ts
export class BuilderFacade {

    private mainDishBuilder = new MainDishBuilder();
    private veganDishBuilder = new VeganDishBuilder();

    public makeMeal1(): void {
        this.mainDishBuilder.makeMeal().makeDessert();
        console.log(this.mainDishBuilder.getMeal());
        console.log(this.mainDishBuilder.getPrice());
    }

    public makeMeal2(): void {
        this.mainDishBuilder.reset();
        const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
        console.log(meal2);
    }

    public makeMeal3(): void {
        const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
        console.log(veganMeal);
        console.log(veganMeal.getPrice());
    }
}