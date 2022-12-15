import "./App.css";
import { nanoid } from "nanoid";
import { useState, useRef } from "react";

function App() {
  //crreate useRef
  const animalRef = useRef();
  //create useState
  const [animal, setAnimal] = useState({
    id: nanoid(),
    type: "",
    journeyNo: 0,
    isHere: true,
  });
  //create handlesubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnimalRef = animalRef.current.value;
    setAnimal({ ...animal, type: newAnimalRef });

    animalRef.current.value = "";
  };
  //create handleJourney function
  const handleJourney = () => {
    setAnimal((animal) => {
      if (animal.isHere) {
        return {
          ...animal,
          isHere: !animal.isHere,
          journeyNo: animal.journeyNo + 1,
        };
      } else {
        return { ...animal, isHere: !animal.isHere };
      }
    });
  };
  return (
    <div className="App">
      <h1>Flavius Exam</h1>
      <div>
        <p>Animal type:{animal.type} </p>
        <p>Number of Journey: {animal.journeyNo} </p>
        <p>
          {animal.isHere
            ? "Animal is in the forest"
            : "Animal is not in teh forest"}
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={animalRef} />
        <button type="submit">Animal Type</button>
      </form>
      <button onClick={handleJourney}>
        {animal.isHere ? "Go on a Journey" : "Return from the journey"}
      </button>
    </div>
  );
}

export default App;
