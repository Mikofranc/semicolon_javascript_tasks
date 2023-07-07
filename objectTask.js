let prompt = require('prompt-sync')();
var total =[]

function addPopulation(x){
    var ans = x + ans
    return ans;
}
let totalPopulation ;
function collectUserInput(){
    var name = prompt('Enter name: ');
    var population = prompt('Enter population: ');
    var temp = parseInt(prompt('Enter temp: '));
    var currency = prompt('Enter currency: ');
    totalPopulation = addPopulation(population);
    var details = {
        name:name, 
        population:population, 
        temp:temp, 
        currency: currency}
        console.log("============================")
}

var arr0 =["null", collectUserInput(), collectUserInput(),collectUserInput()]
var arr1 =[collectUserInput(), collectUserInput(), collectUserInput(),"null"]
var arr2 =[collectUserInput(), "null", collectUserInput(),collectUserInput()]
total.push(arr0)
total.push(arr1)
total.push(arr2)

console.table(total)
for(let x of Object.values(details))
console.log("the total population is ",totalPopulation)