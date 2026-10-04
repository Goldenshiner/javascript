// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("Found 5");
    }
    console.log(element);
}


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and inner loop value: ${i}`);
    }
}


let heros = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

for (let i =0; i < heros.length; i++) {
    const hero = heros[i];
    console.log(hero);
}


// key words - break and continue

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("Found 5"); 
        continue;
    }
    console.log(i);
}


//while loop

let i = 1;
while (i <= 10) {
    console.log(`value of i is: ${i}`);
    i = i * 2;
}

let myHeros = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

let index = 1;
while (index < myHeros.length) {
    console.log(`hero no.${index} is ${myHeros[index]} `)
    index++;
}


//do while loop

let score = 500;
do { // atleast one time code will run.
   console.log(`Score is ${score}`); 
   score++;
} while (score < 500);


//for of loop

const arr =[1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
}


//map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

console.log(map);

for (const [key,value] of map) {
    console.log(key, '-', value);
}


const myObject = {
    game1:"BGMI",
    game2:"Roblox"
}

// for (const [key, value] of myObject){
//     //console.log(key,'-', value);  //object is not iterable using for of loop.
// }


//for in loop

const fullForm= {
    js: "javaScript",
    cpp: "c++",
    py:"pyhton",
    rb: "ruby"
}

for (const key in fullForm){
    console.log (key,"-",fullForm[key]);  
} 


const myArr =["ram", "shyam", "gopal", "madhav", "ravi"]

for (const val in myArr) { 
    console.log(val); //it will give you index numbers
    console.log(myArr[val]) //it will give you values
}


//for each loop //it doesn't return any value

const coding= ["java", "c", "javaScript", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe (item){
    console.log(item); 
}
coding.forEach(printMe)


const myCoding= [
   {
        language: "javascript",
        fileName: "js"
    },
   {
        language: "python",
        fileName: "py"
    },
   {
        language: "java",
        fileName: "java"
    } 
]

myCoding.forEach( (item) => {
    console.log(item.language);
    console.log(item.fileName);
})


const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const newNums= myNums.filter( (num) => num > 5)

console.log(newNums);


// const newNums= []

// myNums.forEach( (num) => {
//     if(num >5){
//       newNums.push(num)
//     }
// })

console.log(newNums);


const myNumbers= [1, 2, 3, 4, 5, 6, 7, 8]

const myNewNumbers= []
for(num of myNumbers) {
    num = num + 10;
    myNewNumbers.push(num)
}

console.log (myNewNumbers)

//maps

const NewNums = myNumbers.map((num) => num +10)
console.log(NewNums);


//array reduce method

const numbers=[1,2,7]

const total= numbers.reduce( (accumulator,currentValue) =>{
    console.log(`acc: ${accumulator} and curr: ${currentValue}`);
    return accumulator + currentValue
}, 0)

console.log(total);
