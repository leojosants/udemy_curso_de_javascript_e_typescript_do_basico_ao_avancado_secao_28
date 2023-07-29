import { MyDtabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDtabaseFunction;
myDatabaseClassic.add({ name: 'Leonardo', age: 39 });
myDatabaseClassic.add({ name: 'Dalva', age: 60 });
myDatabaseClassic.add({ name: 'Jennifer', age: 21 });
myDatabaseClassic.show();

export { myDatabaseClassic }