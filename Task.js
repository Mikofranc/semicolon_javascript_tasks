// let prompt = required()
let prompt = require('prompt-sync')();

let userInput = prompt('enter name: \t')
let id = prompt('enter id: \t')
let count = prompt('enter count: \t')
let Name = prompt('enter name: \t')
let available = prompt('enter if available \t')

let total = {
    id: parserInt(id),
    available: available = true,
    count:parseInt(count),
    Name : Name,   
}
let gems = 2

if (gems==2) console.log(true)
else console.log(false)

//console.log('name-->', total.Name)