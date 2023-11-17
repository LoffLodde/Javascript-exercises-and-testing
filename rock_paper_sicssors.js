const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;


while(wins < 3){

    const choise = prompt("Enter rock, paper or scissor: ");
    //Legg til mulighet til å avslutte. Under her.

    if(choise !== "rock" && choise !== "paper" && choise !== "scissor"){
    console.log("Please enter a valid choise");
    continue;
    };

    const choises = ["rock", "paper","scissor"];
    const radomIndex = Math.round(Math.random()*2);
    const theComputer = choises[radomIndex];

    console.log("The computer chose:", theComputer);

    if(theComputer === choise){
        console.log("Tie! Draw again.")
        ties++;
    } else if(
        (choise === "rock" && theComputer === "scissor") || 
        (choise === "paper" && theComputer === "rock") ||
        (choise === "scissor" && theComputer === "paper")
        ) {
            console.log("You won!");
            wins++;   
    } else {
        console.log("You lost!");
        losses++;
    }

}
