import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficultyModeforTicTacToe: true,
  playerModeforTicTacToe: true,
  difficultyModeforChess: 1,
};

export const boardgameSlice = createSlice({
  name: "boardgame",
  initialState,
  reducers: {
    setDifficultyModeforTicTacToe: (state, action) => {
      state.difficultyModeforTicTacToe = action.payload;
    },
    setPlayerModeforTicTacToe: (state, action) => {
      state.playerModeforTicTacToe = action.payload;
    },
    setDifficultyModeforChess: (state, action) => {
      state.difficultyModeforChess = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDifficultyModeforChess,
  setDifficultyModeforTicTacToe,
  setPlayerModeforTicTacToe,
} = boardgameSlice.actions;

export default boardgameSlice.reducer;
