export class Frame{
    frame: number;
    rollOne: number;
    rollTwo: number;
    score: number;

    constructor(frame: number, rollOne: number, rollTwo: number, score: number){
        this.frame = frame;
        this.rollOne = rollOne;
        this.rollTwo = rollTwo;
        this.score = score;
    }
    
about(): string{
        return `Frame = ${this.frame} | Roll 1 = ${this.rollOne} | Roll 2 = ${this.rollTwo} | Score= ${this.score}`;
    }
}