import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import Chess from "./lib/js/chess.js";
import "./style.css";
const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState("start");
  const [moveHistory, setMoveHistory] = useState([]);
  const [searchDepth, setSearchDepth] = useState(3);
  const [positionCount, setPositionCount] = useState(0);
  const [moveTime, setMoveTime] = useState(0);
  const [positionsPerSecond, setPositionsPerSecond] = useState(0);

  useEffect(() => {
    if (game.game_over()) {
      alert("Game over");
    }
  }, [game]);

  const onDragStart = (source, piece, position, orientation) => {
    if (game.in_checkmate() || game.in_draw() || piece.search(/^b/) !== -1) {
      return false;
    }
  };

  const onDrop = (source, target) => {
    const move = game.move({ from: source, to: target, promotion: "q" });
    if (move === null) {
      return "snapback";
    }

    setPosition(game.fen());
    setMoveHistory(game.history());
    setTimeout(makeBestMove, 250);
  };

  const onSnapEnd = () => {
    setPosition(game.fen());
  };

  const onMouseoverSquare = (square, piece) => {
    const moves = game.moves({ square, verbose: true });
    if (moves.length === 0) return;
    greySquare(square);
    for (let i = 0; i < moves.length; i++) {
      greySquare(moves[i].to);
    }
  };

  const onMouseoutSquare = (square, piece) => {
    removeGreySquares();
  };

  const makeBestMove = () => {
    const bestMove = getBestMove(game);
    game.ugly_move(bestMove);
    setPosition(game.fen());
    setMoveHistory(game.history());
  };

  const getBestMove = (game) => {
    // Implement the Minimax algorithm here
  };

  const greySquare = (square) => {
    // Implement the greying of squares here
  };

  const removeGreySquares = () => {
    // Implement the removal of grey squares here
  };

  return (
    <div className="ChessPage">
      <div className="ChessBoardContainer">
        <Chessboard
          position={position}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onSnapEnd={onSnapEnd}
          onMouseoverSquare={onMouseoverSquare}
          onMouseoutSquare={onMouseoutSquare}
        />
        <div>
          <label>
            Search Depth:
            <select
              value={searchDepth}
              onChange={(e) => setSearchDepth(parseInt(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <p>Positions evaluated: {positionCount}</p>
          <p>Time: {moveTime / 1000}s</p>
          <p>Positions/s: {positionsPerSecond}</p>
          <div>
            <h3>Move History</h3>
            {moveHistory.map((move, index) => (
              <p key={index}>
                {index % 2 === 0 ? `${index / 2 + 1}. ` : ""}
                {move}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
