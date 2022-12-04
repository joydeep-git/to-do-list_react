import React from "react";
function DeleteToDo({todo, setToDos}){
    function handleToDos(){
        setToDos((currentToDos)=>currentToDos.filter((t)=>t.id !== todo.id))
    }
    return(
        <span onClick={handleToDos} style={{
            color: 'red', fontWeight: 'normal', marginLeft: '25px', cursor: 'pointer', textDecoration: 'none',
        }}>X</span>
    )
}
export default DeleteToDo;