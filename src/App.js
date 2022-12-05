import React from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import "./Images/react.svg";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([
  ]);
  return (
    <>
    <p style={{
      fontSize: "15px",
      textAlign: "center",
      fontFamily: "poppins",
    }}>Created by Joydeep with ❤ & <img src="" alt="React.JS" /> </p>
    <h1 style={{
      textAlign:"center",
      fontSize:"1.5rem",
      color: "red"
    }}>To-do list</h1>
    <AddToDo setToDos={setToDos}/>
    <ToDoList toDos={toDos} setToDos={setToDos}/>
    </>
  );
}
export default App;