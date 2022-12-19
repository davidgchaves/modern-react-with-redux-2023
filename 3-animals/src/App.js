const App = () => {
  const onButtonClick = () => {
    console.log("Animal button was clicked!");
  };

  return (
    <div>
      <button onClick={onButtonClick}>Add Animal</button>
    </div>
  );
};

export default App;
