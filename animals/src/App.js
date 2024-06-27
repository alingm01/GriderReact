import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimals() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}


export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()])
  }

  const renderedAnimals = animals.map((animal, index)=> {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
      <button onClick={handleClick}>Click button</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}