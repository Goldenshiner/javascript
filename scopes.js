let a = 100 // global scoped variable
var c= 200

if (true) {
    let a =10 // block scoped variable
    const b = 20
    var c = 5000 
}

console.log(a); // 100 which is outside block as it is global variable because the value of a inside the block is not accessible outside of it as it is block scoped
console.log(b); // ReferenceError: b is not defined cuz it is block scoped
console.log(c); // 5000 which is accessible outside of the block as it is function scoped and var is function scoped so it can be accessed outside of the block and it access the updated value of c which is 5000.