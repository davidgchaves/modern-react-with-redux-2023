import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
};

export default App;
