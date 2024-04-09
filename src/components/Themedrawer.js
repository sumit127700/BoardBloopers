import React from "react";

import "./css/Themedrawer.css";

const ThemeMenu = (props) => {
  var r = document.querySelector(":root");

  const changeTheme = (color) => {
    r.style.setProperty("--themecolor", color);
    props.setColor(color);
  };
  const changeThemeTeal = () => {
    changeTheme("teal");
  };
  const changeThemePurple = () => {
    changeTheme("purple");
  };
  const changeThemeBlue = () => {
    changeTheme("blue");
  };
  const changeThemeOrange = () => {
    changeTheme("orange");
  };
  const changeThemeGreen = () => {
    changeTheme("green");
  };
  const changeThemePink = () => {
    changeTheme("pink");
  };

  return (
    <div className="themedrawer">
      <div className="headerForTheme">Select Theme Color</div>
      <div className="buttonThemeContainer">
        {props.colorheading === "teal" ? (
          <button
            className="changeThemeButton tealbtn tealselected"
            onClick={changeThemeTeal}
          >
            Teal
          </button>
        ) : (
          <button
            className="changeThemeButton tealbtn"
            onClick={changeThemeTeal}
          >
            Teal
          </button>
        )}
        {props.colorheading === "orange" ? (
          <button
            className="changeThemeButton orangebtn orangeselected"
            onClick={changeThemeOrange}
          >
            Orange
          </button>
        ) : (
          <button
            className="changeThemeButton orangebtn"
            onClick={changeThemeOrange}
          >
            Orange
          </button>
        )}
      </div>
      <div className="buttonThemeContainer">
        {props.colorheading === "purple" ? (
          <button
            className="changeThemeButton purplebtn purpleselected"
            onClick={changeThemePurple}
          >
            Purple
          </button>
        ) : (
          <button
            className="changeThemeButton purplebtn"
            onClick={changeThemePurple}
          >
            Purple
          </button>
        )}
        {props.colorheading === "pink" ? (
          <button
            className="changeThemeButton pinkbtn pinkselected"
            onClick={changeThemePink}
          >
            Pink
          </button>
        ) : (
          <button
            className="changeThemeButton pinkbtn"
            onClick={changeThemePink}
          >
            Pink
          </button>
        )}
      </div>
      <div className="buttonThemeContainer">
        {props.colorheading === "blue" ? (
          <button
            className="changeThemeButton bluebtn blueselected"
            onClick={changeThemeBlue}
          >
            Blue
          </button>
        ) : (
          <button
            className="changeThemeButton bluebtn"
            onClick={changeThemeBlue}
          >
            Blue
          </button>
        )}
        {props.colorheading === "green" ? (
          <button
            className="changeThemeButton greenbtn greenselected"
            onClick={changeThemeGreen}
          >
            Green
          </button>
        ) : (
          <button
            className="changeThemeButton greenbtn"
            onClick={changeThemeGreen}
          >
            Green
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeMenu;
