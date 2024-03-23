/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MyIteratorProtocol } from "./interfaces/myIteratorProtocol";
import { MyDataStructure } from "./myDataStructure";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class MyReverseIterator implements MyIteratorProtocol<string> {
    private readonly dataStructure: MyDataStructure;
    private index = 0;

    public constructor(dataStructure: MyDataStructure) {
        this.dataStructure = dataStructure;
        this.index = this.dataStructure.size();
    }

    public reset(): void {
        this.index = this.dataStructure.size();
    }

    public next(): IteratorResult<string> {
        this.index--;
        const returnValue = this.makeValue(this.dataStructure.items[this.index]);
        returnValue.done = this.index < 0;
        return returnValue;
    }

    private makeValue(value: string): IteratorResult<string> {
        return {
            value: value,
            done: false,
        }
    }
}