

function tictactoe(board) {
  // horizontals
   function horizontals(board){
      for(i=0; i < board.length; i++){

     if(board[i].reduce(function(a,b){
        if (a === b){
        return a;
        }
     })){
          return board[i][0];
      }
      }
  }
  horizontals(board);

//Vertical
  function vertical(board){
     redo_arr = [];
     for (i=0; i< board.length; i++){
      var new_arr = board.map(function(el){
        return el[i];
      });
      redo_arr.push(new_arr);
      }
      return redo_arr;
  }
horizontals(vertical(board));


  // diagnals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if(board[0][0] === 'X'){
      return 'X';
    } else {
      return 'O';
    }
  }
  if (board[0][2] ===  board[1][1] && board[1][1]=== board[2][0]) {
    if(board[0][2] === 'X'){
    return 'X';
  }else {
    return 'O';
  }
  }

  return null;
}

module.exports = tictactoe;
