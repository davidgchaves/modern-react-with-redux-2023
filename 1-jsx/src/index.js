// 1) Import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) Reference to div ID root
const div = document.getElementById("root");

// 3) React takes control and shows the component on the screen
ReactDOM.createRoot(div).render(<App />);
