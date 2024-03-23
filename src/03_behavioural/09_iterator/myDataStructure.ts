/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MyIteratorProtocol } from './interfaces/myIteratorProtocol';
import { MyDefaultIterator } from './myDefaultIterator';

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class MyDataStructure {
    private _items: string[] = [];
    private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

    public addItem(...items: string[]): void {
        items.forEach((item) => {
            this._items.push(item);
        });
    }

    public get items(): string[] {
        return this._items;
    }

    public size(): number {
        return this.items.length;
    }

    public changeIterator(iterator: MyIteratorProtocol<string>): void {
        this.iterator = iterator;
    }

    public [Symbol.iterator](): MyIteratorProtocol<string> {
        return this.iterator;
    }

    public resetIterator(): void {
        this.iterator.reset();
    }
}