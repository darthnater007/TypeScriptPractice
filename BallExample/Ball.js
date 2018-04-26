"use strict";
exports.__esModule = true;
var Ball = /** @class */ (function () {
    function Ball(color, size) {
        this.color = color;
        this.size = size;
    }
    Ball.prototype.about = function () {
        return "Id= " + this.id + " | Color= " + this.color + " | Size= " + this.size;
    };
    return Ball;
}());
exports.Ball = Ball;
