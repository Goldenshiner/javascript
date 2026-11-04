//object literal
const user = {
    username: "JohnDoe",
    email: "example@gmail.com",
    loginCount: 8,

    getUserDetails: function() {
        return `Username: ${this.username}, Email: ${this.email}, Login Count: ${this.loginCount}`;
    }
}

console.log(user.getUserDetails()); 


//constructor function to create user objects
function User(username, loginCount) {
    this.username = username;
    this.loginCount = loginCount;
    
    this.welcomeUser = function() {
        return (`Welcome ${this.username}`);
    } 

    return this; // this is not necessary as the new object is returned automatically when using the new keyword
}

const userOne = new User("Alice", 5); 
const userTwo = new User("Bob", 10);
console.log(userOne)

//new keyword creates a new and empty object and sets the value of this to that object. It does not return anything, so the return statement is not necessary. The new object is returned automatically.