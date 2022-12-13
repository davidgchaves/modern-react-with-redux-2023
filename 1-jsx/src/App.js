import React from "react";

const App = () => {
  const message = Math.random() > 0.5 ? "Hello there!" : "Bye there!";

  return (
    <>
      <h1>
        {message} at {new Date().toLocaleTimeString()}
      </h1>
      <input
        type="number"
        style={{ border: "3px solid red" }}
        min={5}
        max={10}
      />
      <br />
      <textarea
        autoFocus
        maxLength={15}
        spellCheck
        style={{ textDecoration: "none", paddingTop: "20px" }}
      ></textarea>
    </>
  );
};

export default App;
