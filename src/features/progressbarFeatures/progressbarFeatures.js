import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProgressBar: false,
};

export const progressbarSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers: {
    setProgressBar: (state, action) => {
      state.isProgressBar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProgressBar } = progressbarSlice.actions;

export default progressbarSlice.reducer;
