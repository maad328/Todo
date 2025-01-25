import React from "react";

export default function Card(props) {
  const { children, index, handleEditTodo, handleDeleteTodo } = props;
  return (
    <li className="todo-card">
      {children}
      <div className="actions-container">
        <button
          className="edit-btn"
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
