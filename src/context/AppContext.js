import React, { createContext, useContext, useState } from "react";

// Create a unified context for the application
const AppContext = createContext();

/**
 * Custom hook to consume the AppContext.
 *
 * @returns {Object} The context value provided by AppProvider.
 */
export const useAppContext = () => {
  return useContext(AppContext);
};

/**
 * Unified provider component for managing application-wide state.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the provider.
 * @returns {JSX.Element} The AppProvider component.
 */
export const AppProvider = ({ children }) => {
  // General state for data and cart
  const [data, setData] = useState(null); // Stores general data, can be used for various purposes
  const [cart, setCart] = useState([]); // Stores items in the shopping cart

  // State for managing the to-do list
  const [tasks, setTasks] = useState([]); // Stores the list of tasks
  const [taskInput, setTaskInput] = useState(""); // Stores the current input value for adding new tasks

  /**
   * Adds a new task to the list.
   * Resets the task input field after adding the task.
   */
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  /**
   * Toggles the completion status of a task.
   *
   * @param {number} index - The index of the task to be toggled.
   */
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  /**
   * Marks a specific task as completed.
   *
   * @param {number} index - The index of the task to be marked as done.
   */
  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  /**
   * Marks a specific task as not completed.
   *
   * @param {number} index - The index of the task to be marked as not done.
   */
  const markTaskAsNotDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
  };

  /**
   * Removes a task from the list.
   *
   * @param {number} index - The index of the task to be removed.
   */
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  /**
   * Marks all tasks as completed.
   */
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
