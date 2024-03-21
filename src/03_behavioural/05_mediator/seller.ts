/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Mediator } from "./mediator";
import { SellerProduct } from "./type/sellerProduct";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Seller {

    private products: SellerProduct[] = [];
    private mediator?: Mediator;

    public showProducts(): void {
        console.log(`\nProdutos de cada vendendor`);

        this.products.forEach((product) => {
            console.log(` -> Id: ${product.id}, Nome: ${product.name}, Preço: R$${product.price}`)
        });
    }

    public addProduct(...products: SellerProduct[]): void {
        products.forEach((product) => {
            this.products.push(product);
        });
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    public sell(id: string): SellerProduct | void {
        const productIndex = this.products.findIndex((product) => {
            return product.id === id
        });

        if (productIndex === -1) {
            return;
        }

        const product = this.products.splice(productIndex, 1);

        return product[0];
    }
}