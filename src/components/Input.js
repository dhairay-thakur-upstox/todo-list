import React from "react";

const Input = ({ setTodo, setTodos, todos, todo }) => {
  const onSubmit = (e) => {
    setTodo(e.target.value);
  };
  const onSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: todo, isCompleted: false, id: todos.length + 1 },
    ]);
    setTodo("");
    console.log(todos);
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
