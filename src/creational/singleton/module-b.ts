import { MyDtabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic } from "./module-a";

const myDatabaseFromModuleA = MyDtabaseFunction;
myDatabaseFromModuleA.add({ name: 'Joao', age: 39 });
myDatabaseFromModuleA.add({ name: 'Ana', age: 60 });
myDatabaseFromModuleA.add({ name: 'Jonas', age: 21 });
myDatabaseFromModuleA.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);