function isGameOver(board) {
  const whiteKingPosition = findKingPosition(board, "w");
  const blackKingPosition = findKingPosition(board, "b");

  // Check for checkmate
  if (
    isInCheck(board, whiteKingPosition, "w") &&
    getAvailableMoves(board, "w").length === 0
  ) {
    return { gameOver: true, result: "Black wins" };
  }

  if (
    isInCheck(board, blackKingPosition, "b") &&
    getAvailableMoves(board, "b").length === 0
  ) {
    return { gameOver: true, result: "White wins" };
  }

  // Check for stalemate
  if (getAvailableMoves(board, "w").length === 0) {
    return { gameOver: true, result: "Stalemate" };
  }

  if (getAvailableMoves(board, "b").length === 0) {
    return { gameOver: true, result: "Stalemate" };
  }

  // Game is not over
  return { gameOver: false };
}

function findKingPosition(board, color) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === `${color}k`) {
        return [i, j];
      }
    }
  }
  return null;
}

function isInCheck(board, kingPosition, color) {
  const [kingX, kingY] = kingPosition;
  const opponentColor = color === "w" ? "b" : "w";
  const moves = getAvailableMoves(board, opponentColor);

  return moves.some(([x, y]) => x === kingX && y === kingY);
}

function makeMove(board, move, color) {
  const [fromX, fromY] = move[0];
  const [toX, toY] = move[1];
  const piece = board[fromX][fromY];
  board[toX][toY] = piece;
  board[fromX][fromY] = "";

  // Handle additional move rules like castling, en passant, and pawn promotion
  // ...
}

function undoMove(board, move, color) {
  const [fromX, fromY] = move[0];
  const [toX, toY] = move[1];
  const piece = board[toX][toY];
  board[fromX][fromY] = piece;
  board[toX][toY] = "";

  // Undo any additional move rules like castling, en passant, and pawn promotion
  // ...
}

function getAvailableMoves(board, color) {
  const moves = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const piece = board[i][j];
      if (piece && piece.charAt(0) === color) {
        const pieceMoves = getPieceMoves(board, i, j);
        moves.push(...pieceMoves);
      }
    }
  }
  return moves;
}

function getPieceMoves(board, i, j) {
  const piece = board[i][j];
  const color = piece.charAt(0);
  const type = piece.charAt(1);
  const moves = [];

  // Implement move generation rules for different piece types
  // ...

  return moves;
}

function evaluateBoard(board, color) {
  // Implement your board evaluation function here
  return 0; // Placeholder
}

function minimax(board, depth, alpha, beta, isMaximizing, color) {
  if (depth === 0 || isGameOver(board)) {
    return evaluateBoard(board, color);
  }

  if (isMaximizing) {
    let bestValue = -Infinity;
    const moves = getAvailableMoves(board, color);
    for (const move of moves) {
      const newBoard = evaluateBoard(board, move, color);
      const value = minimax(
        newBoard,
        depth - 1,
        alpha,
        beta,
        false,
        color === "w" ? "b" : "w"
      );
      bestValue = Math.max(bestValue, value);
      alpha = Math.max(alpha, bestValue);
      if (beta <= alpha) {
        break; // Beta cutoff
      }
    }
    return bestValue;
  } else {
    let bestValue = Infinity;
    const moves = getAvailableMoves(board, color);
    for (const move of moves) {
      const newBoard = evaluateBoard(board, move, color);
      const value = minimax(
        newBoard,
        depth - 1,
        alpha,
        beta,
        true,
        color === "w" ? "b" : "w"
      );
      bestValue = Math.min(bestValue, value);
      beta = Math.min(beta, bestValue);
      if (beta <= alpha) {
        break; // Alpha cutoff
      }
    }
    return bestValue;
  }
}

function getBestMove(board, color, depth = 3) {
  let bestBoard = board.map((row) => [...row]);
  let bestValue = -Infinity;
  const moves = getAvailableMoves(board, color);

  for (const move of moves) {
    const newBoard = evaluateBoard(board, move, color);
    const value = minimax(
      newBoard,
      depth - 1,
      -Infinity,
      Infinity,
      false,
      color === "w" ? "b" : "w"
    );
    if (value > bestValue) {
      bestValue = value;
      bestBoard = newBoard;
    }
  }

  return bestBoard;
}
