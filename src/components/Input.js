import { useState } from "react";
import styles from "./Input.module.css";

function Input({ handleAddTask, editMode, taskToEdit, handEditText }) {
  const [text, setText] = useState("");

  function handleAddClickEvent(e) {
    if (!text.trim()) {
      setText("");
      return;
    }

    if (editMode) {
      handEditText(text);
      return;
    }

    handleAddTask({ id: Date.now(), text: text, done: false });
    setText("");
  }

  function handleClearClickEvent() {
    setText("");
  }

  if (editMode) {
    setText(taskToEdit.text);
  }

  return (
    <>
      <h1 className={styles.title}>ToDoInput</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <img
            className={`${styles.startIcon} ${
              editMode ? styles.startIconEdit : ""
            }`}
            src={`{${process.env.PUBLIC_URL}/images/ic-edit-box.svg`}
            alt="todo-icon"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="New Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <img
            className={styles.clearIcon}
            src={`{${process.env.PUBLIC_URL}/images/ic-close.svg`}
            alt="clear-icon"
            onClick={handleClearClickEvent}
          />
        </div>
        <button
          className={`${styles.button} ${editMode ? styles.buttonEdit : ""}`}
          onClick={handleAddClickEvent}
        >
          {editMode ? "Edit Task" : "Add new Task"}
        </button>
      </div>
    </>
  );
}

export default Input;
