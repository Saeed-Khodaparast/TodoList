import Input from "./Input";
import List from "./List";
import Delete from "./Delete";
import Modal from "./Modal";
import styles from "./App.module.css";
import menuIcon from "../images/ic-menu.svg";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editMode, setEditMode] = useState({
    isActive: false,
    text: null,
    id: 0,
    textBeforeEdit: null,
  });
  const [modal, setModal] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleAddEditListener(task) {
    if (editMode.isActive) {
      setTasks(
        tasks.map((task) => {
          if (task.id === editMode.id) {
            task = { ...task, text: text };
            setText(editMode.textBeforeEdit);
            setEditMode({
              isActive: false,
              text: null,
              id: 0,
              textBeforeEdit: null,
            });
            return task;
          }
          return task;
        })
      );

      return;
    }

    setTasks([...tasks, task]);
    setText("");
  }

  function doneTask(id) {
    if (editMode) return;
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  }

  function handleClearListener() {
    setText("");
  }

  function handleChangeListener(e) {
    setText(e.target.value);
  }

  function handleEditListener(task) {
    setEditMode({
      ...editMode,
      id: task.id,
      textBeforeEdit: text,
      isActive: !editMode.isActive,
    });
    setText(!editMode.isActive ? task.text : editMode.textBeforeEdit);
  }

  function handleDeleteTask(id) {
    if (editMode.isActive) return;
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleDelete() {
    if (editMode.isActive) return;
    setModal(true);
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.menuIcon}
        src={menuIcon}
        alt=""
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      />
      <aside
        className={`${styles.sideBar} ${isSideBarOpen ? styles.open : ""}`}
      ></aside>
      <Input
        text={text}
        onChangeListener={handleChangeListener}
        onAddEditListener={handleAddEditListener}
        onClearListener={handleClearListener}
        editMode={editMode}
      />
      <List
        tasks={tasks}
        editMode={editMode}
        doneTask={doneTask}
        onEditListener={handleEditListener}
        handleDeleteTask={handleDeleteTask}
      />
      <Delete handleDelete={handleDelete} />
      <Modal modal={modal} />
    </div>
  );
}

export default App;
