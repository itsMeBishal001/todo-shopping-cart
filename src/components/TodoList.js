import React from "react";
import { useMediaQuery } from "react-responsive";
import { useAppContext } from "../context/AppContext";
import "./TodoList.css";

/**
 * TodoList component for managing and displaying tasks.
 *
 * @returns {JSX.Element} The rendered TodoList component.
 */
function TodoList() {
  // Access context values and functions related to tasks
  const {
    tasks,
    taskInput,
    setTaskInput,
    addTask,
    toggleTaskCompletion,
    markTaskAsDone,
    markTaskAsNotDone,
    removeTask,
    markAllAsDone,
  } = useAppContext();

  // Count the number of completed tasks
  const completedCount = tasks.filter((task) => task.completed).length;

  // Determine if the screen width is mobile size (maxWidth 767px)
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={`todo-list ${isMobile ? "mobile" : "desktop"}`}>
      {/* Title of the To-Do List */}
      <h2>To-Do List</h2>

      {/* Input field for adding new tasks */}
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
      </div>

      {/* Buttons for adding a new task and marking all tasks as done */}
      <div className="buttons">
        <button onClick={addTask} className="add-task-btn">
          Add Task
        </button>
        <button onClick={markAllAsDone} className="mark-all-done-btn">
          Mark All as Done
        </button>
      </div>

      {/* Summary of tasks */}
      <div className="task-summary">
        <div className="task-summary-card">
          <span className="task-summary-icon">📋</span>
          <p>Total tasks</p>
          <p className="task-summary-count">{tasks.length}</p>
        </div>
        <div
          className={`task-summary-card ${
            completedCount === tasks.length ? "all-done" : ""
          }`}
        >
          <span className="task-summary-icon">✅</span>
          <p>Completed tasks</p>
          <p className="task-summary-count">{completedCount}</p>
        </div>
      </div>

      {/* List of tasks */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            {/* Task text */}
            <span
              className="task-text"
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.text}
            </span>

            {/* Buttons to mark task as done/not done and to remove the task */}
            {task.completed ? (
              <button
                onClick={() => markTaskAsNotDone(index)}
                className="not-done-task-btn"
              >
                Mark as Not Done
              </button>
            ) : (
              <button
                onClick={() => markTaskAsDone(index)}
                className="done-task-btn"
              >
                Done
              </button>
            )}
            <button
              onClick={() => removeTask(index)}
              className="remove-task-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
