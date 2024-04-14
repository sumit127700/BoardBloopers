import { useState, useEffect } from "react";
import "./css/TicTacToe.css";
import "./css/General.css";
import getGoodMove from "./TicTacToe/getGoodMove";
import { getOptimalMove } from "./TicTacToe/getOptimalMove";
import { useSelector } from "react-redux";
export default function TicTacToe({}) {
  const playerModeforTicTacToe = useSelector(
    (state) => state.boardgame.playerModeforTicTacToe
  );
  const difficultyModeforTicTacToe = useSelector(
    (state) => state.boardgame.difficultyModeforTicTacToe
  );
  const [val, setVal] = useState("         ");
  const [chance, setChance] = useState(true);
  const [isXWinning, setXWinning] = useState(false);
  const [isOWinning, setOWinning] = useState(false);
  const [isDraw, setDraw] = useState(false);
  const [header, setHeader] = useState("Can you Win!");
  const [isbotMove, setBotMove] = useState(playerModeforTicTacToe);
  useEffect(() => {
    var x = 0;
    if (difficultyModeforTicTacToe) x = getGoodMove(val);
    else x = getOptimalMove(val);

    let z = "";
    for (let i = 0; i < val.length; i++) {
      if (i === x) z += "X";
      else z += val[i];
    }
    if (isbotMove) {
      setVal(z);
      setBotMove(false);
    }
  }, [isbotMove]);
  useEffect(() => {
    checkForWin();
    if (!isXWinning && !isOWinning) checkForDraw();
  }, [val]);
  useEffect(() => {
    if (isOWinning) {
      setHeader("O Wins!");
    } else if (isXWinning) {
      setHeader("Bot Wins!");
    } else if (isDraw) {
      setHeader("Its a Draw!");
    } else {
      setHeader("Can you Win!");
    }
  }, [isOWinning, isXWinning, isDraw]);

  const checkForDraw = () => {
    let countfilled = true;
    for (let i = 0; i < 9; i++) {
      if (val[i] !== "X" && val[i] !== "O") countfilled = false;
    }
    if (countfilled) setDraw(true);
  };

  const checkForWin = () => {
    for (let i = 0; i < 3; i++) {
      if (val[i] === val[i + 3] && val[i] === val[i + 6] && val[i] === "X")
        setXWinning(true);
      if (val[i] === val[i + 3] && val[i] === val[i + 6] && val[i] === "O")
        setOWinning(true);
    }
    for (let i = 0; i < 9; i += 3) {
      if (val[i] === val[i + 1] && val[i] === val[i + 2] && val[i] === "X")
        setXWinning(true);
      if (val[i] === val[i + 1] && val[i] === val[i + 2] && val[i] === "O")
        setOWinning(true);
    }
    if (val[0] === val[4] && val[0] === val[8] && val[0] === "X")
      setXWinning(true);
    if (val[2] === val[4] && val[4] === val[6] && val[2] === "X")
      setXWinning(true);
    if (val[0] === val[4] && val[0] === val[8] && val[0] === "O")
      setOWinning(true);
    if (val[2] === val[4] && val[4] === val[6] && val[2] === "O")
      setOWinning(true);
  };
  const ClickedAtIndex = (x) => {
    if (val[x] === " " && !isXWinning && !isOWinning) {
      let z = "";

      for (let i = 0; i < val.length; i++) {
        if (i === x) z += "O";
        else z += val[i];
      }
      setVal(z);

      setBotMove(true);
    }
  };
  const clearBoard = () => {
    setVal("         ");
    setChance(true);
    setOWinning(false);
    setXWinning(false);
    setDraw(false);
    setBotMove(playerModeforTicTacToe);
  };
  return (
    <div className="card">
      <div className="headerForBots">{header}</div>
      <div className="rowTicTacToe">
        <button onClick={() => ClickedAtIndex(0)}>{val[0]}</button>
        <button onClick={() => ClickedAtIndex(1)}>{val[1]}</button>
        <button onClick={() => ClickedAtIndex(2)}>{val[2]}</button>
      </div>
      <div className="rowTicTacToe">
        <button onClick={() => ClickedAtIndex(3)}>{val[3]}</button>
        <button onClick={() => ClickedAtIndex(4)}>{val[4]}</button>
        <button onClick={() => ClickedAtIndex(5)}>{val[5]}</button>
      </div>
      <div className="rowTicTacToe">
        <button onClick={() => ClickedAtIndex(6)}>{val[6]}</button>
        <button onClick={() => ClickedAtIndex(7)}>{val[7]}</button>
        <button onClick={() => ClickedAtIndex(8)}>{val[8]}</button>
      </div>
      <button className="clearBoard" onClick={clearBoard}>
        Clear Board
      </button>
    </div>
  );
}
