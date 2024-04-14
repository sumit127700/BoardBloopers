import React from "react";
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
  const isOpen = useSelector((state) => state.sidebarData.isOpen);
  const progressbar = useSelector((state) => state.progressBar.isProgressBar);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        dispatch(setIsLoggedIn(true));
        dispatch(setCheckingLogin(false));
        dispatch(setEmailId(user.email));
        dispatch(setUsernameId(user.displayName));
        // ...
      } else {
        // User is signed out
        // ...
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
                element={<Protected component={DifficultyPageforTicTacToe} />}
              />
              <Route
                path="TicTacToe"
                element={<Protected component={TicTacToe} />}
              />
              <Route
                path="ChessBot"
                element={<Protected component={ChessBot} />}
              />
              <Route
                path="DifficultyPageforChess"
                element={<Protected component={DifficultyPageforChess} />}
              />
            </Route>
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignupPage" element={<Signup />} />
            <Route
              path="/AccountPage"
              element={<Protected component={AccountPage} />}
            />
            <Route
              path="/Friends"
              element={<Protected component={Friends} />}
            />

            <Route path="/ThemePage" element={<ThemePage />} />
          </Routes>
        </div>
        <Snackbars />
      </div>
    </BrowserRouter>
  );
};

export default App;
