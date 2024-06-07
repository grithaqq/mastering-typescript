function sayHay(name?: string | null){
    if (name){
        console.log(`Hello ${name}`)
    } else {
        console.log("Hello")
    }
}

sayHay("Grithaq");

const kosong: string | undefined = undefined
sayHay(kosong); //undefine value
sayHay(); //undefine
sayHay(null); //null value