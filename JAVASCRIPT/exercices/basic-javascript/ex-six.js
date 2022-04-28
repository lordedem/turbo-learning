let arr = [0, 65, 13, 34, 565, 24, 45, 6, 734, 4, 20];
let biggest = Math.max(...arr);

arr.forEach((element) => {
    arr.splice(0, element, biggest);
});

console.log (arr = arr.filter((num) => num == biggest));
