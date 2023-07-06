let prompt = require('prompt-sync')();

let no1 = prompt('enter first number')
let no2 = prompt('enter second number')
let no3 = prompt('enter third number')
let no4 = prompt('enter fourth number')

let maxNumber = 0

if(parseInt(no1) > maxNumber){
    maxNumber = parseInt(no1)
}else if(parseInt(no2) > maxNumber){
    maxNumber =parseInt(no2)
}else if(parseInt(no3) > maxNumber){
    maxNumber =parseInt(no3)
}else if(parseInt(no4) > maxNumber){
    maxNumber =parseInt(no4)
}
let output ={
    no1: Number(no1), no2: Number(no2),
    no3: Number(no3), no4: Number(no4),
    maxNumber:Number(maxNumber)
}
console.log(maxNumber)