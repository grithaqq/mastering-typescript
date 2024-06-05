"use strict";
let list_items = [
    { name: "Jolly Tisue", price: 10 },
    { name: "Energen", price: 5 },
    { name: "Indomie Original", price: 5 },
    { name: "Sari roti", price: 5 },
];
// calculate all items price
let items = [];
let total = 0;
for (var item of list_items) {
    items.push(item.name);
    total += item.price;
}
console.log(`Your list items : ${items}`);
console.log(`total: $${total}`);
console.log('----------------------------');
