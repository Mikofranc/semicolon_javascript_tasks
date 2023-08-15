function mergeStrings(word1, word2){
    let word = "";
    let length = word1.length;

    if(word1.length <= word2.length){
        length =word2.length
    }
    for(let index=0; index < length; index++){
        if(word1[index]){
            word += word1[index];
        }
        if(word2[index]){
            word += word2[index];
        }
    }
    return word;
}

let result = mergeStrings("ab", "qprs")
console.log(result)