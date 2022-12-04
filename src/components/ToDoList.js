import React from 'react';
import DeleteToDo from './DeleteToDo';
function ToDoList({ toDos, setToDos }){


    function handleToggle(todo){

        const updateToDo = toDos.map((currentToDo) => currentToDo.id === todo.id 
        ? { ...currentToDo, done: !currentToDo.done }
        : currentToDo
        )
        setToDos(updateToDo);
    }

    if(!toDos.length){
        return <p>No to-do s</p>
    }

    return(
        <>
        <ol>
            {toDos.map((todo)=>(
                <li 
                key={todo.id}
                onDoubleClick={ () => {
                    return handleToggle(todo)
                }}
                style={{
                    textDecoration: todo.done? "line-through" : "",
                    cursor: "pointer",
                }}>{todo.text}
                <DeleteToDo todo={todo} setToDos={setToDos}/>
                </li>
            ))}
        </ol>
        </>
    )
}
export default ToDoList;