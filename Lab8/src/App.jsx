import { useState, useEffect } from "react";
import "./App.css";
import TodoFooter from "./components/TodoFooter";
import TodoFromInput from "./components/TodoFromInput";
import TodoHeader from "./components/TodoHeader";
import TodoListContainer from "./components/TodoListContainer.jsx";

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "To do 1",
      isCompleted: false,
    },
    {
      id:2,
      title: "To do 2",
      isCompleted: true,
    },
    {
      id:3,
      title: "To do 3",
      isCompleted: false,
    },
  ]);

  const onAddTodo = (newTodo) => {
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const onDeleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const onSetCompleteTodo = (id) => {
    const newTodos = todos.map((item) => {
      if ( id === item.id){
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  // ============Lab8-Lab8-Lab8============
  const onUpdateTodo = (id, updatedTitle) => {
    const newTodos = todos.map((item) => {
      if(id === item.id){
        return{
          ...item,
          title: updatedTitle,
        };
      }
      return item;
    });
    setTodos(newTodos);
  }

  const getTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return [];
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="">
      <TodoHeader/>
      <TodoFromInput onAddTodo={onAddTodo}/>
      <TodoListContainer todos={todos} onDeleteTodo={onDeleteTodo} onSetCompleteTodo={onSetCompleteTodo} onUpdateTodo={onUpdateTodo} getTodosFromLocalStorage={getTodosFromLocalStorage}/>
      <TodoFooter />
    </div>
  )
};

export default App;