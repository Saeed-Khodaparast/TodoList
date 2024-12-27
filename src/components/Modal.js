import styles from "./Modal.module.css";

function Modal({ modal }) {
  return (
    <div className={`${styles.overlay} ${modal ? styles.open : ""}`}>
      <div className={styles.container}>
        <p>Are you sure you want to delete this task?</p>
        <div className={styles.btnBar}>
          <button className={styles.btn}>CANCEL</button>
          <button className={styles.btn}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
