import { useState } from "react";

function getRandomAnimals() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}


export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()])
  }

  return (
    <div>
      <button onClick={handleClick}>Click button</button>
      <div>{animals}</div>
    </div>
  )
}