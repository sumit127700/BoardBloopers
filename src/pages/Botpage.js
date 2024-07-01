import ColumnButtons from "../components/ColumnButtons";

import { useNavigate } from "react-router-dom";

function BotPage() {
  const navigate = useNavigate();
  return (
    <ColumnButtons
      isFirstButton={false}
      isSecondButton={true}
      isThirdButton={false}
      isFourthButton={false}
      isFifthButton={false}
      firstButtonHandler={() => {
        navigate("DifficultyPageforTicTacToe");
      }}
      secondButtonHandler={() => {
        navigate("DifficultyPageforChess");
      }}
      thirdButtonHandler={true}
      fouthButtonHandler={false}
      fifthButtonHandler={false}
      firstButtonContent={"TIC TAC TOE"}
      secondButtonContent={"CHESSBOT"}
      thirdButtonContent={"jpg"}
      fourthButtonContent={"jkfdf"}
      fifthButtonContent={"gdsuh"}
      fontFamilyValue={`orbitron-font`}
    />
  );
}
export default BotPage;
