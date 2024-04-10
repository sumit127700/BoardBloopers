import "./css/TicTacToe.css";
import "./css/General.css";
import { useNavigate } from "react-router-dom";

export default function DifficultyPageforChess({
  difficultyModeforChess,
  setDifficultyModeforChess,
  playerModeforChess,
  setPlayerModeforChess,
}) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="headerForBots">Select difficulty!</div>
      <div className="difficultyRow">
        {difficultyModeforChess == 1 ? (
          <button
            className="difficultySelectorButton selected"
            onClick={() => {
              setDifficultyModeforChess(1);
            }}
          >
            Level - 1
          </button>
        ) : (
          <button
            className="difficultySelectorButton"
            onClick={() => {
              setDifficultyModeforChess(1);
            }}
          >
            Level - 1
          </button>
        )}
        {difficultyModeforChess == 2 ? (
          <button
            className="difficultySelectorButton selected"
            onClick={() => {
              setDifficultyModeforChess(2);
            }}
          >
            Level - 2
          </button>
        ) : (
          <button
            className="difficultySelectorButton"
            onClick={() => {
              setDifficultyModeforChess(2);
            }}
          >
            Level - 2
          </button>
        )}
      </div>
      <div className="difficultyRow">
        {difficultyModeforChess == 3 ? (
          <button
            className="difficultySelectorButton selected"
            onClick={() => {
              setDifficultyModeforChess(3);
            }}
          >
            Level - 3
          </button>
        ) : (
          <button
            className="difficultySelectorButton"
            onClick={() => {
              setDifficultyModeforChess(3);
            }}
          >
            Level - 3
          </button>
        )}
        {difficultyModeforChess == 4 ? (
          <button
            className="difficultySelectorButton selected"
            onClick={() => {
              setDifficultyModeforChess(4);
            }}
          >
            Level - 4
          </button>
        ) : (
          <button
            className="difficultySelectorButton"
            onClick={() => {
              setDifficultyModeforChess(4);
            }}
          >
            Level - 4
          </button>
        )}
      </div>
      <button
        className="clearBoard"
        onClick={() => {
          navigate("/Botpage/ChessBot");
        }}
      >
        Play Bot
      </button>
    </div>
  );
}
