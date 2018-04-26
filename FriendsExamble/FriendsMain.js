"use strict";
exports.__esModule = true;
var Friends_1 = require("./Friends");
var f1 = new Friends_1.Friend("Craig", 605, "craig@totallynotadouche.com", "no");
var f2 = new Friends_1.Friend("Matthew", 4, "matthew@poopsoup.com", "no");
var f3 = new Friends_1.Friend("Jake", 52, "jake@jakerulez.com", "no");
var f4 = new Friends_1.Friend("Tabitha", 29, "tabitha@superkewl.com", "no");
var f5 = new Friends_1.Friend("Nate", 10000, "nate@thebestever.com", "yes");
var fArray = [f1, f2, f3, f4, f5];
console.log("Name \t Age \t Email \t \t Best?");
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var f = fArray_1[_i];
    console.log(f.about());
}
