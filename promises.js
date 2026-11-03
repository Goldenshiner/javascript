const promiseOne= new Promise(function(resolve,reject){
    //Do an async task like DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");  
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two is completed"); 
        resolve()
    }, 2000)
}).then(function(){
    console.log("promise two consumed");   
})



const promiseThree= new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "swarna", email: "example@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);   
})



const promiseFour= new Promise((resolve, reject) => {
    setTimeout(function(){
        let error= true;
        if (!error){
            resolve({username:"swarna", password: 1234})
        }else{
            reject('ERROR: Something went wrong')
        }
    },2000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log("The promise is either resolved or rejected");
})




const promiseFive= new Promise((resolve, reject) => {
    setTimeout(() =>{
        let error= true;
        if (!error){
            resolve({username:"javaScript", password: 1234})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response= await promiseFive
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()