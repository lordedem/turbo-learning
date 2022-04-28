const prompt = require("prompt-sync")();
const vowels = ["a", "e", "i", "o", "u"]
const string = prompt('Enter a string: ');

function countVowel(string) {
    let count = 0;

    for (let letter of string.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const result = countVowel(string);

console.log(result);