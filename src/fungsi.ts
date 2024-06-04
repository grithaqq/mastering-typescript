// function circle(diam: number): string {
//     return "The circumference is " + Math.PI * diam
// };

// console.log(circle(10))


// Using explicit typing
const circle: Function = (diam: number): string => {
    return "The circumference is " + Math.PI * diam
};

const velocity: Function = (spacing: number, time: number): number => {
    return spacing / time
};

// how to union used
const add: Function = (a: number, b:number, c?: number|string) => {
    console.log(c);
    return a+b;
};

console.log(circle(10))
console.log(`The velocity is ${velocity(10, 5)}`)
console.log(add(4,5, "9"));