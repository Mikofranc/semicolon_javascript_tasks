// let prompt = require('prompt-sync')();
var s = "codeleet";
var arr = [4, 5, 6, 7, 0, 2, 1, 3];
var newWord = "";
var z =""

for(let index = 0; index < arr.length; index++){
     let check = arr[index];
    for(let j =0; j < arr.length; j++){
        newWord = s[check];
    }
    z += newWord
}
console.log(z);