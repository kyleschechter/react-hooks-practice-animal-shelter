import React from "react";

import Pet from "./Pet";

function PetBrowser({ onAdoptPet, pets }) {

const listOfPets = pets.map(pet => {

  const handleAdoptPet = () => {
  onAdoptPet(pet.id, pet.isAdopted)
  }

  return (
    <Pet 
    key={pet.id}
    name={pet.name}
    type={pet.type}
    gender={pet.gender}
    age={pet.age}
    weight={pet.weight}
    isAdopted={pet.isAdopted}
    onAdoptPet={handleAdoptPet}
    />
  )
})

  return <div className="ui cards">{listOfPets}</div>;
}

export default PetBrowser;
