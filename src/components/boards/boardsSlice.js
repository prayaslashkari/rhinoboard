import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
uuidv4();

const initialState = {
  boards: [
    { bid: 10, id: 1, name: 'Board 1' },
    { bid: 11, id: 2, name: 'Board 2' },
  ],
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,

  reducers: {
    addBoard: (state) => {
      const lastIndex = state.boards.length - 1;
      const lastId = state.boards[lastIndex].id;

      state.boards.push({
        bid: uuidv4(),
        id: lastId + 1,
        name: `Board ${lastId + 1}`,
      });
    },
    removeBoard: (state) => {
      //
    },
  },
});

export const { addBoard, removeBoard } = boardsSlice.actions;

export const selectBoards = (state) => state.boards.boards;

export default boardsSlice.reducer;
