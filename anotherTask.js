var num = "8246"
var maxoddNumber = 0;
var answer =[];
var arr = new Array(num.length+1)
var z =0

for(let index =num.length; index >= 0; index--){
   if(num[index] % 2 ===1){
    maxoddNumber = num[index];
    z = index
    break
   }
}
for(let index = 0; index <= z; index++){
    answer[index] = num.charAt(index);
}
console.log(answer);

