//Dates

let myDate= new Date();
console.log(myDate);
console.log(myDate.getTime()); //1697050918820 this is in milliseconds since 1 jan 1970
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object

let myDate1= new Date(2005,11,2);
console.log(myDate1.toDateString()); //Fri Dec 02 2005

let myDate2= new Date("2005-12-02");
console.log(myDate2.toDateString()); //Fri Dec 02 2005

let myDate3= new Date(2005,11,2,19,33,30);
console.log(myDate3.toLocaleString()); //2/12/2005, 7:33:30 pm

let timeStamp= Date.now();
console.log(timeStamp); //1697050918820 this is in milliseconds since 1 jan 1970



