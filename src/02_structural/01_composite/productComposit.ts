/* - - - - - - - - - - - - - - - - - - - - abstract classes - - - - - - - - - - - - - - - - - - - - */
export abstract class ProductComponent {

    public abstract getPrice(): number;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public add(product: ProductComponent): void { }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public remove(product: ProductComponent): void { }
}

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ProductLeaf extends ProductComponent {
    public name: string;
    public price: number;

    public constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }
}

export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    public add(...products: ProductComponent[]): void {
        products.forEach(product => {
            this.children.push(product);
        });
    }

    public remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);

        if (productIndex !== -1) {
            this.children.splice(productIndex, 1);
        }
    }

    public getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const smartphone = new ProductLeaf('MotoG', 1_000);
const tShirt = new ProductLeaf('Lacost', 40);
const pen = new ProductLeaf('Bic', 1);

const productBox = new ProductComposite();
productBox.add(smartphone, tShirt, pen);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

productBox.add(anotherProductBox);
console.log(productBox);
console.log(productBox.getPrice());