//Laster inn modulen eller pakken. Så lagres den i variabelen (prompt), men kan kalles noe annet også. Samma det. 
const prompt = require("prompt-sync")()

console.log("Welcome to this awsome quis!");

let correctAnswer = 0;
let totalQuestions = 3;

const correctFeedback = ["You got it correct!", "Good Job!","Nice Work!", "Perfect!", "Excellent!" ]
const getRandome = correctFeedback[Math.floor(Math.random()* correctFeedback.length)]

const quiestion1 = prompt("What is New Zealand's national anima?");
const answer1 ="KIWI";

if (quiestion1.toUpperCase() === answer1) {
    console.log(getRandome);
    correctAnswer +=1; //Metode 1 for å legge til 1. 
} else {
    console.log("Wrong answer.")
}

const quiestion2 = prompt("What is the name of Norways capital?");
const answer2 ="OSLO";

if (quiestion2.toUpperCase() === answer2) {
    console.log(getRandome);
    correctAnswer++; //Metode 2 for å legge til 1.
} else {
    console.log("Wrong answer.")
}

const quiestion3 = prompt("On what side of the road is mandatory to drive on in england?");
const answer3 ="LEFT";

if (quiestion3.toUpperCase() === answer3) {
    console.log(getRandome);
    correctAnswer = correctAnswer + 1; //Metode 3 for å legge til 1.
} else {
    console.log("Wrong answer.")
}

let percentage = correctAnswer/totalQuestions * 100;
//Eller gjort slik: let percentage = Math.round((correctAnswer/totalQuestions) * 100);

console.log(`You got ${correctAnswer} out of ${totalQuestions} quiestions.`);
console.log(`Your score was ${percentage}%`);
//Kunne også gjort det på denne måten: console.log("Your score was", percentage.toString() + "%")