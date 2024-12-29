import ListItem from "./ListItem";
import styles from "./List.module.css";
import { useState } from "react";

function List({ tasks, editMode, doneTask, onEditListener, handleDeleteTask }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const allTasks = tasks;
  const doneTasks = tasks.filter((task) => task.done);
  const todoTasks = tasks.filter((task) => !task.done);

  function handleAllTabClickListener() {
    if (editMode.isActive) return;
    setSelectedTab(0);
  }

  function handleDoneTabClickListener() {
    if (editMode.isActive) return;
    setSelectedTab(1);
  }

  function handleTodoTabClickListener() {
    if (editMode.isActive) return;
    setSelectedTab(2);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ToDoList</h2>
      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${selectedTab === 0 ? styles.active : ""}`}
          onClick={handleAllTabClickListener}
        >
          All
          <span
            className={`${styles.span} ${styles.all} ${
              allTasks.length > 0 ? styles.active : ""
            }`}
          >
            {allTasks.length < 1000 ? allTasks.length : "+999"}
          </span>
        </button>
        <button
          className={`${styles.tab} ${selectedTab === 1 ? styles.active : ""}`}
          onClick={handleDoneTabClickListener}
        >
          Done
          <span
            className={`${styles.span} ${
              doneTasks.length > 0 ? styles.active : ""
            }`}
          >
            {doneTasks.length < 1000 ? doneTasks.length : "+999"}
          </span>
        </button>
        <button
          className={`${styles.tab} ${selectedTab === 2 ? styles.active : ""}`}
          onClick={handleTodoTabClickListener}
        >
          Todo
          <span
            className={`${styles.span} ${
              todoTasks.length > 0 ? styles.active : ""
            }`}
          >
            {todoTasks.length < 1000 ? todoTasks.length : "+999"}
          </span>
        </button>
      </div>
      <ul>
        {selectedTab === 0 &&
          allTasks.map((task) => (
            <ListItem
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              editMode={editMode}
              doneTask={doneTask}
              onEditListener={onEditListener}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        {selectedTab === 1 &&
          doneTasks.map((task) => (
            <ListItem
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              editMode={editMode}
              doneTask={doneTask}
              onEditListener={onEditListener}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        {selectedTab === 2 &&
          todoTasks.map((task) => (
            <ListItem
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              editMode={editMode}
              doneTask={doneTask}
              onEditListener={onEditListener}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </ul>
    </div>
  );
}

export default List;
