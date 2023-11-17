const prompt = require("prompt-sync")();

//Koden under vil generere et rundt tall mellom 0 - 100
//Dersom jeg ønsker f.eks. 10 - 20 ville koden sett slik ut:     const target = Math.round(Math.random() * 90);
//Jeg kunne også brukt Math.floor(Math.random() * 101);
const target = Math.round(Math.random() * 100);

let guesses = 0;

while(guesses < 6){
    guesses++;
    //Number() konventerer svaret ditt til tall. Hadde jeg ikke konvertert svaret til tall, ville jeg ikke kunne sammenligne ditt gjett med maskinen sitt gjett.
    //Vet ikke om du egentlig har lov til å gjøre det slik.
    const yourguess = Number(prompt("Guess a number between 0-100: "));

    if (yourguess > target) {
        console.log("You guessed too high.");
    } else if (yourguess < target) {
        console.log("You guessed too low.");
    } else {
        console.log("You guessed correct!");
        break;
    }

    //Hvis guesses (antall gjett) er lik 6 og yourguesses (dine gjett) ikke er det samme som target. 
    //Du tapte sendes til konsollen. 
    if( guesses === 6 && yourguess !== target){
        console.log("You lost! You didn't manage to guess the correct number within 6 guesses.");

        let playAgain = prompt("Would you like to play again? (y/n): ").toLocaleLowerCase();
        
        //Hvis playAgain ikke er "y" og playAgain ikke er "n".
        while(playAgain !== "y" && playAgain !== "n"){
            console.log("Please enter a valid answer!");
            playAgain = prompt("Would you like to play again? (y/n): ").toLocaleLowerCase();
        }

        if(playAgain === "y"){
            guesses = 0;
            continue;
        } else { 
            break;
        }
    }
}

console.log(`You guessed the number in ${guesses} tries`);
