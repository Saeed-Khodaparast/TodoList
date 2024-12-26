import styles from "./Input.module.css";

function handleClearClickEvent() {
  alert("Clear button clicked!");
}

function handleAddClickEvent() {
  alert("Add button clicked!");
}

function Input() {
  return (
    <>
      <h1 className={styles.title}>ToDoInput</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <img
            className={styles.startIcon}
            src="./images/ic-edit-box.svg"
            alt="todo-icon"
          />
          <input className={styles.input} type="text" placeholder="New Todo" />
          <img
            className={styles.clearIcon}
            src="./images/ic-close.svg"
            alt="clear-icon"
            onClick={handleClearClickEvent}
          />
        </div>
        <button className={styles.button} onClick={handleAddClickEvent}>
          Add new Task
        </button>
      </div>
    </>
  );
}

export default Input;
