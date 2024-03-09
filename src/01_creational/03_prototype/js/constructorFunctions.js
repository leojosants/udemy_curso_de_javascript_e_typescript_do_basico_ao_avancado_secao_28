/* - - - - - - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - - - - - - */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function SubPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'teste';
}

/* - - - - - - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - - - - - - */
const personPrototype = {
    firstName: 'Leonardo',
    lastName: 'Santos',
    age: 39,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

/* - - - - - - - - - - - - - - - - - - - - prototypes - - - - - - - - - - - - - - - - - - - - */
Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

SubPerson.prototype = Object.create(Person.prototype);
Person.prototype.constructor = SubPerson;

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const person1 = new Person('leonardo', 'Santos', 39);
console.log();
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('João', 'Santos', 39);
console.log();
console.log(person2);
console.log(person2.fullName());