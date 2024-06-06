"use strict";
// interface
let afif = {
    name: "Afif",
    age: 26,
    gender: "male"
};
let olan = {
    name: "olan",
    age: 27,
    gender: "male"
};
console.log({ afif, olan });
console.info(olan);
var PlayerRole;
(function (PlayerRole) {
    PlayerRole[PlayerRole["SETTER"] = 0] = "SETTER";
    PlayerRole[PlayerRole["OUTSIDE_HITTER"] = 1] = "OUTSIDE_HITTER";
    PlayerRole[PlayerRole["OPPOSITE_HITTER"] = 2] = "OPPOSITE_HITTER";
    PlayerRole[PlayerRole["LIBERO"] = 3] = "LIBERO";
    PlayerRole[PlayerRole["MIDLE_BLOCK"] = 4] = "MIDLE_BLOCK";
})(PlayerRole || (PlayerRole = {}));
const hinata = {
    name: "Hinata Shoyo",
    role: PlayerRole.MIDLE_BLOCK,
    hight: 164.2,
    weight: 51.9
};
console.log({ hinata });
