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

    public clone(): Person {
        const newObject = new Person(this.name, this.age);
        newObject.addresses = this.addresses.map((item) => item.clone());
        return newObject;
    }

    public addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address implements Prototype {
    public street: string;
    public number: number;

    public constructor(street: string, number: number) {
        this.street = street;
        this.number = number;
    }

    public clone(): Address {
        return new Address(this.street, this.number);
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const addres1 = new Address('Av Brasil', 15);

const person1 = new Person('Leonardo', 39);
person1.addAddress(addres1);

const person2 = person1.clone();

person1.addresses[0].street = 'Rua B'
person2.name = 'Person2';

console.log();
console.log(person2);
console.log(person2.addresses);

console.log();
console.log(person1);
console.log(person1.addresses);