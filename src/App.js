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
import DifficultyPageforChess from "./Bots/DifficultyPageforChess";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsLoggedIn,
  setCheckingLogin,
  setEmailId,
  setUsernameId,
} from "./features/loginFeatures/loginFeatures";

const App = () => {
  const [username, setUsername] = useState("defaultUser");
  const [isloggedin, setisloggedin] = useState(false);
  const [checkinglogin, setcheckinglogin] = useState(false);
  const [email, setEmail] = useState("defaultUser");
  const [theme, setTheme] = useState("teal");
  const isOpen = useSelector((state) => state.sidebarData.isOpen);
  const [difficultyModeforTicTacToe, setDifficultyModeforTicTacToe] =
    useState(true);
  const [playerModeforTicTacToe, setPlayerModeforTicTacToe] = useState(true);
  const [difficultyModeforChess, setDifficultyModeforChess] = useState(1);
  const [playerModeforChess, setPlayerModeforChess] = useState(true);
  const [progressbar, setprogressbar] = useState(false);
  const [colorheading, setColor] = useState("teal");
  const [isSmallScreen, setSmallScreen] = useState("false");
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        setUsername(user.displayName);
        setEmail(user.email);
        setisloggedin(true);
        setcheckinglogin(false);
        dispatch(setIsLoggedIn(true));
        dispatch(setCheckingLogin(false));
        dispatch(setEmailId(user.email));
        dispatch(setUsernameId(user.displayName));

        // ...
      } else {
        // User is signed out
        // ...
        setUsername("User");
        setEmail("defaultUserMail");
        setisloggedin(false);
        setcheckinglogin(false);
        dispatch(setIsLoggedIn(false));
        dispatch(setCheckingLogin(false));
        dispatch(setEmailId(""));
        dispatch(setUsernameId(""));
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className={isOpen ? "Content" : "Content OpenContent"}>
          <Navbar />

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
                    difficultyModeforChess={difficultyModeforChess}
                    setDifficultyModeforChess={setDifficultyModeforChess}
                    playerModeforChess={playerModeforChess}
                    setPlayerModeforChess={setPlayerModeforChess}
                    component={ChessBot}
                  />
                }
              />
              <Route
                path="DifficultyPageforChess"
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
                    difficultyModeforChess={difficultyModeforChess}
                    setDifficultyModeforChess={setDifficultyModeforChess}
                    playerModeforChess={playerModeforChess}
                    setPlayerModeforChess={setPlayerModeforChess}
                    component={DifficultyPageforChess}
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
