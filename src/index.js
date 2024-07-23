import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/AppContext";

/**
 * The entry point of the React application.
 * It renders the root component and sets up the context provider.
 */

// Create a root element for React to render into
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application within the root element
root.render(
  <React.StrictMode>
    {/* Provide context to the entire application */}
    <AppProvider>
      {/* Render the main App component */}
      <App />
    </AppProvider>
  </React.StrictMode>
);

// Optional: Measure performance in your app (e.g., for analytics)
reportWebVitals();
