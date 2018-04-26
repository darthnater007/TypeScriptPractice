import {Ball} from "./Ball";

let b1: Ball = new Ball(1, "blue", "large");
let b2: Ball = new Ball(2, "black", "small");
let b3: Ball = new Ball(3, "green", "medium");

let bArray: Ball[] = [b1,b2,b3];
for(let b of bArray){
    console.log(b.about());
}