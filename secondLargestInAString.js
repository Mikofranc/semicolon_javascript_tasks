
function checkSecondMaxNo(input){
    var numbers ="";
var max = 0
var secondMax = 0
var checkzero = false;
for(let index = 0; index < input.length; index++){
    if(parseInt(input[index])){
        numbers +=input[index];
    }
    if(parseInt(input[index])===0){
        checkzero = true;
    }
}
for(let index = 0; index < numbers.length; index++){
    if(parseInt(numbers[index]) > max){
        max = parseInt(numbers[index])
    }    
}
for(let index = 0; index < numbers.length; index++){
    if(parseInt(numbers[index]) > secondMax && parseInt(numbers[index]) < max){
        secondMax = parseInt(numbers[index])
    }  
}
if(checkzero){
    secondMax =0
    console.log(secondMax);
}else{
    if(secondMax==0){
        secondMax =-1;
    }
    console.log(secondMax)
}

}

checkSecondMaxNo("ck0177")