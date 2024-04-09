import "./css/TicTacToe.css";
import "./css/General.css";
import { useNavigate } from "react-router-dom";

function TrueSelectorButton({ difficultyMode, content, setValueforBtn }) {
  if (difficultyMode)
    return (
      <button
        className="difficultySelectorButton selected"
        onClick={() => {
          setValueforBtn(true);
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
          setValueforBtn(true);
        }}
      >
        {content}
      </button>
    );
  }
}
function FalseSelectorButton({ difficultyMode, content, setValueforBtn }) {
  if (difficultyMode)
    return (
      <button
        className="difficultySelectorButton"
        onClick={() => {
          setValueforBtn(false);
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
          setValueforBtn(false);
        }}
      >
        {content}
      </button>
    );
  }
}
export default function DifficultyPageforTicTacToe({
  difficultyModeforTicTacToe,
  setDifficultyModeforTicTacToe,
  playerModeforTicTacToe,
  setPlayerModeforTicTacToe,
}) {
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
