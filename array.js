const myArr= [0,1,2,3,4,5] //same tyoes of data and you can also add different types of data.

const myArr2= new Array (1,2,3,4)

console.log(myArr[2]); //2
console.log(myArr2[0]); //1

//Array methods

myArr.push(6)
myArr.pop()
myArr.unshift(9) //add element to first position
myArr.shift() //remove element from first position 
console.log(myArr);
console.log(myArr.includes(9)); //false cause array doesn't contain element 9
console.log(myArr.indexOf(2)); //index of element, if element is not exist then it will return -1

const newArr= myArr.join() //add all elements of myArr into newArr and convert it into string
console.log(newArr); //0,1,2,3,4,5
console.log(typeof(newArr)); //string

const myn1= myArr.slice(1,3)
console.log(myn1); //print from index 1 and 2 . it doesn't include the last index
console.log(myArr); //after slice it doesn't change the original array

const myn2= myArr.splice(1,3)
console.log(myn2); //include the 3rd index also
console.log(myArr); //after splice the elements that are include in splice are totally removed from the original array.

const myHeros= ["shaktiman", "naagraj"]
const marvelHeros= ["thor", "iron man", "captain amreica"]

const allHeros= myHeros.concat(marvelHeros) // for concat we need new array
console.log(allHeros); // [ 'shaktiman', 'naagraj', 'thor', 'iron man', 'captain amreica' ]

const allNewHeros= [...myHeros, ...marvelHeros]
console.log(allNewHeros);// [ 'shaktiman', 'naagraj', 'thor', 'iron man', 'captain amreica' ]. thsi is a altenative option of concat and this is called as spread.

myHeros.push(marvelHeros)
console.log(myHeros); //[ 'shaktiman', 'naagraj', [ 'thor', 'iron man', 'captain amreica' ] ]
console.log(myHeros[2][1]); //iron man

const anotherArr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr= anotherArr.flat(Infinity)
console.log(realAnotherArr); //[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("swarna")); //false
console.log(Array.from("swarna")); //[ 's', 'w', 'a', 'r', 'n', 'a' ]
console.log(Array.from({name: "swarna"})); 

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]



