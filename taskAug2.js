var haystack = "sadbutsad";
var needle = "sad";
var newWord =haystack.slice(0,needle.length);
for(let index = 0; index < haystack.length; index++){
 if(haystack.slice(index, needle.length + index)===newWord){
    console.log("0")
    break;
 }else{
    console.log("-1")
    break;
 }
}
