export class Game{
    diceScore: number;
    numOfRolls: number;
    rollsAvg: number;
    totalScore: number;
    
    constructor(diceScore: number, numOfRolls: number, rollsAvg: number, totalScore: number){
        this.diceScore = diceScore;
        this.numOfRolls = numOfRolls;
        this.rollsAvg = rollsAvg;
        this.totalScore = totalScore;
    }
    
    about(): string{
        return `Roll Number: ${this.numOfRolls} | Dice Score: ${this.diceScore} | Average Score: ${this.rollsAvg} | Total Score: ${this.totalScore}`;
    }
}