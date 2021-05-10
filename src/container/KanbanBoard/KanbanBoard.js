import React from 'react';
import Cards from '../../components/cards/Cards';
import Boards from '../../components/boards/Boards';

import styles from './styles/KanbanBoard.module.css';

function KanbanBoard() {
  return (
    <div className={styles.container}>
      <Boards />
      <Cards />
    </div>
  );
}

export default KanbanBoard;
