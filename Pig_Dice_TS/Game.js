"use strict";
exports.__esModule = true;
var Game = /** @class */ (function () {
    function Game(diceScore, numOfRolls, rollsAvg, totalScore) {
        this.diceScore = diceScore;
        this.numOfRolls = numOfRolls;
        this.rollsAvg = rollsAvg;
        this.totalScore = totalScore;
    }
    Game.prototype.about = function () {
        return "Roll Number: " + this.numOfRolls + " | Dice Score: " + this.diceScore + " | Average Score: " + this.rollsAvg + " | Total Score: " + this.totalScore;
    };
    return Game;
}());
exports.Game = Game;
