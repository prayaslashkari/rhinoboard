import React, { useState, useEffect } from 'react';

import EditableText from '../common/EditableText';
import styles from './styles/Card.module.css';

import cx from 'classnames';

function Card(props) {
  return (
    <div className={styles.container} {...props}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <EditableText text={props.text} />
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi eum
        suscipit libero quo, officiis mollitia esse? Voluptas ratione dicta
        dolorum, illum, voluptate magnam maiores, expedita quaerat accusantium
        veritatis fuga enim.
      </div>
    </div>
  );
}

export default Card;
