import { useState } from "react";
import styles from "./ListItem.module.css";
import editIcon from "../images/ic-edit.svg";
import deleteIcon from "../images/ic-delete.svg";

function ListItem({
  id,
  text,
  done,
  editMode,
  doneTask,
  onEditListener,
  handleDeleteTask,
}) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
    doneTask(id);
  }

  function handleEdit() {
    onEditListener({ id: id, text: text, done: done });
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
      <img src={editIcon} alt="edit-icon" onClick={handleEdit} />
      <img src={deleteIcon} alt="delete-icon" onClick={handleDelete} />
    </li>
  );
}

export default ListItem;
