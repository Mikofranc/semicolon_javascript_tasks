//Fibonacci
// var a = 0;
// var b = 1;
// var c = 0;
// var ans = 30;
// let i = 0;

// while( c < ans){
//     c = a + b;
//     process.stdout.write(`${c},`)
//     a = b
//     b = c
//     i++;
// }

// let array = [9,8,7,6,5,4,3,2,1,0];

// for(let i in array){
//     console.log(i);
// }
// for(let i of array){
//     console.log(i);
// }

for(let index =0; index < 10; index++){
    if (index === 5){
        continue;
    }
    if (index === 8){
        break;
    }
    process.stdout.write(`${index},`)
}
