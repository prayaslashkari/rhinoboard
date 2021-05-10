import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import boardsReducer from '../components/boards/boardsSlice';
import cardsReducer from '../components/cards/cardsSlice';
import kanbanboardReducer from '../container/KanbanBoard/kanbanboardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    boards: boardsReducer,
    cards: cardsReducer,
    kanbanboard: kanbanboardReducer,
  },
});
