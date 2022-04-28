const array = ['slfrfs','sdveqrgefv','motbg','wd','knyhb'];
var stringLength = 0;
var longest;

for (let i = 0; i < array.length; i++) {
  if (array[i].length > stringLength) {
    stringLength = array[i].length;
    longest = array[i];
  }
}
console.log(longest);