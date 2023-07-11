console.log("TRIANGLE APP");
let prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter number of iteratons"));
var x =""
for(let index = 0; index < number; index++){
    for(let j= number; number > index; number--){
        var y = "*"
        x += y
        process.stdout.write(x)
    }


}