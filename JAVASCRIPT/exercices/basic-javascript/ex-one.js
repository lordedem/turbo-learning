const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const today = new Date();
let hours = today.getHours()
const AmOrPm = (hours >= 12) ? 'PM' : 'AM';
hours = (hours % 12) || 12;

console.log("Today is: "+ day[today.getDay()] );
console.log("Current time is : "+ hours +" "+ AmOrPm+ " : "+ today.getMinutes()+" : "+ today.getSeconds());
