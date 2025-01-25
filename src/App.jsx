import Input1 from "./Input1";
import { useState, useEffect } from "react";
import List from "./list";
function App() {
  const [todos, settodos] = useState([]);
  const [todoval, setval] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  function handleaddtodo(newtodo) {
    if (!newtodo.trim()) {
      return;
    }
    const newtodolist = [...todos, newtodo];
    persistData(newtodolist);
    settodos(newtodolist);
  }

  function handleDeleteTodo(index) {
    const newTodo = todos.filter((todo, todoindex) => {
      return index != todoindex;
    });
    persistData(newTodo);
    settodos(newTodo);
  }
  function handleEditTodo(index) {
    const valtobeedited = todos[index];
    setval(valtobeedited);
    handleDeleteTodo(index);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos + "");
    localTodos = JSON.parse(localTodos).todos;
    settodos(localTodos);
  }, []);

  return (
    <div className="app-container">
      <Input1 todoval={todoval} setval={setval} handleaddtodo={handleaddtodo} />
      <List
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
