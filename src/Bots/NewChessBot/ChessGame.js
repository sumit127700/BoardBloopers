import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import Chess from "./lib/js/chess.js";
import "./style.css";
const ChessGame = () => {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }
  function resetBoard() {
    setGame(new Chess());
  }

  return (
    <div className="card">
      <div className="headerForBots">Can you Win?</div>
      <div className="ChessBoardContainer">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
      <button className="clearBoard" onClick={resetBoard}>
        Reset Game
      </button>
    </div>
  );
};

export default ChessGame;
