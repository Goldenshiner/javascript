//Falsy values

//false, 0, -0, 0n, "", null, undefined, NaN

//Truthy values

//true, {}, [], 1, -1, "0", "false", new Date(), -Infinity, Infinity, 3.14, -3.14, 42n

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) { // Check if the object is empty
    console.log("The object is empty");
} else {
    console.log("The object is not empty");
}

//Nullish coalescing opearator (??): null and undefined.

let val1;
val1 = null ?? 10 // val1 will be 10 because null is nullish

let val2;
val2 = undefined ?? 20 // val2 will be 20 because undefined is nullish

let val3;
val3 = 0 ?? 30 // val3 will be 0 because 0 is not nullish

console.log(val1); // Output: 10
console.log(val2); // Output: 20
console.log(val3); // Output: 0

//ternary operator: condition ? exprIfTrue : exprIfFalse

const iceTeaPrice = 100;

iceTeaPrice >= 70 ? console.log("The price is high") : console.log("The price is low"); // Output: The price is high