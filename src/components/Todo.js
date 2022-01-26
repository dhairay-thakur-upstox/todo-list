import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Todo = ({ id, text }) => {
  const [newText, setNewText] = useState(text);
  const deleteHandler = () => {
    console.log(id);
  };
  const editHandler = () => {
    console.log(newText);
  };
  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn" onClick={deleteHandler}>
        <i className="fas fa-check"></i>
      </button>
      <Popup
        modal
        nested
        trigger={
          <button className="edit-btn">
            <i className="fas fa-edit"></i>
          </button>
        }
        position="right"
      >
        <input
          className="edit-input"
          type="text"
          value={newText}
          onChange={handleChange}
          placeholder="Edit ToDo"
        />
        <button className="complete-btn-edit" onClick={editHandler}>
          <i className="fas fa-check"></i>
        </button>
      </Popup>
    </div>
  );
};

export default Todo;
