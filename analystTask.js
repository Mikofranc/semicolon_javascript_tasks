let prompt = require('prompt-sync')();

let rightOperands = prompt('Enter first operand \t')
let leftOperands = prompt('Enter second operand \t')
let operator = prompt('enter operator\t')
let answer =0

if (operator ==='+'){
    answer = parseInt(rightOperands) + parseInt(leftOperands)
}else if(operator ==='-'){
    answer = parseInt(rightOperands) - parseInt(leftOperands)
}else if(operator ==='*'){
    answer = parseInt(rightOperands) * parseInt(leftOperands)
}else if(operator === '/'){
    answer = parseInt(rightOperands) / parseInt(leftOperands)
}

let output = {
    rightOperands: Number(rightOperands), operator: String(operator),
    leftOperands: Number(rightOperands), answer: Number(answer)
}
console.log(output)

