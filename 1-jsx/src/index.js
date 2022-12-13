// 1) Import
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Reference to div ID root
const div = document.getElementById("root");

// 3) Create component
const App = () => {
  const message = Math.random() > 0.5 ? "Hello there!" : "Bye there!";

  return (
    <h1>
      {message} at {new Date().toLocaleTimeString()}
    </h1>
  );
};

// 4) React takes control and shows the component on the screen
ReactDOM.createRoot(div).render(<App />);
