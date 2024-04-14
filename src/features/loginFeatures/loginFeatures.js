import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  checkingLogin: true,
  email: "",
  username: "",
};

export const loginDataSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCheckingLogin: (state, action) => {
      state.checkingLogin = action.payload;
    },
    setEmailId: (state, action) => {
      state.email = action.payload;
    },
    setUsernameId: (state, action) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setCheckingLogin, setEmailId, setUsernameId } =
  loginDataSlice.actions;

export default loginDataSlice.reducer;
