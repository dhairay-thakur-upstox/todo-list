import React from "react";
import Todo from "./Todo";
import axios from "axios";

const baseURL = "http://localhost:8080/todos";

type Props = {
  todos: Array<TodoInterface>;
  setTodos: (todos: Array<TodoInterface>) => void;
};
interface TodoInterface {
  id: number;
  text: string;
  deleteHandler: (id: number) => void;
  editHandler: (id: number, newText: string) => void;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {
  const deleteHandler = (id: number) => {
    axios.delete(`${baseURL}?id=${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editHandler = (id: number, newText: string) => {
    axios.put(baseURL, {
      id,
      text: newText,
    });
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            id={todo.id}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
