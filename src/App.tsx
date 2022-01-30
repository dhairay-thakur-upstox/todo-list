import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
import axios from "axios";

const baseURL = "http://localhost:8080/todos";

interface TodoInterface {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<TodoInterface>>([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(baseURL);
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
    return () => {
      setTodos([]);
    };
  }, []);
  if (!todos) return null;

  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
      </header>
      <Input todos={todos} setTodo={setTodo} todo={todo} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
