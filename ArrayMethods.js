Array.prototype.sum1 = function (){
    let total = 0;
    for(let index=0;index < this.length; index++){
        total += this[index];
    }
    return total;
}
let number = [4,7,10,10,2,9,11,100,100]
Array.prototype.secondMaximum = function (){
    let maxNumber = number[0]
    let secondMax =0
    for(let index =0; index < number.length; index++){
        if (this[index] > maxNumber)maxNumber = this[index];
        if(maxNumber > this[index] && this[index] > secondMax){secondMax = this[index]}
    }
    return secondMax;
}

console.log(number.secondMaximum())