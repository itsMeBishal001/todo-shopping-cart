import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = index => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const markTaskAsDone = index => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const markTaskAsNotDone = index => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const markAllAsDone = () => {
    const updatedTasks = tasks.map(task => ({ ...task, completed: true }));
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.completed).length;

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={`todo-list ${isMobile ? 'mobile' : 'desktop'}`}>
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
      </div>
      <div className="buttons">
        <button onClick={addTask} className="add-task-btn">Add Task</button>
        <button onClick={markAllAsDone} className="mark-all-done-btn">Mark All as Done</button>
      </div>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {completedCount}</p>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span
              className="task-text"
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.text}
            </span>
            {task.completed ? (
              <button onClick={() => markTaskAsNotDone(index)} className="not-done-task-btn">Not Done</button>
            ) : (
              <button onClick={() => markTaskAsDone(index)} className="done-task-btn">Done</button>
            )}
            <button onClick={() => removeTask(index)} className="remove-task-btn">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
