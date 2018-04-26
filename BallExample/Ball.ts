export class Ball {
    id: number;
    color: string;
    size: string;
    
    constructor(color: string, size: string)
    {
        this.color = color;
        this.size = size;
    }
    
    about():string{
        return `Id= ${this.id} | Color= ${this.color} | Size= ${this.size}`;
    }
}