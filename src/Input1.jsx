import React from "react";

export default function Input1(props) {
  const { todoval, setval, handleaddtodo } = props;
  return (
    <header className="input-container">
      <input
        className="todo-input"
        value={todoval}
        onChange={(e) => {
          setval(e.target.value);
        }}
        placeholder="Enter Todo"
      />
      <button
        className="add-btn"
        onClick={() => {
          handleaddtodo(todoval);
          setval("");
        }}
      >
        Add
      </button>
    </header>
  );
}
