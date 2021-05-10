import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  addCard,
  removeCard,
  selectAllCards,
  /* boardCardsSelector, */
} from './cardsSlice';

import { boardCardsSelector } from '../../app/selectors';
import { selectActiveBoard } from '../../container/KanbanBoard/kanbanboardSlice';

//component/containers
import Card from './Card';
import EmptyCard from './EmptyCard';

//styles
import styles from './styles/Cards.module.css';

function Cards() {
  const cards = useSelector(boardCardsSelector);
  const activeBoardId = useSelector(selectActiveBoard);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <Card key={index} text={card.name} cardObj={card} />
      ))}
      <EmptyCard onClick={() => dispatch(addCard(activeBoardId))} />
    </div>
  );
}

export default Cards;
