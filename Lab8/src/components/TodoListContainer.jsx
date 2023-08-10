import React, {useState} from "react";
import TodoItem from "./TodoItem";

const TodoListContainer = (props) => {
    return (
        <div>
            {props.todos.map((todo) => (
                <TodoItem 
                    key = {todo.id} 
                    todo={todo} 
                    onDeleteTodo={props.onDeleteTodo} 
                    onSetCompletedTodo={props.onSetCompletedTodo} 
                    onUpdateTodo={props.onUpdateTodo}/>
            ))}
        </div>
    )
};

export default TodoListContainer;