import { createSelector } from 'reselect';

export const selectAllCards = (state) => state.cards.cards;
export const selectActiveBoard = (state) => state.kanbanboard.activeBoard;
export const selectBoards = (state) => state.boards.boards;

export const boardCardsSelector = createSelector(
  selectAllCards,
  selectActiveBoard,
  (cards, activeId) => cards.filter((card) => card.bid === activeId)
);

export const activeboardNameSelector = createSelector(
  selectBoards,
  selectActiveBoard,
  (boards, activeId) => boards.find((element) => element.bid === activeId)
);
