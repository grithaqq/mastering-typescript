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