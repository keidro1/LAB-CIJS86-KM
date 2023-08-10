import React, { useState } from "react";

const TodoItem = (props) => {
    const [edit, setEdit] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState('');

    const handleEditButton = () => {
        setEdit(true);
    };

    const handleUpdateButton = () => {
        props.onUpdateTodo(props.todo.id, updatedTitle);
        setEdit(false);
    };

    const handleTitleChange = (event) => {
        setUpdatedTitle(event.target.value);
    }

    return (
        <div 
            className="todo-item"
            style={{
                textDecoration: props.todo.iscompleted ? "line-through" : "none",
            }}   
        >
            {edit ? (
                //sử dụng <React.Fragment></React.Fragment>, hay viết tắt là <></>
                <>
                <input type="text" value={updatedTitle} onChange={handleTitleChange} />
                <button onClick={handleUpdateButton}>Update</button>
                </>
            ) : (
                <>

                <span>{props.todo.title}</span>
                <button className="todo-item-btn_delete" onClick={()=> props.onDeleteTodo(props.todo.id)}>Delete</button>
                <button className="todo-item-btn_edit" onClick={handleEditButton}>Edit</button>
            
                </>
            )}

        </div>
    )   
};

export default TodoItem;