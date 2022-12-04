import React from 'react';
import DeleteToDo from './DeleteToDo';
import "../component CSS/ToDoList.css";
function ToDoList({ toDos, setToDos }){


    function handleToggle(todo){

        const updateToDo = toDos.map((currentToDo) => currentToDo.id === todo.id 
        ? { ...currentToDo, done: !currentToDo.done }
        : currentToDo
        )
        setToDos(updateToDo);
    }

    if(!toDos.length){
        return <p className='p'>Empty list, Add a few</p>
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