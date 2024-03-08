/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MyDatabaseFunction } from "./database/myDatabaseFunction";
import { myDatabaseClassic as myDatabaseFromModuleA } from './moduleA';

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Leo2', age: 39 });
myDatabaseClassic.add({ name: 'João2', age: 49 });
myDatabaseClassic.add({ name: 'José2', age: 59 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);