export function getOptimalMove(boardString) {
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

  // Helper function for the minimax algorithm
  const minimax = (board, player) => {
    const availableMoves = getAvailableMoves(board);

    // Check if the game is over (win or draw)
    if (checkWin(board, "X")) {
      return { score: 10 };
    } else if (checkWin(board, "O")) {
      return { score: -10 };
    } else if (availableMoves.length === 0) {
      return { score: 0 };
    }

    // Collect all possible moves and their scores
    const moves = [];

    for (const move of availableMoves) {
      const newBoard = board.slice();
      newBoard[move] = player;

      const result = minimax(newBoard, player === "X" ? "O" : "X");
      result.move = move;
      moves.push(result);
    }

    // Choose the best move based on the player
    let bestMove;
    if (player === "X") {
      bestMove = moves.reduce((a, b) => (a.score > b.score ? a : b));
    } else {
      bestMove = moves.reduce((a, b) => (a.score < b.score ? a : b));
    }

    return bestMove;
  };

  // Start the minimax algorithm with the current board and 'X' as the player
  const bestMove = minimax(boardString.split(""), "X");

  // Return the optimal move index
  return bestMove.move;
}
