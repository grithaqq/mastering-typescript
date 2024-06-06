class Person1 {
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n: string, c: boolean, p:number){
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello(){
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }

}

const person1 = new Person1("Dani", true, 2);

console.log(person1.sayHello());


class Person2  {
    readonly name: string;
    private isCool: boolean;
    protected email: string;
    public pets: number;

    constructor(n: string, c:boolean, e:string, p:number){
        this.name = n;
        this.isCool=c;
        this.email=e;
        this.pets=p;
    }

    sayName(){
        console.log(`Your not Heisenberg, you're ${this.name}`)
    }
}

let fadil = new Person2("Fadil", true, "fadil@me.com", 2);
fadil.sayName();

class Programmer extends Person2 {
    programmingLanguages: string[];

    constructor(
        name: string,
        isCool: boolean,
        email: string,
        pets: number,
        pL:string[],
    ){
        super(name, isCool, email, pets);
        this.programmingLanguages=pL;
    }
}

const askar = new Programmer("Askar", true, "askar@me.com", 2, ["JavaScript", "TypeScript", "C#"]);
askar.sayName();

// Type Aliases

type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const p1: PersonObject = {
    name: "Danil",
    id: 1
};

const p2: PersonObject = {
    name: "Kentang",
    id: "2"
}

console.log({p1,p2})