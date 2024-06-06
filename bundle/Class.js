"use strict";
class Person1 {
    constructor(n, c, p) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }
    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
}
const person1 = new Person1("Dani", true, 2);
console.log(person1.sayHello());
class Person2 {
    constructor(n, c, e, p) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }
    sayName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}
let fadil = new Person2("Fadil", true, "fadil@me.com", 2);
fadil.sayName();
class Programmer extends Person2 {
    constructor(name, isCool, email, pets, pL) {
        super(name, isCool, email, pets);
        this.programmingLanguages = pL;
    }
}
const askar = new Programmer("Askar", true, "askar@me.com", 2, ["JavaScript", "TypeScript", "C#"]);
askar.sayName();
