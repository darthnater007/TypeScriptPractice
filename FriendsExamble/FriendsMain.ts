import {Friend} from "./Friends";

    let f1: Friend =  new Friend("Craig", 605, "craig@totallynotadouche.com", "no");
    let f2: Friend =  new Friend("Matthew", 4, "matthew@poopsoup.com", "no");
    let f3: Friend =  new Friend("Jake", 52, "jake@jakerulez.com", "no");
    let f4: Friend =   new Friend("Tabitha", 29, "tabitha@superkewl.com", "no");
    let f5: Friend =   new Friend("Nate", 10000, "nate@thebestever.com", "yes");

let fArray: Friend[] = [f1,f2,f3,f4,f5];

    console.log("Name \t Age \t Email \t \t Best?");
for(let f of fArray){
    console.log(f.about());
}