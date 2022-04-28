const prompt = require("prompt-sync")();
const string = prompt("Enter a string: ");

function addPy(string) {
  if (string.startsWith("Py")) {
    return string;
  }
  return "Py" + string.toLowerCase();
}

console.log(addPy(string));