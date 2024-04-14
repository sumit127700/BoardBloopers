import { configureStore } from "@reduxjs/toolkit";
import loginDataReducers from "../features/loginFeatures/loginFeatures";
import sidebarDataReducers from "../features/sidebarFeatures/sidebarFeatures";
export const store = configureStore({
  reducer: {
    loginData: loginDataReducers,
    sidebarData: sidebarDataReducers,
  },
});
