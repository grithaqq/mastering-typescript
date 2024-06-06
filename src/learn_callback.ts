// Example 1
function doSomething(value:any){
    value()
}

doSomething(function(){
    console.log("hello");
})


// Example 2
function log(value: any){
    console.log(value);
}

function calculateSum(n1: number, n2: number, print: any){
    const z = n1 + n2
    print(z)
}

calculateSum(10, 20, log);