import React from 'react';
import { useSelector } from 'react-redux';

import { selectActiveBoard } from '../../container/KanbanBoard/kanbanboardSlice';

//styles
import styles from './styles/BoardButton.module.css';

function BoardButton(props) {
  const activeBoard = useSelector(selectActiveBoard);

  return (
    <div
      className={
        activeBoard === props.boardId
          ? styles.board_button_active
          : styles.board_button
      }
      {...props}
    >
      {props.text}
    </div>
  );
}

export default BoardButton;
