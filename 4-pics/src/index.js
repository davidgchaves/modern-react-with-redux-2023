import React from "react";
import ReactDOM from "react-dom/client";
import searchImages from "./api";
import App from "./App";

searchImages();

const rootDiv = document.getElementById("root");
ReactDOM.createRoot(rootDiv).render(<App />);
