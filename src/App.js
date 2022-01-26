import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
import axios from "axios";

const baseURL = "http://localhost:8080/todos";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTodos(response.data);
    });
  }, [todos]);
  if (!todos) return null;

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
