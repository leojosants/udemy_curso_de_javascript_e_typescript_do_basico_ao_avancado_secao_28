/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { AlcoholicDrink } from "./alcoholicDrink";
import { BrazilTaxVisitor } from "./brazilTaxVisitor";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { USTaxVisitor } from "./usTaxVisitor";

/* - - - - - - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - - - - - - */
function instanceateFood(price: number): Food {
    return new Food(price);
}

function instanceateCigarette(price: number): Cigarette {
    return new Cigarette(price);
}

function instanceateAlcoholicDrink(price: number): AlcoholicDrink {
    return new AlcoholicDrink(price);
}

function instanceateBrazilTaxVisitor(): BrazilTaxVisitor {
    return new BrazilTaxVisitor();
}

function instanceateUSTaxVisitor(): USTaxVisitor {
    return new USTaxVisitor();
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const food = instanceateFood(10);
const cigarette = instanceateCigarette(5);
const alcoholicDrink = instanceateAlcoholicDrink(5);

const brazilTaxVisitor = instanceateBrazilTaxVisitor();
const usTaxVisitor = instanceateUSTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];

const total = cart.reduce((sum, item) => {
    return item.getPrice() + sum
}, 0);

const totalWhitTaxesBrazil = cart.reduce((sum, item) => {
    return item.getPriceWithTaxes(brazilTaxVisitor) + sum
}, 0);

const totalWhitTaxesUS = cart.reduce((sum, item) => {
    return item.getPriceWithTaxes(usTaxVisitor) + sum
}, 0);

console.log();
console.log(`Total sem taxa.....: R$${total}`);
console.log(`Total com taxa (BR): R$${totalWhitTaxesBrazil}`);
console.log(`Total com taxa (US): $${totalWhitTaxesUS}`);