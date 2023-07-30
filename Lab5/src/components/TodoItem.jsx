import React, { useState } from "react";

const TodoItem = (props) => {
  const [completed, setCompleted] = useState(props.todo.isCompleted);

  const handleDoubleClick = () => {
    setCompleted(!completed);
    props.onDeleteTodo(props.todo.id); // Gọi callback function để xóa todo khỏi danh sách
  };

  return (
    <div
      className="todo-item"
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
      onDoubleClick={handleDoubleClick}
    >
      {props.todo.title}
    </div>
  );
};

export default TodoItem;
