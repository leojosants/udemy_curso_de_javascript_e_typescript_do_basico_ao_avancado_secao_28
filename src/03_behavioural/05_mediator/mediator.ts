/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Seller } from "./seller";
import { SellerProduct } from "./type/sellerProduct";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Mediator {

    private sellers: Seller[] = [];

    public addSeller(...sellers: Seller[]): void {
        sellers.forEach((seller) => {
            this.sellers.push(seller);
            seller.setMediator(this);
        });
    }

    public buy(id: string): SellerProduct | void {
        let product;

        console.log(`\nCompra de produto(s)`);

        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id);

            if (product) {
                console.log(` -> Id: ${product.id}, Nome: ${product.name}, Preço: R$${product.price}`);
                return;
            }
        }

        console.log(' -> Nenhum produto encontrado com o id:', id);
    }

    public showProducts(): void {
        this.sellers.forEach((seller) => {
            seller.showProducts()
        });
    }
}