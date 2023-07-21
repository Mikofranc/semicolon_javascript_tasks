let prompt = require('prompt-sync')();
var length = 3
var width = 3
var board = [[],[],[]]


for(let row =0; row < length; row++){
    for(let col =0; col < width; col++){
        var pieces =prompt("enter piece:    ");
        board[row][col] = pieces;
    }
}
console.table(board);