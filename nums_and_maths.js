//++++++++++++ nums ++++++++++++++

const score = 300
console.log(score);

const balance = new Number(100.4567);
console.log(balance);

console.log(balance.toString().length); //converted to string and the length is 8 .
console.log(balance.toFixed(2)) //now only shows upto 2 decimal places and round figure automatically.

const num = 1000000000

console.log(num.toLocaleString('en-IN')); //converts to Indian number format with commas.
console.log(num.toLocaleString('en-US')); //converts to US number format with commas.


//++++++++++++ maths ++++++++++++++

console.log(Math)
console.log(Math.abs(-5)); //absolute value of -5 is 5
console.log(Math.abs(5)); //absolute value of 5 is 5
console.log(Math.round(4.2)); //rounds up to the nearest integer
console.log(Math.ceil(4.1)); //upper bound of 4.1 is 5
console.log(Math.floor(4.8)); //lower bound of 4.8 is 4

console.log(Math.random()); //gives numbers between 0 and 1.
