const user={
    username:"John",
    price:100,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, your price is ${this.price}`); //this refers to the current object
    }
}

user.welcomeMessage();
user.username= "swarna";
user.welcomeMessage();

function chai(){
    let username="swarna"
    console.log(this.username); //this refers to the global object
}

chai(); //undefined

const chai2= () => {
    let username="swarna"
    console.log(chai2.username); //this refers to the global object
}

chai2() //undefined


const addTwo= (num1, num2) => { //basic way to declare arrow function
    return num1 + num2
}

console.log(addTwo(3,7)); //10


const sumTwo= (num1, num2) =>  num1 + num2 //another way of declaring arrow function

console.log(sumTwo(3,7)); //10

const plusTwo= (num1, num2) => ({username: "swarna"}) //to show any object you have to declare it using parenthisis.

console.log(plusTwo(3,7)); //{ username: 'swarna' }

