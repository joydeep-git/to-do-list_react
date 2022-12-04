import React from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([
  ]);
  return (
    <>
    <p>This To-Do app created by Joydeep Das, using HTML, CSS, Javascript and React.js. Share if you liked it</p>
    <h1>To-do list</h1>
    <AddToDo setToDos={setToDos}/>
    <ToDoList toDos={toDos} setToDos={setToDos}/>
    </>
  );
}
export default App;