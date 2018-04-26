 export class Friend{
    name: string;
    age: number;
    email: string;
    bestFriend: string;
    
constructor(name: string, age: number, email: string, bestFriend: string){
    this.name = name;
    this.age = age;
    this.email = email;
    this.bestFriend = bestFriend;
}
    
    about(): string{
        return `${this.name} \t ${this.age} \t ${this.email} \t \t ${this.bestFriend}`;
    }
}
