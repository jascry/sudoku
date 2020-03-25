module.exports = function solveSudoku(matrix) {
  solve(matrix);
  return matrix;
}

function checkIfNotRepeated(board, row, column, value) {
  for(let i = 0; i < 9; i++) {
    const a = 3 * Math.floor(row/3) + Math.floor(i/3);
    const b = 3 * Math.floor(column/3) + i % 3;
    if(board[row][i] == value || board[i][column] == value || board[a][b] == value) {
      return false;
    }
  }
  return true;
}

function solve(matrix) {
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      if(matrix[i][j] == 0) {
        for(let k = 1; k <=9; k++) {
          if(checkIfNotRepeated(matrix, i, j, k)) {
            matrix[i][j] = k;
            if(solve(matrix)) {
              return true;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
