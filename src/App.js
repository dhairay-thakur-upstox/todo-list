import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
      </header>
      <Input todos={todos} setTodos={setTodos} setTodo={setTodo} todo={todo} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
