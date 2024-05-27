let myDate = new Date()
console.log(myDate);
console.log( typeof myDate);

//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toString());
//console.log(myDate.toTimeString());
//console.log(myDate.toUTCString());
//console.log(myDate.getTimezoneOffset());

let myDates = new Date(2024, 1, 22)
console.log(myDates.toDateString());

let myDatestime = new Date(2024, 1, 22, 23, 45, 50)
console.log(myDatestime.toLocaleString());

let myCreatedDate = new Date("06-22-2024")
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));










