import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TodoList from "./components/TodoList";
import ShoppingCart from "./components/ShoppingCart";
import { AppProvider } from "./context/AppContext";
import "./App.css";

/**
 * Main application component that sets up routing and provides context.
 *
 * @returns {JSX.Element} The App component.
 */
function App() {
  return (
    // Provide context to the entire application
    <AppProvider>
      {/* Set up routing for the application */}
      <Router>
        {/* Render the navigation bar */}
        <Navbar />
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
