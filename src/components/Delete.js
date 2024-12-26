import styles from "./Delete.module.css";

function handleDoneClickListener() {
  alert("Delete done tasks clicked!");
}

function handleAllClickListener() {
  alert("Delete all tasks clicked!");
}

function Delete() {
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
