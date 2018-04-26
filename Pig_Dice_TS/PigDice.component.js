"use strict";
exports.__esModule = true;
var Game_1 = require("./Game");
var game = new Game_1.Game(0, 0, 0, 0);
var rollNum = 0;
console.log("Welcome to the Pig Dice App");
while (game.diceScore != 1) {
    rollNum++;
    game.numOfRolls = rollNum;
    game.diceScore = rollDice();
    if (game.diceScore != 1) {
        game.totalScore += game.diceScore;
        game.rollsAvg = game.totalScore / game.numOfRolls;
        console.log(game.about());
    }
    else {
        console.log(getWinString(game));
    }
}
function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}
function getWinString(game) {
    return "You Won!!!\n Total Score: " + game.totalScore + "\n Number of Rolls: " + game.numOfRolls + "\n Avg Rolls: " + game.rollsAvg + "\n Thanks For Playing!!";
}
