var s = "iloveleetcode";
var words = ["i", "love", "leetcode", "apples"];
var newWord =""
var answer = ""
var count = 0
for(let index =0; index < words.length; index++){
    newWord += words[index];
}
for(let index =0; index < s.length; index++){
    if(s[index]===newWord[index]){
        count++;
    }
}
if(count ===s.length){
    answer = true;
}else{answer = false;}
// consolelog("new word"+ newWord)
console.log(answer)