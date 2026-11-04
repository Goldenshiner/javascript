const user = {
    username: "JohnDoe",
    email: "example@gmail.com",
    loginCount: 8,

    getUserDetails: function() {
        return `Username: ${this.username}, Email: ${this.email}, Login Count: ${this.loginCount}`;
    }
}

console.log(user.getUserDetails()); 
