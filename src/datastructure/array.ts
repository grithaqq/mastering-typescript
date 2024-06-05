// Array of numbers
let oddNUmbers: number[] = [1,3,5,7,9];
console.log(oddNUmbers);

// Array of string
let cities: string[] = ["Amsterdam", " London", "Istanbul"];
console.log(cities);

// Generic array type'
let names: Array<string> = ["Muhammad Afif", "Nur Azizi"];
console.log(names)

// Mixed typed array
let mixedArray: (string | number)[] = ["Dumbledore", 3, "Severus Snape"];
console.log(mixedArray);

// Accessing Elements

// access first element
console.log(oddNUmbers[0]);

// access second element
console.log(cities[1]);


// Modify Element
names[0] = "Grithaq";
names[1] = "ebysofyan"
names.push("ahadsenja");

console.log(names)

// Array methods
// push, pop, lenght, map
mixedArray.push("Kentang");
console.log(mixedArray)