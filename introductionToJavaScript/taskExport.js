let balance = 0; 

function largestOddNumber(numberInString){
    for(let i=numberInString -1; i >= 0; i--){
       if(numberInString.charAt(i) % 2 !=0){
        return numberInString
       }
    }
    return "";
}
module.exports = largestOddNumber;
// export default largestOddNumber;