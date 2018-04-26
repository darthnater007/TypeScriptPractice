import {Frame} from "./Frame";
    //make 10 frame objects and set all fields to 0
    let f1: Frame = new Frame(0,0,0,0);
    let f2: Frame = new Frame(0,0,0,0);
    let f3: Frame = new Frame(0,0,0,0);
    let f4: Frame = new Frame(0,0,0,0);
    let f5: Frame = new Frame(0,0,0,0);
    let f6: Frame = new Frame(0,0,0,0);
    let f7: Frame = new Frame(0,0,0,0);
    let f8: Frame = new Frame(0,0,0,0);
    let f9: Frame = new Frame(0,0,0,0);
    let f10: Frame = new Frame(0,0,0,0);
 //make array of frames and set variables for game
let fArray: Frame[] = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10];
let frameNum: number = 0;
let totalScore: number = 0;
let storeStrikesAndSpares: number = 0;
//Start Game-- iterates through fArray and changes field values
console.log("Bowling Game:");
for(let f of fArray){
    frameNum ++;
    f.frame = frameNum;
    let pinsLeft : number = 10;
    f.rollOne = getRandomInt(pinsLeft);
    if(f.rollOne != 10){
        pinsLeft -= f.rollOne;
        f.rollTwo = getRandomInt(pinsLeft);
    }else{
        f.rollTwo = 0;
    }
    f.score = f.rollOne + f.rollTwo;
}
//Iterate trhough fArray again to calculate scores
for(let f of fArray){
    if(f.rollOne == 10 && f.frame <= 8){ 
        f.score +=  fArray[f.frame].score + fArray[f.frame + 1].score;
    }else if(f.rollOne + f.rollTwo == 10 && f.frame <= 9){
        f.score += fArray[f.frame].score;
    }else{
        f.score = f.rollOne + f.rollTwo;
    }
        totalScore += f.score;
        console.log(f.about());
        console.log(`\nTotal Score: ${totalScore}\n`);
}

//return a random int between 0 and # of Pins left
function getRandomInt(pinsLeft: number): number {
        return Math.floor(Math.random() * (pinsLeft + 1));
}