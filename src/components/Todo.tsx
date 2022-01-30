import React, { useState, ChangeEvent } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

type Props = {
  id: number;
  text: string;
  deleteHandler: (id: number) => void;
  editHandler: (id: number, newText: string) => void;
};
type InputEvent = ChangeEvent<HTMLInputElement>;
type CloseFunction = () => void;

const Todo: React.FC<Props> = ({ id, text, deleteHandler, editHandler }) => {
  const [newText, setNewText] = useState<string>(text);

  const handleChange = (e: InputEvent) => {
    setNewText(e.target.value);
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn" onClick={() => deleteHandler(id)}>
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
              onClick={() => {
                editHandler(id, newText);
                close();
              }}
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
