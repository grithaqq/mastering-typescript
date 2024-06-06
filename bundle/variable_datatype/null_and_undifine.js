"use strict";
function sayHay(name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log("Hello");
    }
}
sayHay("Grithaq");
const kosong = undefined;
sayHay(kosong); //undefine value
sayHay(); //undefine
sayHay(null); //null value
