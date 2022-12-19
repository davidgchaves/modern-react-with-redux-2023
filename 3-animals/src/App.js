import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const onButtonClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Add Animal</button>
      <div>
        {animals.map((animal, index) => (
          <AnimalShow type={animal} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
