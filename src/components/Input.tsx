import React, { ChangeEvent } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/todos";

interface TodoInterface {
  id: number;
  text: string;
}
type Props = {
  todo: string;
  todos: Array<TodoInterface>;
  setTodo: (val: string) => void;
};
type InputEvent = ChangeEvent<HTMLInputElement>;

const Input: React.FC<Props> = ({ setTodo, todo, todos }) => {
  const onSubmit = (e: InputEvent) => {
    setTodo(e.target.value);
  };
  const onSubmitTodo = () => {
    axios.post(baseURL, {
      id: todos.length + 1,
      text: todo,
    });
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
