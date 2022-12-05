import { useRef } from "react";
import React from "react";
import "../component CSS/AddToDo.css";
import { v4 as uuidv4 } from 'uuid';
function AddToDo({setToDos}){

    const inputRef = useRef();

    function handleAddToDo(e){
        e.preventDefault();
        if(inputRef.current.value.length === 0){
            alert("Add a to-do")
        }else{
            const text = inputRef.current.value;
        const toDo = {
            id: uuidv4(),
            text,
            done: false,
        }
        setToDos((prevToDos)=> {
            return [ ...prevToDos, toDo]});

        inputRef.current.value = "";
        }
    }

    return(
        <form onSubmit={handleAddToDo}>
            <input name="AddToDo" type="text" placeholder="Add a task" ref={inputRef}/>
            <button type="submit">Add</button>
        </form>
    )
}
export default AddToDo;