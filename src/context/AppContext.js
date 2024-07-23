import React, { createContext, useContext, useState } from "react";

// Create a unified context
const AppContext = createContext();

// Custom hook for consuming the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Unified provider component
export const AppProvider = ({ children }) => {
  // General app state
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  // To-do list state
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const markTaskAsNotDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const markAllAsDone = () => {
    const updatedTasks = tasks.map((task) => ({ ...task, completed: true }));
    setTasks(updatedTasks);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        tasks,
        taskInput,
        setTaskInput,
        addTask,
        toggleTaskCompletion,
        markTaskAsDone,
        markTaskAsNotDone,
        removeTask,
        markAllAsDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
