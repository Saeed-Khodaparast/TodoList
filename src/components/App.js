import Input from "./Input";
import List from "./List";
import Delete from "./Delete";
import Modal from "./Modal";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const [modal, setModal] = useState(false);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function doneTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  }

  function handleEditTask(id) {
    setEditMode(!editMode);
    //setTaskToEdit(tasks.find((task) => task.id === id));
    console.log("taskToEdit: ", taskToEdit);
  }

  function handleEditText(text) {
    setTasks(
      tasks.map((item) => {
        if (item.id === taskToEdit.id) {
          return { ...taskToEdit, text: text };
        }
        return item;
      })
    );
    setTaskToEdit({});
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
  }

  function handleDelete() {
    setModal(true);
  }

  return (
    <div className={styles.container}>
      <Input
        handleAddTask={handleAddTask}
        editMode={editMode}
        taskToEdit={taskToEdit}
        handleEditText={handleEditText}
      />
      <List
        tasks={tasks}
        editMode={editMode}
        doneTask={doneTask}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
      <Delete handleDelete={handleDelete} />
      <Modal modal={modal} />
    </div>
  );
}

export default App;
