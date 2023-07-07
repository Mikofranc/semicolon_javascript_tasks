let prompt = require('prompt-sync')();
console.log("RIGH ANGLE TRIANGLED APP")
var numberOfIterations = parseInt(prompt('Enter number of iterations'));
var z =""
for(let index =0; index < numberOfIterations; index++){
    for(let j =0; j < index; j++){
        var star ="*"
        z += star
    }

console.log(z)
}