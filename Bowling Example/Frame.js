"use strict";
exports.__esModule = true;
var Frame = /** @class */ (function () {
    function Frame(frame, rollOne, rollTwo, score) {
        this.frame = frame;
        this.rollOne = rollOne;
        this.rollTwo = rollTwo;
        this.score = score;
    }
    Frame.prototype.about = function () {
        return "Frame = " + this.frame + " | Roll 1 = " + this.rollOne + " | Roll 2 = " + this.rollTwo + " | Score= " + this.score;
    };
    return Frame;
}());
exports.Frame = Frame;
