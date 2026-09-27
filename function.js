function sayMyName(){
    console.log("s");
    console.log("w")
    console.log("a")
    console.log("r")
    console.log("n")
    console.log("a")
}

sayMyName()

function addNumbers(num1, num2){
    console.log (num1 + num2)
}

addNumbers(5, 10) //15

function addTwoNumbers(num1, num2){
   return (num1 + num2) //after return the function will stop executing and return the value and no more code will be executed after return.
}

result= addTwoNumbers(5, 17) 
console.log("result is:", result); //result is: 22

function loginUserMessage(username= "user"){
    if(!username){
      console.log("please enter a username");
    }
    else
        return `welcome back ${username}`
}

console.log(loginUserMessage()) //welcome back user console.log(loginUserMessage("swarna")) //welcome back swarna

function calculateCartPrice(...num1){ //... this is known as rest operator also . you can pass number of values as per your wish 
    return num1
}

console.log(calculateCartPrice(200,500,499)) //[ 200, 500, 499 ]

const user={
    userName: "swarna",
    price: 199
}

function handleObject(anyobject){ //add object to a function
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);   
}

handleObject(user)

const myNewArr= [200,300,500,700] //add array to a function

function returnSecondValue(getArray){
    return getArray[1]
}

console.log("second value of this array is:", returnSecondValue(myNewArr)); //300

