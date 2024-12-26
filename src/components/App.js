import Input from "./Input";
import List from "./List";
import Delete from "./Delete";
import styles from "./App.module.css";

const tasks = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Buy bread", done: true },
  { id: 3, text: "Buy butter", done: false },
];

function App() {
  return (
    <div className={styles.container}>
      <Input />
      <List tasks={tasks} />
      <Delete />
    </div>
  );
}

export default App;
