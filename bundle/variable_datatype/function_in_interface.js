"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
const people1 = {
    name: "Grithaq",
    role: interface_1.PlayerRole.MIDLE_BLOCK,
    hight: 164.2,
    weight: 51.9,
    sayHello: function () {
        return `Hello ${this.name}`;
    }
};
console.log(people1);
console.log(people1.sayHello());
