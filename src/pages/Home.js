import ColumnButtons from "../components/ColumnButtons";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <ColumnButtons
        isFirstButton={true}
        isSecondButton={true}
        isThirdButton={true}
        isFourthButton={true}
        isFifthButton={false}
        firstButtonHandler={() => {
          navigate("/BotPage");
        }}
        secondButtonHandler={() => {
          navigate("/ComingSoon");
        }}
        thirdButtonHandler={() => {
          navigate("/ComingSoon");
        }}
        fourthButtonHandler={() => {
          navigate("/ThemePage");
        }}
        fifthButtonHandler={() => {}}
        firstButtonContent={"Play Bot"}
        secondButtonContent={"Play With Friends"}
        thirdButtonContent={"Add Friend"}
        fourthButtonContent={"Change Theme"}
        fifthButtonContent={""}
        fontFamilyValue={`cursive-font`}
      />
    </>
  );
}
export default Home;
