"use strict";
exports.__esModule = true;
var Frame_1 = require("./Frame");
//make 10 frame objects and set all fields to 0
var f1 = new Frame_1.Frame(0, 0, 0, 0);
var f2 = new Frame_1.Frame(0, 0, 0, 0);
var f3 = new Frame_1.Frame(0, 0, 0, 0);
var f4 = new Frame_1.Frame(0, 0, 0, 0);
var f5 = new Frame_1.Frame(0, 0, 0, 0);
var f6 = new Frame_1.Frame(0, 0, 0, 0);
var f7 = new Frame_1.Frame(0, 0, 0, 0);
var f8 = new Frame_1.Frame(0, 0, 0, 0);
var f9 = new Frame_1.Frame(0, 0, 0, 0);
var f10 = new Frame_1.Frame(0, 0, 0, 0);
//make array of frames and set variables for game
var fArray = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
var frameNum = 0;
var totalScore = 0;
var storeStrikesAndSpares = 0;
//Start Game-- iterates through fArray and changes field values
console.log("Bowling Game:");
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var f = fArray_1[_i];
    frameNum++;
    f.frame = frameNum;
    var pinsLeft = 10;
    f.rollOne = getRandomInt(pinsLeft);
    if (f.rollOne != 10) {
        pinsLeft -= f.rollOne;
        f.rollTwo = getRandomInt(pinsLeft);
    }
    else {
        f.rollTwo = 0;
    }
    f.score += f.rollOne + f.rollTwo;
}
//Iterate trhough fArray again to calculate scores
for (var _a = 0, fArray_2 = fArray; _a < fArray_2.length; _a++) {
    var f = fArray_2[_a];
    if (f.rollOne == 10 && f.frame <= 8) {
        f.score += fArray[f.frame].score + fArray[f.frame + 1].score;
    }
    else if (f.rollOne + f.rollTwo == 10 && f.frame <= 9) {
        f.score += fArray[f.frame].score;
    }
    else {
        f.score = f.rollOne + f.rollTwo;
    }
    totalScore += f.score;
    console.log(f.about());
    console.log("\nTotal Score: " + totalScore + "\n");
}
//return a random int between 0 and # of Pins left
function getRandomInt(pinsLeft) {
    return Math.floor(Math.random() * (pinsLeft + 1));
}
