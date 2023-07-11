// // function factorial(values){
// //     for(let i = values; i > 0; i--){
// //         answer *= i;
// //     }
// //     return answer;
// // }
// // function sum(values){
// //     return values + 25;
// // }
// //ARROW FUNCTION  ... anonymous functions are function that dont have variable names.
// // let sum = ()=> 5 + 8;

// function subtract(func, val){
//     console.log("This function takes in the sum factor: ");
// }
// let sumAgain =function (a, b) {return a + b;}
// let sumOnceAgain = (a, b) => a + b;
// function sum(a, b){return a + b;}


// //Function as an argument or call back function......

// function outer(func, val){
//     console.log("In outer function .....");
//     let result = func(5, val);
//     return result;
// }
// console.log(outer(sumOnceAgain,20));
// setTimeout(() => console.log("micheal"), 5000)

//FUNCTION AS A RETUNED OBJECT: its a function that returns a function. 
//classTask...
// *write a function that returns a function 
// *pass of the function into a varaiable 
// *console log the result of the variable

function func(){
    return () => {return "a + b"};
}
var variable = func()
console.log(variable());
