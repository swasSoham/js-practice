//Primitives

//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 200

const bigNumber = 45454545454n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["Aba", "Daba", "Chaaba"];

let myObj = {
    name: "Swastik",
    age: 22
}
const myFunction = function(){
    console.log("Hello World");
}


//Reference (Non-primitive)
//Arrays, Objects, Functions

//undefined => undefined
//null => object
//boolean => boolean
//number => number
//string => string
//object(native and does not implement [Call]) : object
//object(native or host and does implenment[Call] : function
//object(host and does not implement[Call]) : Implenmentation defined except may not be "undefined", "boolean", "number" or "string"


console.log(typeof bigNumber);



console.log(typeof anotherId);

// Stack(Primitive), Heap(Non-primitive)

let myName ={
    email: "sss@gmail.com",
    home: "shahad"
}
let otherName = myName

otherName.home = "Kalyan"

console.log(myName.home);
console.log(otherName.home);

console.log(otherName.email);




