var arr = [];
var row0 = [200, 50, 300, 5];
var row1 = [10, 25, 7, 100];
var row2 =[25, 20, 70, 45];
var row3 = [500, 170, 11, 35];
arr.push(row0);arr.push(row1);arr.push(row2);arr.push(row3);
console.table(arr)


let prompt = require('prompt-sync')();
 var row = prompt("enter row:   ")
 var startSlice = prompt("enter start slice: ")
 var endSlice = prompt('enter end slice:    ')

 if(row > arr.length && startSlice > row0 && startSlice < row0 && endSlice > row0 && endSlice < row0){
    console.log("wrong input")
 }else{
    console.log(arr[row].slice(startSlice,endSlice))}