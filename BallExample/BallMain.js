"use strict";
exports.__esModule = true;
var Ball_1 = require("./Ball");
var b1 = new Ball_1.Ball(1, "blue", "large");
var b2 = new Ball_1.Ball(2, "black", "small");
var b3 = new Ball_1.Ball(3, "green", "medium");
var bArray = [b1, b2, b3];
for (var _i = 0, bArray_1 = bArray; _i < bArray_1.length; _i++) {
    var b = bArray_1[_i];
    console.log(b.about());
}
