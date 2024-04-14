import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isSmallScreen: false,
};

export const sidebarDataSlice = createSlice({
  name: "sidebarData",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSmallScreen: (state, action) => {
      state.isSmallScreen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, setSmallScreen } = sidebarDataSlice.actions;

export default sidebarDataSlice.reducer;
