"use strict";
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["REGULAR"] = 0] = "REGULAR";
    CustomerType[CustomerType["GOLD"] = 1] = "GOLD";
    CustomerType[CustomerType["PLATINUM"] = 2] = "PLATINUM";
})(CustomerType || (CustomerType = {}));
let customer1 = {
    id: 2341,
    name: "Grithaq",
    type: CustomerType.GOLD,
};
console.log(customer1);
var UserType;
(function (UserType) {
    UserType[UserType["SUPERUSER"] = 0] = "SUPERUSER";
    UserType[UserType["ADMIN"] = 1] = "ADMIN";
    UserType[UserType["MEMBER"] = 2] = "MEMBER";
})(UserType || (UserType = {}));
const account1 = {
    username: "grithaq",
    email: "grithaq@gmail.com",
    user_type: UserType.ADMIN
};
console.log(account1);
