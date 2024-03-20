/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ProductStampDecorator } from "./product/productStampDecorator";
import { TShirt } from "./product/tshirt";
import { ProductCustomizationDecorator } from './product/productCustomizationDecorator';

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtStampFrondAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(
    tShirt.getPrice(),
    tShirt.getName()
);

console.log(
    tShirtWithStamp.getPrice(),
    tShirtWithStamp.getName()
);

console.log(
    tShirtStampFrondAndBack.getPrice(),
    tShirtStampFrondAndBack.getName()
);

console.log(
    customizedTShirt.getPrice(),
    customizedTShirt.getName()
);