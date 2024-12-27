import styles from "./Delete.module.css";

function Delete({ handleDelete }) {
  function handleDoneClickListener() {
    handleDelete();
  }

  function handleAllClickListener() {
    handleDelete();
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleDoneClickListener}>
        Delete done tasks
      </button>
      <button className={styles.btn} onClick={handleAllClickListener}>
        Delete all tasks
      </button>
    </div>
  );
}

export default Delete;
