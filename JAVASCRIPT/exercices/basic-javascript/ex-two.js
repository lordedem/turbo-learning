const prompt = require("prompt-sync")();
const yearGiven = prompt("Enter a year: ");

function leapYear(yearGiven) {
    if ((yearGiven % 4 == 0 && yearGiven % 100 !== 0) || yearGiven % 400 == 0) {
     console.log(yearGiven + " is a Leap year");
    } 
    else {
     console.log(yearGiven + " isn't a Leap year");
  }
}

leapYear(yearGiven);
