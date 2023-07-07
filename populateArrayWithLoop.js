console.log("POPULATE ARRAY WITH INPUT ");
let prompt = require('prompt-sync')();
let arrayLength = parseInt(prompt("Enter lenght of  array:      "));
var arr = new Array(arrayLength)

for(let index =0; index < arrayLength; index++){
    let input = prompt("Enter a number");
    arr[index]= input;
}
console.log(arr)
