export default function getGoodMove(boardString) {
  // Helper function to check if a player has won
  const checkWin = (board, player) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const combo of winningCombos) {
      if (combo.every((index) => board[index] === player)) {
        return true;
      }
    }

    return false;
  };

  // Helper function to get available moves
  const getAvailableMoves = (board) => {
    const moves = [];
    for (let i = 0; i < 9; i++) {
      if (board[i] === " ") {
        moves.push(i);
      }
    }
    return moves;
  };

  const board = boardString.split("");
  const availableMoves = getAvailableMoves(board);

  // If there's a winning move, take it
  for (const move of availableMoves) {
    board[move] = "X";
    if (checkWin(board, "X")) {
      return move;
    }
    board[move] = " ";
  }

  // If there's a move to block the opponent from winning, take it
  for (const move of availableMoves) {
    board[move] = "O";
    if (checkWin(board, "O")) {
      board[move] = "X";
      return move;
    }
    board[move] = " ";
  }

  // Randomly decide whether to make a good move or a bad move
  const makeBadMove = Math.random() < 0.3; // 30% chance of making a bad move

  if (!makeBadMove) {
    // If center is available, take it
    if (board[4] === " ") {
      return 4;
    }

    // Take one of the corner moves if available
    const corners = [0, 2, 6, 8];
    for (const corner of corners) {
      if (board[corner] === " ") {
        return corner;
      }
    }

    // Take one of the side moves if available
    const sides = [1, 3, 5, 7];
    for (const side of sides) {
      if (board[side] === " ") {
        return side;
      }
    }
  }

  // If making a bad move, return the first available move
  return availableMoves[0];
}
