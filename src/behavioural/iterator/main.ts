import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();

dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('ROUBADOS:', a, b, '\n');
console.log('EXECUTEI VÁRIAS COISAS E DEPOIS USEI O ITERATOR');

const [c, ...rest] = dataStructure;

console.log(c, rest);

dataStructure.resetIterator();

for (const data of dataStructure) {
    console.log(data);
}

console.log('- - - - - * - - - - ');

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
    console.log(data);
}

console.log('- - - - - * - - - - ');