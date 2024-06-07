import {Player, PlayerRole} from  "./interface"

interface People extends Player {
    sayHello(name?: string) : string;
}

const people1 : People = {
    name: "Grithaq",
    role: PlayerRole.MIDLE_BLOCK,
    hight: 164.2,
    weight: 51.9,
    sayHello: function (){
        return `Hello ${this.name}`
    }

}

console.log(people1);
console.log(people1.sayHello());