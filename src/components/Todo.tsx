import React, { useState, ChangeEvent } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";

const baseURL = "http://localhost:8080/todos";

type Props = {
  id: number;
  text: string;
};
type InputEvent = ChangeEvent<HTMLInputElement>;
type CloseFunction = () => void;

const Todo: React.FC<Props> = ({ id, text }) => {
  const [newText, setNewText] = useState<string>(text);
  const deleteHandler = () => {
    axios.delete(`${baseURL}?id=${id}`);
  };
  const editHandler = (close: CloseFunction) => {
    close();
    axios.put(baseURL, {
      id,
      text: newText,
    });
  };
  const handleChange = (e: InputEvent) => {
    setNewText(e.target.value);
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn" onClick={deleteHandler}>
        <i className="fas fa-check"></i>
      </button>
      <Popup
        closeOnEscape
        closeOnDocumentClick
        modal
        trigger={
          <button className="edit-btn">
            <i className="fas fa-edit"></i>
          </button>
        }
      >
        {(close: CloseFunction) => (
          <div className="edit-container">
            <input
              className="edit-input"
              type="text"
              value={newText}
              onChange={handleChange}
              placeholder="Edit ToDo"
            />
            <button
              className="complete-btn-edit"
              onClick={() => editHandler(close)}
            >
              <i className="fas fa-check"></i>
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Todo;
