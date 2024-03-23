/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MyIteratorProtocol } from "./interfaces/myIteratorProtocol";
import { MyDataStructure } from "./myDataStructure";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */export class MyDefaultIterator implements MyIteratorProtocol<string> {
    private readonly dataStructure: MyDataStructure;
    private index = 0;

    public constructor(dataStructure: MyDataStructure) {
        this.dataStructure = dataStructure;
    }

    public reset(): void {
        this.index = 0;
    }

    public next(): IteratorResult<string> {
        const returnValue = this.makeValue(this.dataStructure.items[this.index]);
        returnValue.done = this.index >= this.dataStructure.size();
        this.index++;
        return returnValue;
    }

    private makeValue(value: string): IteratorResult<string> {
        return {
            value: value,
            done: false,
        }
    }
}