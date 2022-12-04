import React from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([
  ]);
  return (
    <>
    <p>Created by Joydeep Das with ❤❤</p>
    <h1>To-do list</h1>
    <AddToDo setToDos={setToDos}/>
    <ToDoList toDos={toDos} setToDos={setToDos}/>
    </>
  );
}
export default App;