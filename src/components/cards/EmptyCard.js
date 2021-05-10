import React from 'react';
import styles from './styles/EmptyCard.module.css';
import { AiOutlinePlus } from 'react-icons/ai';

function EmptyCard(props) {
  return (
    <div className={styles.container} {...props}>
      <AiOutlinePlus />
    </div>
  );
}

export default EmptyCard;
