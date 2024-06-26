// Explicite type --> with type annotation

// create variable with simple type (primitive)
// boolean, number, string, bigint, symbol

// String
let firstName: string;
firstName = "Muhammad Afif";
console.log(firstName);

let lastName = "Nur Azizi";
console.log(firstName, lastName);

// Number
let phi: number = 3.14;
console.log(phi+firstName); //this is not allowed in python

let age: number = 24;
console.log(age);

let isCollege = true;
let isMaried = false;

console.log({isCollege, isMaried});

let apaIni = {isCollege, isMaried};

console.log(apaIni.isCollege);

// Array

let sayur: string[] = ["Tomat", "Bayam", "Kangkung", "Seledri"]
console.log(sayur);

// Tuple -> array with fix size and known data types

let person: [string, number, boolean];
person = ["Grithaq", 26, true];
console.log(person);

// Object
// object di ts itu gimana? --> kayak dictionary python

let kucing :  {
    name: string;
    age: number;
    gender: string;
};

let kytHelmet: {
    name: string;
    size: string;
    price: number;
    color: string;
}

kucing = {
    name: "Mowly",
    age: 2,
    gender: "male"
}

kytHelmet = {
    name: "Kyt Helmet",
    size: "XL",
    price: 100000,
    color: "red"
}

console.log(kucing);
console.log(kytHelmet);


// interface

interface Person {
    name: string;
    age: number;
    gender: string;
}

let afif: Person ={
    name: "Afif",
    age: 26,
    gender: "male"
};

let olan: Person = {
    name: "olan",
    age: 27,
    gender: "male"
};

console.log({afif, olan});
console.info(olan)