import "./css/ColumnButtons.css";

function ColumnButtons(props) {
  return (
    <div className="ColumnButtons">
      <div className="card">
        <div className="button-col">
          {props.isFirstButton ? (
            <button
              className={props.fontFamilyValue}
              onClick={props.firstButtonHandler}
            >
              {props.firstButtonContent}
            </button>
          ) : (
            <></>
          )}
          {props.isSecondButton ? (
            <button
              className={props.fontFamilyValue}
              onClick={props.secondButtonHandler}
            >
              {props.secondButtonContent}
            </button>
          ) : (
            <></>
          )}
          {props.isThirdButton ? (
            <button
              className={props.fontFamilyValue}
              onClick={props.thirdButtonHandler}
            >
              {props.thirdButtonContent}
            </button>
          ) : (
            <></>
          )}
          {props.isFourthButton ? (
            <button
              className={props.fontFamilyValue}
              onClick={props.fourthButtonHandler}
            >
              {props.fourthButtonContent}
            </button>
          ) : (
            <></>
          )}
          {props.isFifthButton ? (
            <button
              className={props.fontFamilyValue}
              onClick={props.fifthButtonHandler}
            >
              {props.fifthButtonContent}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default ColumnButtons;
