import React from "react";
import "../component CSS/DeleteToDo.css"
function DeleteToDo({todo, setToDos}){
    function handleToDos(){
        setToDos((currentToDos)=>currentToDos.filter((t)=>t.id !== todo.id))
    }
    return(
        <button className="btn" onClick={handleToDos}>X</button>
    )
}
export default DeleteToDo;