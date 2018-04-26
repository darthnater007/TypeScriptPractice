import {Ball} from "./Ball";
import {BallService} from "./ball.service";

export class BallComponent {
ballSvc: BallService;
    
constructor(bSvc: BallService){
        this.ballSvc = new BallService();
        console.log("This component has been initialized");
    }
}

let ballComp: BallComponent = new BallComponent(new BallService());

let b1: Ball = new Ball("blue", "large");
ballComp.ballSvc.add(b1);
let b2: Ball = new Ball("black", "small");
ballComp.ballSvc.add(b2);
let b3: Ball = new Ball("green", "medium");
ballComp.ballSvc.add(b3);

for(let b of ballComp.ballSvc.list()){
    console.log(b.about());
}

console.log("remove an item");
ballComp.ballSvc.remove(b2.id);

for(let b of ballComp.ballSvc.list()){
    console.log(b.about());
}