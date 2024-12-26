import ListItem from "./ListItem";
import styles from "./List.module.css";
import { useState } from "react";

function List({ tasks }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const allTasks = tasks;
  const doneTasks = tasks.filter((task) => task.done);
  const todoTasks = tasks.filter((task) => !task.done);

  function handleAllTabClickListener() {
    setSelectedTab(0);
  }

  function handleDoneTabClickListener() {
    setSelectedTab(1);
  }

  function handleTodoTabClickListener() {
    setSelectedTab(2);
  }

  return (
    <div className={styles.container}>
      <h1>ToDoList</h1>
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
            <ListItem key={task.id} text={task.text} done={task.done} />
          ))}
        {selectedTab === 1 &&
          doneTasks.map((task) => (
            <ListItem key={task.id} text={task.text} done={task.done} />
          ))}
        {selectedTab === 2 &&
          todoTasks.map((task) => (
            <ListItem key={task.id} text={task.text} done={task.done} />
          ))}
      </ul>
    </div>
  );
}

export default List;
