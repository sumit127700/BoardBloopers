import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import Chess from "./Chess/chess.js";
import "./css/ChessBot.css";
import minimaxRoot from "./Chess/ChessBotAlgo.js";
import { useSelector } from "react-redux";
const ChessBot = () => {
  const difficultyModeforChess = useSelector(
    (state) => state.boardgame.difficultyModeforChess
  );
  const [game, setGame] = useState(new Chess());
  const [isWhiteWinning, setIsWhiteWinning] = useState(false);
  const [isBlackWinning, setIsBlackWinning] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [header, setHeader] = useState("Can you Win?");
  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeBestMove() {
    if (isBlackWinning || isWhiteWinning || isDraw || game.game_over()) return;
    const gameCopy = { ...game };
    const bestmove = minimaxRoot(difficultyModeforChess, gameCopy, true);
    if (isBlackWinning || isWhiteWinning || isDraw || game.game_over()) return;
    gameCopy.ugly_move(bestmove);
    setGame(game);
  }

  function onDrop(sourceSquare, targetSquare) {
    if (isBlackWinning || isWhiteWinning || isDraw) return false;
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    if (isBlackWinning || isWhiteWinning || isDraw) return false;
    setTimeout(makeBestMove, 100);
    return true;
  }
  function resetBoard() {
    const gameCopy = { ...game };
    gameCopy.reset();
    setIsWhiteWinning(false);
    setIsBlackWinning(false);
    setIsDraw(false);
    setHeader("Can you Win?");
    setGame(gameCopy);
  }
  useEffect(() => {
    updateGameStatus();
  }, [game.fen()]);
  function updateGameStatus() {
    if (game.game_over()) {
      if (game.in_checkmate()) {
        if (game.turn() === "w") {
          setIsBlackWinning(true);
          setHeader("Bot Wins!");
        } else {
          setIsWhiteWinning(true);
          setHeader("You Win!");
        }
      } else {
        setIsDraw(true);
        setHeader("Its a Draw!");
      }
    } else {
      setIsWhiteWinning(false);
      setIsBlackWinning(false);
      setIsDraw(false);
    }
  }
  return (
    <div className="card">
      <div className="headerForBots">{header}</div>
      <div className="ChessBoardContainer">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
      <button className="clearBoard" onClick={resetBoard}>
        Reset Game
      </button>
    </div>
  );
};

export default ChessBot;
