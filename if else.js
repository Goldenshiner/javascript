//if statement

if (true) {
    console.log("This is true"); // This will be executed
}

if (false) {
    console.log("This is false"); // This will not be executed
}

const temperature = 25;


//if else statement

if (false) {
    console.log("This is true"); // This will not be executed
}   
else {
    console.log("This is false"); // This will be executed
}


if (temperature > 30) {
    console.log("It's hot outside!"); // This will not be executed
}
else {
    console.log("It's not too hot outside."); // This will be executed
}

const balance = 769;

//if (balance > 500) console.log("testing"); // this is a single line if statement, it will be executed because the condition is true

if (balance < 500) {
    console.log("Your balance is low."); // This will not be executed
}else if (balance >= 500 && balance < 1000) {
    console.log("Your balance is moderate."); // This will not be executed
}else {
    console.log("Your balance is high."); // This will be executed
}


const isUserLoggedInFromGoogle = true;
const isUserLoggedInFromFacebook = false;
const debitCard = true;

if ((isUserLoggedInFromFacebook || isUserLoggedInFromGoogle) && debitCard) {
    console.log("You can make a purchase."); // This will be executed
}
else {
    console.log("You cannot make a purchase."); // This will not be executed
}
