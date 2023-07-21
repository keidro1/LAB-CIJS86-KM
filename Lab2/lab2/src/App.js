import React, { useState, useEffect } from 'react';
import './App.css';

const tasksData = [
  {
    title: "Clear up bedroom",
    completed: false,
  },
  {
    title: "Buy some milk",
    completed: false,
  },
  {
    title: "Jogging",
    completed: false,
  },
  {
    title: "Learn React",
    completed: false,
  },
  {
    title: "Doing Exercises",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [remainingTasks, setRemainingTasks] = useState(0);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setRemainingTasks(tasks.filter(task => !task.completed).length);
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleToggleComplete = (index) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Your task here..."
        value={newTask}
        onChange={handleInputChange}
        className="input-task"
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
                className="checkbox-round"
              />
              <span className="checkmark"></span>
            </label>
            {task.title}
          </li>
        ))}
      </ul>
      <div className="footer">
        <p>{remainingTasks} tasks left!</p>
        <p className="mindx-todolist">MindX Todolist</p>
      </div>
    </div>
  );
}

export default App;
