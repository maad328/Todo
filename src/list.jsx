import React from "react";
import Card from "./Card";

export default function List(props) {
  const { todos } = props;
  return (
    <div className="list-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Card {...props} key={index} index={index}>
            <p className="todo-text">{todo}</p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
