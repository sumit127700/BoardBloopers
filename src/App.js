import React, { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Snackbars from "./components/Snackbars";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Friends from "./pages/FriendPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import Protected from "./pages/Protected";
import ThemePage from "./pages/Theme";
import BotPage from "./pages/Botpage";
import TicTacToe from "./Bots/TicTacToe";
import DifficultyPageforTicTacToe from "./Bots/DifficultyPageforTicTacToe";
import ComingSoon from "./components/ComingSoon";
import ChessBot from "./Bots/ChessBot";
import ChessGame from "./Bots/NewChessBot/ChessGame";
const App = () => {
  const [username, setUsername] = useState("defaultUser");
  const [isloggedin, setisloggedin] = useState(false);
  const [checkinglogin, setcheckinglogin] = useState(false);
  const [email, setEmail] = useState("defaultUser");
  const [theme, setTheme] = useState("teal");
  const [isOpen, setIsOpen] = useState(true);
  const [difficultyModeforTicTacToe, setDifficultyModeforTicTacToe] =
    useState(true);
  const [playerModeforTicTacToe, setPlayerModeforTicTacToe] = useState(true);
  const [progressbar, setprogressbar] = useState(false);
  const [colorheading, setColor] = useState("teal");
  const [isSmallScreen, setSmallScreen] = useState("false");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        setUsername(user.displayName);
        setEmail(user.email);
        setisloggedin(true);
        setcheckinglogin(false);

        // ...
      } else {
        // User is signed out
        // ...
        setUsername("User");
        setEmail("defaultUserMail");
        setisloggedin(false);
        setcheckinglogin(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar
          isOpen={isOpen}
          toggle={toggle}
          isloggedin={isloggedin}
          isSmallScreen={isSmallScreen}
          setSmallScreen={setSmallScreen}
        />
        <div className={isOpen ? "Content" : "Content OpenContent"}>
          <Navbar
            isOpen={isOpen}
            toggle={toggle}
            username={username}
            setUsername={setUsername}
            isloggedin={isloggedin}
          />

          {progressbar ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress color="success" />
            </Box>
          ) : (
            <></>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ComingSoon" element={<ComingSoon />} />
            <Route path="/Botpage">
              <Route path="" element={<BotPage />} />
              <Route
                path="DifficultyPageforTicTacToe"
                element={
                  <Protected
                    progressbar={progressbar}
                    setprogressbar={setprogressbar}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    isloggedin={isloggedin}
                    checkinglogin={checkinglogin}
                    difficultyModeforTicTacToe={difficultyModeforTicTacToe}
                    setDifficultyModeforTicTacToe={
                      setDifficultyModeforTicTacToe
                    }
                    playerModeforTicTacToe={playerModeforTicTacToe}
                    setPlayerModeforTicTacToe={setPlayerModeforTicTacToe}
                    component={DifficultyPageforTicTacToe}
                  />
                }
              />
              <Route
                path="TicTacToe"
                element={
                  <Protected
                    progressbar={progressbar}
                    setprogressbar={setprogressbar}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    isloggedin={isloggedin}
                    checkinglogin={checkinglogin}
                    difficultyModeforTicTacToe={difficultyModeforTicTacToe}
                    setDifficultyModeforTicTacToe={
                      setDifficultyModeforTicTacToe
                    }
                    playerModeforTicTacToe={playerModeforTicTacToe}
                    setPlayerModeforTicTacToe={setPlayerModeforTicTacToe}
                    component={TicTacToe}
                  />
                }
              />
              <Route
                path="ChessBot"
                element={
                  <Protected
                    progressbar={progressbar}
                    setprogressbar={setprogressbar}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    isloggedin={isloggedin}
                    checkinglogin={checkinglogin}
                    difficultyModeforTicTacToe={difficultyModeforTicTacToe}
                    setDifficultyModeforTicTacToe={
                      setDifficultyModeforTicTacToe
                    }
                    playerModeforTicTacToe={playerModeforTicTacToe}
                    setPlayerModeforTicTacToe={setPlayerModeforTicTacToe}
                    component={ChessBot}
                  />
                }
              />

              <Route
                path="NewChessBot"
                element={
                  <Protected
                    progressbar={progressbar}
                    setprogressbar={setprogressbar}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    isloggedin={isloggedin}
                    checkinglogin={checkinglogin}
                    difficultyModeforTicTacToe={difficultyModeforTicTacToe}
                    setDifficultyModeforTicTacToe={
                      setDifficultyModeforTicTacToe
                    }
                    playerModeforTicTacToe={playerModeforTicTacToe}
                    setPlayerModeforTicTacToe={setPlayerModeforTicTacToe}
                    component={ChessGame}
                  />
                }
              />
            </Route>
            <Route
              path="/LoginPage"
              element={
                <LoginPage
                  progressbar={progressbar}
                  setprogressbar={setprogressbar}
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                />
              }
            />
            <Route
              path="/SignupPage"
              element={
                <Signup
                  progressbar={progressbar}
                  setprogressbar={setprogressbar}
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                />
              }
            />
            <Route
              path="/AccountPage"
              element={
                <Protected
                  progressbar={progressbar}
                  setprogressbar={setprogressbar}
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  isloggedin={isloggedin}
                  checkinglogin={checkinglogin}
                  component={AccountPage}
                />
              }
            />
            <Route
              path="/Friends"
              element={
                <Protected
                  progressbar={progressbar}
                  setprogressbar={setprogressbar}
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  isloggedin={isloggedin}
                  checkinglogin={checkinglogin}
                  component={Friends}
                />
              }
            />

            <Route
              path="/ThemePage"
              element={
                <ThemePage
                  theme={theme}
                  settheme={setTheme}
                  colorheading={colorheading}
                  setColor={setColor}
                />
              }
            />
          </Routes>
        </div>
        <Snackbars />
      </div>
    </BrowserRouter>
  );
};

export default App;
