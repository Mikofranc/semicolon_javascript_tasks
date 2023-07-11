let input = "loveleetcode"
var count =0
var answer = 0
let x = 0;
while(x < input.length){
    var letter = input[x];
    let index =0;
    while(index < input.length){
        if(letter == input[index]){
            count++;
        }
        index++;
        if (count === 1){
            answer = x;
            console.log(answer)
            break;
        }
    }
    count = index;
    
    x++;
}
console.log(answer)