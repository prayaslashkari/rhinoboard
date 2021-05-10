import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
uuidv4();

const initialState = {
  cards: [
    {
      cid: 1,
      name: 'Card 1',
      bid: 10,
      text: 'This is the board 1 card 1',
      tasks: [1, 2, 3],
    },
    { cid: 2, name: 'Card 2', bid: 11 },
    { cid: 1, name: 'Card 1', bid: 10 },
    { cid: 2, name: 'Card 2', bid: 11 },
    { cid: 1, name: 'Card 1', bid: 10 },
    { cid: 2, name: 'Card 2', bid: 10 },
  ],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,

  reducers: {
    addCard: (state, action) => {
      let activeBoardId = action.payload;

      let filtered = state.cards.filter(
        (element) => element.bid === activeBoardId
      );

      const loopforMinMax = () => {
        let max = filtered[0] ? filtered[0].cid : 0;

        for (let i = 1; i < filtered.length; i++) {
          let value = filtered[i].cid;
          max = value > max ? value : max;
        }

        return max;
      };

      let maxValue = loopforMinMax();

      console.log(maxValue);

      state.cards.push({
        cid: maxValue + 1,
        name: `Card ${maxValue + 1}`,
        bid: activeBoardId,
      });
    },
    removeCard: (state) => {
      state.value -= 1;
    },

    editCardTitle: (state, action) => {},
  },
});

export const { addCard, removeCard } = cardsSlice.actions;

export const selectAllCards = (state) => state.cards.cards;
export const selectActiveBoard = (state) => state.kanbanboard.activeBoard;
//createSelectors

export const boardCardsSelector = createSelector(
  selectAllCards,
  selectActiveBoard,
  (cards, activeId) => cards.filter((card) => card.bid === activeId)
);

export default cardsSlice.reducer;
