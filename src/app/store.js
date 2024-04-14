import { configureStore } from "@reduxjs/toolkit";
import loginDataReducers from "../features/loginFeatures/loginFeatures";
import sidebarDataReducers from "../features/sidebarFeatures/sidebarFeatures";
import boardgameReducers from "../features/boardgameFeatures/boardgameFeatures";
import progressbarReducers from "../features/progressbarFeatures/progressbarFeatures";
import themeReducers from "../features/themeFeatures/themeFeatures";
export const store = configureStore({
  reducer: {
    loginData: loginDataReducers,
    sidebarData: sidebarDataReducers,
    progressBar: progressbarReducers,
    boardgame: boardgameReducers,
    theme: themeReducers,
  },
});
