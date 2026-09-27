//singleton- when object declare using constructor then singleton form.

const tinderUser= new Object()

tinderUser.id= "123swa"
tinderUser.name= "swarna"
tinderUser.isLoggedIn= false

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123swa', 'swarna', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123swa' ], [ 'name', 'swarna' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true


const regularUser= new Object()

regularUser.email= "swarna@gmail.com"
regularUser.fullName={
    userName: {
        firstName: "swarna",
        lastName: "sahoo"
    }
}

console.log(regularUser.fullName.userName.firstName); //swarna

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}

const obj3= Object.assign({},obj1,obj2) //combine multiple objects.

console.log(obj3);

const obj4= {...obj1, ...obj2} //spread technique to combine objects. 

console.log(obj4);

const users= [
    {
        id:1,
        email: "random1@gmail.com"
    },
    {
        id:2,
        email: "random2@gmail.com"
    },
    {
        id:3,
        email: "random3@gmail.com"
    }
]   

console.log(users[1].email) //random2@gmail.com
console.log(users);


// object literals (type of object declaration)

 const mySym= Symbol("key1")

const user= {
    name: "swarna",
    email: "sonam@gmail.com",
    [mySym]: "key1", //use square brackets to define symbol in an object.
    age: 21,
    isLoggedIn: false,
    lastLoginDays: ["monday","friday"]
}

console.log(user.name); //swarna
console.log(user["name"]); //swarna
console.log(user[mySym]); //key1

user.email= "swarna@gmail.com"
console.log(user.email); //swarna@gmail.com

Object.freeze(user) //now values of object user will not change as you freeze it and if you change it then also it will show you the previous data.
user.email= "sonam@gmail.com"
console.log(user.email); //swarna@gmail.com

// user.greeting= function(){
//     console.log(`Hello ${this.name}`)
// }

// console.log(user.greeting()); //Hello swarna

//Destructuring
const course= {
    courseName: "javascript",
    price: 999,
    instructor: "swarna"
}

const{instructor} = course

console.log(instructor); //swarna

//JSON API 

{
    "name": "swarna",
    "course": "javascript",
    "price": "free"
}

[
    {},
    {},
    {}
]



