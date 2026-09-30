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

function one(){
    const userName= "swarna"

    function two(){
        const website= "instagram"
        console.log(userName); // swarna which is accessible inside the function two as it is defined in the parent function one and it is accessible inside the child function two.
    }
    //console.log(website); // ReferenceError: wbsite is not defined which is not accessible outside of the function two as it is block scoped and it is defined inside the function two.

    two()
}  

one()

console.log (addOne(7)) //8 

function addOne(num){
    return num + 1
}

addTwo(5)//it will give error as i stored the function into a variable.

const addTwo= function(num){
    return num + 2
}

