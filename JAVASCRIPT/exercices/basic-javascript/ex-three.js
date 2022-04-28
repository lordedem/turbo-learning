const prompt = require("prompt-sync")();
const randomNumber = Math.ceil(Math.random() * 10);
const guessedNumber = prompt("Enter a number between 1 to 10: ");
    if (randomNumber == guessedNumber) {
        console.log("Good Work");
    } else {
        console.log("Not matched");
    }
console.log(randomNumber);
