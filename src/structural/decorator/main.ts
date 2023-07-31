import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const tShitWithStamp = new ProductStampDecorator(tShirt);
const tShitStampFrontAndBack = new ProductStampDecorator(tShitWithStamp);
const tShirtCutomized = new ProductCustomizationDecorator(tShitStampFrontAndBack);

console.log(tShirt.getName());
console.log(tShirt.getPrice());

console.log(tShitWithStamp.getName());
console.log(tShitWithStamp.getPrice());

console.log(tShitStampFrontAndBack.getName());
console.log(tShitStampFrontAndBack.getPrice());

console.log(tShirtCutomized.getName());
console.log(tShirtCutomized.getPrice());