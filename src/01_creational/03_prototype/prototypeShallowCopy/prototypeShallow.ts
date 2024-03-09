/* - - - - - - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - - - - - - */
interface Prototype {
    clone(): Prototype;
}

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class Person implements Prototype {

    public name: string;
    public age: number;
    public addresses: Address[] = [];

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public clone(): this {
        const newObject = Object.create(this);
        return newObject;
    }
    public addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address {
    public street: string;
    public number: number;

    public constructor(street: string, number: number) {
        this.street = street;
        this.number = number;
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const addres1 = new Address('Av Brasil', 15);

const person1 = new Person('Leonardo', 39);
person1.addAddress(addres1);

const person2 = person1.clone();

person1.addresses[0].street='Rua B'
person2.name = 'Person2';

console.log();
console.log(person2);
console.log(person2.addresses);