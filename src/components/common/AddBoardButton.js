import React from 'react';
import styles from '../common/styles/BoardButton.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

function AddBoardButton(props) {
  return (
    <div className={styles.add_board_button} {...props}>
      <AiOutlinePlus />
    </div>
  );
}

export default AddBoardButton;
