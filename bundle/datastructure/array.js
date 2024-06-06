"use strict";
// Array of numbers
let oddNUmbers = [1, 3, 5, 7, 9];
console.log(oddNUmbers);
// Array of string
let cities = ["Amsterdam", " London", "Istanbul"];
console.log(cities);
// Generic array type'
let names = ["Muhammad Afif", "Nur Azizi"];
console.log(names);
// Mixed typed array
let mixedArray = ["Dumbledore", 3, "Severus Snape"];
console.log(mixedArray);
// Accessing Elements
// access first element
console.log(oddNUmbers[0]);
// access second element
console.log(cities[1]);
// Modify Element
names[0] = "Grithaq";
names[1] = "ebysofyan";
names.push("ahadsenja");
console.log(names);
// Array methods
// push, pop, lenght, map
mixedArray.push("Kentang");
console.log(`mixedArray after add kentang : ${mixedArray}`);
console.log(`mixedArray length: ${mixedArray.length}`);
console.log(`mixedArray after pop : ${mixedArray.pop()}`);
// Transforms each element of an array and creates a new array containing the results of applying a provided function to each element.
// The original array remains unchanged, and a new array with the transformed values is returned.
let angka = [1, 2, 3, 4, 5];
let doubledNumbers = angka.map(num => num * 2);
console.log(angka);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
let movies = ["Kungfu Panda", "Avengers", "John wick"];
let moviesDuplicated = movies.map(movie => movie + " 2.0");
console.log(movies);
console.log(moviesDuplicated);
// .forEach(): Iterates over each element in the array. Unlike the .map() method,
// .forEach() doesn't create a new array with transformed values; instead, it executes a provided function once for each element in the array.
movies.forEach(movie => console.log(movie));
// filter(): Creates a new array with all elements that pass a provided test implemented by the provided function.
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);
console.log(numbers1);
