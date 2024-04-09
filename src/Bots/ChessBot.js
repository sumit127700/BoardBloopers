import { useState } from "react";
import "./css/General.css";
import "./css/ChessBot.css";
import br from "../images/br.png";
import bb from "../images/bb.png";
import bn from "../images/bn.png";
import bq from "../images/bq.png";
import bk from "../images/bk.png";
import bp from "../images/bp.png";
import wr from "../images/wr.png";
import wb from "../images/wb.png";
import wn from "../images/wn.png";
import wq from "../images/wq.png";
import wk from "../images/wk.png";
import wp from "../images/wp.png";
import { getAvailableMoves } from "./Chess/getAvailableMoves";
const images = { br, bb, bn, bq, bk, bp, wr, wb, wn, wq, wk, wp };
export default function ChessBot() {
  const [val, setVal] = useState([
    ["br", "bb", "bn", "bq", "bk", "bn", "bb", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wb", "wn", "wq", "wk", "wn", "wb", "wr"],
  ]);
  const [dotVal, setDotVal] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const ClickedAtIndex = (xx, yy) => {
    if (val[xx][yy] !== "" && (isSelected[0] !== xx || isSelected[1] !== yy)) {
      setSelected([xx, yy]);
      let z = getAvailableMoves(val, xx, yy);
      let b = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];
      for (let zz of z) {
        b[zz[0]][zz[1]] = 1;
      }
      setDotVal(b);
      console.log(b);
    } else {
      setSelected([-1, -1]);
      setDotVal([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]);
    }
  };

  const [isSelected, setSelected] = useState([-1, -1]);
  const renderChessBoard = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0)
          row.push(
            <button
              className={
                isSelected[0] === i
                  ? isSelected[1] === j
                    ? "whiteSquare whiteSelected"
                    : "whiteSquare"
                  : "whiteSquare"
              }
              onClick={() => ClickedAtIndex(i, j)}
            >
              {dotVal[i][j] === 1 ? (
                val[i][j] === "" ? (
                  <div className="possibleMove"></div>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
              {val[i][j] !== "" ? (
                <img className="pieceImage" src={images[val[i][j]]} />
              ) : (
                <></>
              )}
            </button>
          );
        else
          row.push(
            <button
              className={
                isSelected[0] === i
                  ? isSelected[1] === j
                    ? "blackSquare blackSelected"
                    : "blackSquare"
                  : "blackSquare"
              }
              onClick={() => ClickedAtIndex(i, j)}
            >
              {dotVal[i][j] === 1 ? (
                val[i][j] === "" ? (
                  <div className="possibleMove"></div>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}

              {val[i][j] !== "" ? (
                <img className="pieceImage" src={images[val[i][j]]} />
              ) : (
                <></>
              )}
            </button>
          );
      }
      board.push(<div className="rowChess">{row}</div>);
    }
    return board;
  };

  return (
    <div className="card">
      <div className="headerForBots">Can you Win</div>
      {renderChessBoard()}
      <button
        className="clearBoard"
        onClick={() => setVal(Array(64).fill(null))}
      >
        Clear Board
      </button>
    </div>
  );
}
