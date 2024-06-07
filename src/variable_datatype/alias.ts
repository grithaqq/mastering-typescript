// Type Aliases

type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const p1: PersonObject = {
    name: "Danil",
    id: 1
};

const p2: PersonObject = {
    name: "Kentang",
    id: "2"
}

console.log({p1,p2})

type Cateogory = {
    id: string;
    name: string
}


type Product = {
    id: string;
    name: string;
    price: number;
    category: Cateogory
}

const product1: Product = {
    id: "1",
    name: "Syampo",
    price: 10000,
    category: {
        id: "a43",
        name: "Soap"
    }
}

console.log(product1)