import { useState } from "react";
import styles from "./ListItem.module.css";

function ListItem({
  id,
  text,
  done,
  doneTask,
  handleEditTask,
  handleDeleteTask,
}) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
    doneTask(id);
  }

  function handleEdit() {
    handleEditTask({ id: id, text: text, done: done });
  }

  function handleDelete() {
    handleDeleteTask(id);
  }

  return (
    <li className={styles.container}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={done}
        onChange={handleChange}
      />
      <p
        className={`${styles.text} ${done ? styles.done : ""}`}
        onClick={handleChange}
      >
        {text}{" "}
      </p>
      <img
        src={`{${process.env.PUBLIC_URL}/images/ic-edit.svg`}
        alt="edit-icon"
        onClick={handleEdit}
      />
      <img
        src={`{${process.env.PUBLIC_URL}/images/ic-delete.svg`}
        alt="delete-icon"
        onClick={handleDelete}
      />
    </li>
  );
}

export default ListItem;
