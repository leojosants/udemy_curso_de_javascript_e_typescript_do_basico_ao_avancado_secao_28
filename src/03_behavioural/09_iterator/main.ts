/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MyDataStructure } from './myDataStructure';
import { MyReverseIterator } from './myReverseIterator';

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('\nROUBADOS:', a, b);
console.log('\nEXECUTEI VÁRIAS COISAS E DEPOIS CHAMEI O ITERATOR');

const [c, ...rest] = dataStructure;

console.log();
console.log(c, rest);

for (const data of dataStructure) {
    console.log(data);
}

console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
    console.log(data);
}

console.log('\nAQUI PRECISO ZERAR O ITERATOR');

dataStructure.resetIterator();

for (const data of dataStructure) {
    console.log(data);
}
