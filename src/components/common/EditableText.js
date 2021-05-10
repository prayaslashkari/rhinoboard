import React, { useState } from 'react';
import styles from '../common/styles/EditableText.module.css';
import cx from 'classnames';

function EditableText(props) {
  const [isEditing, setisEditing] = useState(false);
  return (
    <div>
      {!isEditing ? (
        <span
          className={cx(styles.editable_text_container)}
          onClick={() => setisEditing(true)}
        >
          {props.text}
        </span>
      ) : (
        <form onSubmit={() => setisEditing(false)}>
          <label>
            <input
              autoFocus
              className={cx(
                styles.editable_text_container,
                styles.editable_text_input
              )}
              type='text'
              name='name'
            />
          </label>
        </form>
      )}
    </div>
  );
}

export default EditableText;
