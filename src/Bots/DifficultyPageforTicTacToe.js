import "./css/TicTacToe.css";
import "./css/General.css";
import { useNavigate } from "react-router-dom";
import {
  setDifficultyModeforTicTacToe,
  setPlayerModeforTicTacToe,
} from "../features/boardgameFeatures/boardgameFeatures";
import { useDispatch, useSelector } from "react-redux";
function TrueSelectorButton({ difficultyMode, content, setValueforBtn }) {
  const dispatch = useDispatch();
  if (difficultyMode)
    return (
      <button
        className="difficultySelectorButton selected"
        onClick={() => {
          dispatch(setValueforBtn(true));
        }}
      >
        {content}
      </button>
    );
  else {
    return (
      <button
        className="difficultySelectorButton"
        onClick={() => {
          dispatch(setValueforBtn(true));
        }}
      >
        {content}
      </button>
    );
  }
}
function FalseSelectorButton({ difficultyMode, content, setValueforBtn }) {
  const dispatch = useDispatch();
  if (difficultyMode)
    return (
      <button
        className="difficultySelectorButton"
        onClick={() => {
          dispatch(setValueforBtn(false));
        }}
      >
        {content}
      </button>
    );
  else {
    return (
      <button
        className="difficultySelectorButton selected"
        onClick={() => {
          dispatch(setValueforBtn(false));
        }}
      >
        {content}
      </button>
    );
  }
}
export default function DifficultyPageforTicTacToe() {
  const difficultyModeforTicTacToe = useSelector(
    (state) => state.boardgame.difficultyModeforTicTacToe
  );
  const playerModeforTicTacToe = useSelector(
    (state) => state.boardgame.playerModeforTicTacToe
  );
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="headerForBots">Select difficulty!</div>
      <div className="difficultyRow">
        <TrueSelectorButton
          difficultyMode={difficultyModeforTicTacToe}
          content={"Easy Mode"}
          setValueforBtn={setDifficultyModeforTicTacToe}
        />
        <FalseSelectorButton
          difficultyMode={difficultyModeforTicTacToe}
          content={"Hard Mode"}
          setValueforBtn={setDifficultyModeforTicTacToe}
        />
      </div>
      <div className="headerForBots">Who goes first!</div>
      <div className="difficultyRow">
        <TrueSelectorButton
          difficultyMode={playerModeforTicTacToe}
          content={"Bot"}
          setValueforBtn={setPlayerModeforTicTacToe}
        />
        <FalseSelectorButton
          difficultyMode={playerModeforTicTacToe}
          content={"Player"}
          setValueforBtn={setPlayerModeforTicTacToe}
        />
      </div>
      <button
        className="clearBoard"
        onClick={() => {
          navigate("/Botpage/TicTacToe");
        }}
      >
        Play Bot
      </button>
    </div>
  );
}
