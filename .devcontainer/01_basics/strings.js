const names = "Swastik"
const age = 23

 console.log(names  +  age + " years");

 console.log(`Hello, My name is ${names} and my age is ${age} years.`);

 const gameName = new String('pubg')
 
 console.log(gameName[2]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());


 const newString = gameName.substring(0,2)
 console.log(newString);
 //in substring , cant use negative 

 const anotherString = gameName.slice(-4, 1)
 console.log(anotherString);
 //in slice, can give negative


 const newStrings = "    soham    "
 console.log(newStrings);
 console.log(newStrings.trim());

 const url = "https://sahuswastik/ss%20sahu"

 console.log(url.replace('%20', '-'))
 console.log(url.includes('sas'))