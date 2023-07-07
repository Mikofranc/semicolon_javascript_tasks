var arr = new Array(5, 3, 5, 6, 8, 10);
var arr1 = [1, 2, 3, 4, 5];

//arr.push("hello");
//console.log(arr);
//arr.pop();
//console.log(arr);

//var arr2 = arr.concat(arr1);
//console.log(arr2);

//var sliceResult = arr1.slice(1,3)
//console.log("sliced result",result)

// var splicedResult = arr1.splice(2,3);
// console.log(splicedResult);

var number = [1,2,3,4,5,6,7,8];
var ans = number.slice(0,3)
console.log(ans)

Array.prototype.mike ="mikolo"
Array.prototype.james ="cohort"
console.log(ans.mike)
console.log(number)
console.log(number.james)
let answer =0
for(let index = 0; index <= number.length; index++){
    answer += index
    console.log(index,"\t")
}
console.log("total is", answer)
