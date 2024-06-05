"use strict";
// Example 1
function doSomething(value) {
    value();
}
doSomething(function () {
    console.log("hello");
});
// Example 2
function log(value) {
    console.log(value);
}
function calculateSum(n1, n2, print) {
    const z = n1 + n2;
    print(z);
}
calculateSum(10, 20, log);
