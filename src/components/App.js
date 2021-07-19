import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const url = "http://localhost:3001/pets"
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  //When a pet type is selected in the dropdown
  const handleChangeType = (e) => {
    setFilters({ type: e.target.value })
  }

  //When "Find Pets" is clicked, display list of pets based on selected filter
  const findPetsClick = () => {
    (filters.type === "all" ? fetch(url) : fetch(`${url}?type=${filters.type}`))
    .then(r => r.json())
    .then(data => setPets(data))
  }

  //When the "Adopt Me" button is clicked, chnage the adopted status in the DB to true
  const handleAdoptPet = (petID, adopted) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isAdopted: !adopted
      })
    }
    fetch(`${url}/${petID}`, configObj)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={handleChangeType}
            onFindPetsClick={findPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
