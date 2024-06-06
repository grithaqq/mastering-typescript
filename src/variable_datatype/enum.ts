enum CustomerType{
    REGULAR,
    GOLD,
    PLATINUM
}

type Customer = {
    id: number;
    name: string;
    type: CustomerType
}

let customer1 : Customer = {
    id: 2341,
    name: "Grithaq",
    type: CustomerType.GOLD,
}

console.log(customer1)


enum UserType {
    SUPERUSER,
    ADMIN,
    MEMBER
}

type Account = {
    username: string,
    email: string,
    user_type: UserType
}

const account1: Account = {
    username: "grithaq",
    email: "grithaq@gmail.com",
    user_type: UserType.ADMIN
}

console.log(account1)


// Enum string value
enum AnimalType {
    MAMAL = "MAMAL",
    INSECT = "INSECT",
    POULTRY = "POULTRY",
    FISH = "FISH"
}

enum AnimalGender {
    MALE,
    FEMALE
}

type Animal = {
    name: string,
    gender: AnimalGender,
    type: AnimalType
}


let animal1 = {
    name: "Dolphin",
    gender: AnimalGender.MALE,
    type: AnimalType.MAMAL
}

console.log({animal1})