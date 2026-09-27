//pemitive data types use stack memory (you get a copy of data means if you change something in data it will change the copy value and doesn't affect original value) and non-premitive data types use heap memory (it will give reference of data means original value also changed).

let name = "swarna"

let anotherName = name //copying the value of name to anotherName

anotherName = "sonam" //changing the value of anotherName

console.log(name) //swarna
console.log(anotherName) //sonam


let userOne= {
    email: "swarna@gmail.com",
    upi: "swarna@okhdfcbank"
}            //this is a object which is a non-premitive data type and it is stored in heap memory

let userTwo= userOne //copying the reference of userOne to userTwo

userTwo.email= "sonam@gmail.com" //changing the value of email in userTwo

console.log(userOne.email) //sonam@gmail.com
console.log(userTwo.email) //sonam@gmail.com

