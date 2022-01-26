import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo text={todo.text} key={todo.id} id={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
