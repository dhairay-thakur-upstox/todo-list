import React from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/todos";

const Input = ({ setTodo, setTodos, todos, todo }) => {
  const onSubmit = (e) => {
    setTodo(e.target.value);
  };
  const onSubmitTodo = (e) => {
    // e.preventDefault();
    axios.post(baseURL, {
      id: todo.length + 1,
      text: todo,
    });
    // setTodos([
    //   ...todos,
    //   { text: todo, isCompleted: false, id: todos.length + 1 },
    // ]);
    setTodo("");
  };
  return (
    <form>
      <input
        value={todo}
        type="text"
        className="todo-input"
        onChange={onSubmit}
      />
      <button className="todo-button" type="submit" onClick={onSubmitTodo}>
        <i className="fas fa-plus-circle"></i>
      </button>
    </form>
  );
};

export default Input;
