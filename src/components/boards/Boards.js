import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addBoard, removeBoard, selectBoards } from './boardsSlice';
import {
  selectActiveBoard,
  setActiveBoard,
} from '../../container/KanbanBoard/kanbanboardSlice';

import { activeboardNameSelector } from '../../app/selectors';

//component/containers
import AddBoardButton from '../common/AddBoardButton';
import BoardButton from '../common/BoardButton';

//styles
import styles from './styles/Boards.module.css';

function Boards() {
  const boards = useSelector(selectBoards);
  const activeboard = useSelector(activeboardNameSelector);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.active_board_header}>
          <h4>{activeboard.name}</h4>
        </div>
        <div className={styles.board_selector}>
          {boards.map((board, index) => (
            <BoardButton
              key={index}
              text={board.name}
              boardId={board.bid}
              onClick={() => dispatch(setActiveBoard(board.bid))}
            />
          ))}
          <AddBoardButton onClick={() => dispatch(addBoard())} />
        </div>
      </div>
    </div>
  );
}

export default Boards;
