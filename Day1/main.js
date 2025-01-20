//playgroud day1
const prompt = require("prompt-sync")();

// While loop

// let username = "root";
// let password = "sysadmin@SIT";
// let inppassword = null;
//1st style
// while(inppassword !== password || inppassword == 1){
//      inppassword = prompt("Give me your password")
// }
// console.log("hello User root");
// //2nd style
// do {
//   inppassword = prompt("Give me your password");
// } 
// while (inppassword !== password){
//   console.log("hello User root");
// }

//function with default value 
function plus(num1 = 1,num2){
    return num1 + num2
}
console.log(plus(10,11))

//arrow function
const arrowPlus = (a,b)=> {
   return a + b
}
console.log(arrowPlus(20,25))


//async await
//ไม่ได้สอน week1




