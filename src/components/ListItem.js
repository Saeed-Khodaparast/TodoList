import styles from "./ListItem.module.css";

function ListItem({ id, text, done }) {
  return (
    <li className={styles.container}>
      <input type="checkbox" name="checkbox" id="checkbox" checked={done} />
      <p className={`${styles.text} ${done ? styles.done : ""}`}>{text}</p>
      <img src="./images/ic-edit.svg" alt="edit-icon" />
      <img src="./images/ic-delete.svg" alt="delete-icon" />
    </li>
  );
}

export default ListItem;
