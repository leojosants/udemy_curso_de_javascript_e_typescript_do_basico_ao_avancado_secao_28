/* - - - - - - - - - - - - - - - - - - - - objects - - - - - - - - - - - - - - - - - - - - */
const personPrototype = {
    firstName: 'Leonardo',
    lastName: 'Santos',
    age: 39,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());