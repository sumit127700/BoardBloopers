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

  // Pawn move generation rules
  if (type === "p") {
    const direction = color === "w" ? -1 : 1;
    const startRow = color === "w" ? 6 : 1;
    const forwardSquare = board[i + direction]?.[j];
    const leftCaptureSquare = board[i + direction]?.[j - 1];
    const rightCaptureSquare = board[i + direction]?.[j + 1];

    if (!forwardSquare) {
      moves.push([i + direction, j]);
      if (i === startRow && !board[i + 2 * direction]?.[j]) {
        moves.push([i + 2 * direction, j]);
      }
    }

    if (leftCaptureSquare && leftCaptureSquare.charAt(0) !== color) {
      moves.push([i + direction, j - 1]);
    }

    if (rightCaptureSquare && rightCaptureSquare.charAt(0) !== color) {
      moves.push([i + direction, j + 1]);
    }
  }

  // Knight move generation rules
  if (type === "n") {
    const offsets = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (const [dx, dy] of offsets) {
      const x = i + dx;
      const y = j + dy;
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        (!board[x][y] || board[x][y].charAt(0) !== color)
      ) {
        moves.push([x, y]);
      }
    }
  }

  // Bishop move generation rules
  if (type === "b") {
    const directions = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];

    for (const [dx, dy] of directions) {
      let x = i + dx;
      let y = j + dy;
      while (x >= 0 && x < 8 && y >= 0 && y < 8 && !board[x][y]) {
        moves.push([x, y]);
        x += dx;
        y += dy;
      }
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        board[x][y].charAt(0) !== color
      ) {
        moves.push([x, y]);
      }
    }
  }

  // Rook move generation rules
  if (type === "r") {
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [dx, dy] of directions) {
      let x = i + dx;
      let y = j + dy;
      while (x >= 0 && x < 8 && y >= 0 && y < 8 && !board[x][y]) {
        moves.push([x, y]);
        x += dx;
        y += dy;
      }
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        board[x][y].charAt(0) !== color
      ) {
        moves.push([x, y]);
      }
    }
  }

  // Queen move generation rules
  if (type === "q") {
    const bishopDirections = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
    const rookDirections = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [dx, dy] of bishopDirections) {
      let x = i + dx;
      let y = j + dy;
      while (x >= 0 && x < 8 && y >= 0 && y < 8 && !board[x][y]) {
        moves.push([x, y]);
        x += dx;
        y += dy;
      }
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        board[x][y].charAt(0) !== color
      ) {
        moves.push([x, y]);
      }
    }

    for (const [dx, dy] of rookDirections) {
      let x = i + dx;
      let y = j + dy;
      while (x >= 0 && x < 8 && y >= 0 && y < 8 && !board[x][y]) {
        moves.push([x, y]);
        x += dx;
        y += dy;
      }
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        board[x][y].charAt(0) !== color
      ) {
        moves.push([x, y]);
      }
    }
  }

  // King move generation rules
  if (type === "k") {
    const offsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const [dx, dy] of offsets) {
      const x = i + dx;
      const y = j + dy;
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        (!board[x][y] || board[x][y].charAt(0) !== color)
      ) {
        moves.push([x, y]);
      }
    }
  }

  return moves;
}
