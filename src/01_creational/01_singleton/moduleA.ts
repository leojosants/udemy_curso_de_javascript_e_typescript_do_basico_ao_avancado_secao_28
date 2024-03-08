/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MyDatabaseFunction } from "./database/myDatabaseFunction";

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Leo', age: 39 });
myDatabaseClassic.add({ name: 'João', age: 49 });
myDatabaseClassic.add({ name: 'José', age: 59 });

export { myDatabaseClassic };