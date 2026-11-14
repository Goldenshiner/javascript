function multiplyby5(num) {
    return num * 5;
}

multiplyby5.power = 2;

console.log(multiplyby5(4)); // Output: 20
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

//prototype is an object that is associated with every function and object in JavaScript. It allows you to add properties and methods to functions and objects. In this case, multiplyby5.prototype is an empty object because we haven't added any properties or methods to it yet.

//how too add functions to an object using prototype

const myObject = {
    name: "swarna",
    age: 25
};

const myObject2 = {
    name: "John",
    age: 30
};

Object.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

myObject.greet(); // Output: Hello, my name is swarna and I am 25 years old.

myObject2.greet(); // Output: Hello, my name is John and I am 30 years old.