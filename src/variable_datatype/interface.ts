// interface

interface Person {
    name: string;
    age: number;
    gender: string;
}

let afif: Person ={
    name: "Afif",
    age: 26,
    gender: "male"
};

let olan: Person = {
    name: "olan",
    age: 27,
    gender: "male"
};

console.log({afif, olan});
console.info(olan)

export enum PlayerRole {
    SETTER,
    OUTSIDE_HITTER,
    OPPOSITE_HITTER,
    LIBERO,
    MIDLE_BLOCK,
}


export interface Player {
    name: string,
    role: PlayerRole,
    hight: number,
    weight: number
}

const hinata: Player = {
    name: "Hinata Shoyo",
    role: PlayerRole.MIDLE_BLOCK,
    hight: 164.2,
    weight: 51.9
}

console.log({hinata})