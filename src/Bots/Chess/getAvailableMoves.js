export function getAvailableMoves(board, i, j) {
  const piece = board[i][j];
  const color = piece.charAt(0);
  const type = piece.charAt(1);
  const moves = [];
  const directions = {
    r: [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ], // Rook
    b: [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ], // Bishop
    q: [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ], // Queen
  };

  const moveInDirection = (dx, dy) => {
    let x = i + dx;
    let y = j + dy;
    while (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === "") {
      moves.push([x, y]);
      x += dx;
      y += dy;
    }
    if (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y].charAt(0) !== color) {
      moves.push([x, y]);
    }
  };

  if (type === "p") {
    // Pawns can move forward one or two squares from the starting square
    const direction = color === "w" ? -1 : 1;
    const startRow = color === "w" ? 6 : 1;
    if (
      i + direction >= 0 &&
      i + direction < 8 &&
      board[i + direction][j] === ""
    ) {
      moves.push([i + direction, j]);
      if (i === startRow && board[i + 2 * direction][j] === "") {
        moves.push([i + 2 * direction, j]);
      }
    }
  } else if (type === "n") {
    // Knight moves
    const knightMoves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    for (const [dx, dy] of knightMoves) {
      const x = i + dx;
      const y = j + dy;
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        (board[x][y] === "" || board[x][y].charAt(0) !== color)
      ) {
        moves.push([x, y]);
      }
    }
  } else if (type === "k") {
    // King moves
    const kingMoves = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ];
    for (const [dx, dy] of kingMoves) {
      const x = i + dx;
      const y = j + dy;
      if (
        x >= 0 &&
        x < 8 &&
        y >= 0 &&
        y < 8 &&
        (board[x][y] === "" || board[x][y].charAt(0) !== color)
      ) {
        moves.push([x, y]);
      }
    }
  } else {
    directions[type].forEach(([dx, dy]) => moveInDirection(dx, dy));
  }

  return moves;
}
