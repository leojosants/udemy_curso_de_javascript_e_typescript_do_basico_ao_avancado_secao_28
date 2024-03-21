/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

/* - - - - - - - - - - - - - - - - - - - - function - - - - - - - - - - - - - - - - - - - - */
function generateIdString() {
    return Math.floor(Math.random() * 1000).toString();
}

function generatePrice(): number {
    return Number((Math.random() * 100).toFixed(2));
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

const ids = {
    1: generateIdString(),
    2: generateIdString(),
    3: generateIdString(),
    4: generateIdString(),
}

seller1.addProduct({
    id: ids[1],
    name: 'Product 1',
    price: generatePrice(),
});

seller1.addProduct({
    id: ids[2],
    name: 'Product 2',
    price: generatePrice(),
});

seller2.addProduct({
    id: ids[3],
    name: 'Product 3',
    price: generatePrice(),
});

seller2.addProduct({
    id: ids[4],
    name: 'Product 4',
    price: generatePrice(),
});

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);

buyer.viewProducts();
buyer.buy(ids[2]);
buyer.buy(ids[3]);
buyer.buy('99');
buyer.viewProducts();