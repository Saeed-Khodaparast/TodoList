import { useState } from "react";
import styles from "./Input.module.css";
import editBoxIconBlack from "../images/ic-edit-box-black.svg";
import editBoxIconWhite from "../images/ic-edit-box-white.svg";
import clearIcon from "../images/ic-close.svg";

function Input({
  text,
  onChangeListener,
  onAddEditListener,
  editMode,
  onClearListener,
}) {
  function handleAddEditListener(e) {
    onAddEditListener({ id: Date.now(), text: text, done: false });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ToDoInput</h2>
      <div className={styles.innerContainer}>
        <div className={styles.inputContainer}>
          <img
            className={`${styles.startIcon} ${
              editMode.isActive ? styles.startIconEdit : ""
            }`}
            src={editMode.isActive ? editBoxIconBlack : editBoxIconWhite}
            alt="todo-icon"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="New Todo"
            value={text}
            onChange={onChangeListener}
          />
          <img
            className={styles.clearIcon}
            src={clearIcon}
            alt="clear-icon"
            onClick={onClearListener}
          />
        </div>
        <button
          className={`${styles.button} ${
            editMode.isActive ? styles.buttonEdit : ""
          }`}
          onClick={handleAddEditListener}
        >
          {editMode.isActive ? "Edit Task" : "Add new Task"}
        </button>
      </div>
    </div>
  );
}

export default Input;
