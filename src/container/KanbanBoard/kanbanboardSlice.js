import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeBoard: 10,
  theme: 'light', //light/dark
  user: {
    token: 'random',
    username: 'Prayas',
    email: 'prayaslashkari98@gmail.com',
    displayPicture: 'url',
  },

  settings: true,
  maxCardsPerBoard: 5,
};

export const kanbanboardSlice = createSlice({
  name: 'kanbanboard',
  initialState,

  reducers: {
    setActiveBoard: (state, action) => {
      state.activeBoard = action.payload;
    },
  },
});

export const { setActiveBoard } = kanbanboardSlice.actions;

export const selectActiveBoard = (state) => state.kanbanboard.activeBoard;

export default kanbanboardSlice.reducer;
