"use strict";
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// for of loop
let arr = [10, 20, 30, 40];
for (var val of arr) {
    console.log(val);
}
// for in loop
let arr2 = [10, 20, 30, 40];
for (var index in arr2) {
    console.log(index);
    console.log(arr[index]);
}
let pets = new Set(["Cat", "Dog", "Hamster"]);
console.log(pets);
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
