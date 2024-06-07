interface AddFunction {
    (value1: number, value2: number): number
}

const add_two_number: AddFunction = (value1: number, value2: number): number => {
    return value1 + value2
}

interface VelocityFunction {
    (displacement: number, time: number): number
}

const v: VelocityFunction = (displacement: number, time: number) : number => {
    return displacement/time
}

console.log(add_two_number(1,2))
console.log(v(10,3))