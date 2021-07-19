import React, { useState } from "react";

function Pet({ name, type, gender, age, weight, isAdopted, onAdoptPet }) {
  const [adopted, setAdopted] = useState(isAdopted)

  const handleAdopt = () => {
    onAdoptPet()
    setAdopted(true)
  }
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {gender === "male" ? '♂' : '♀'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button onClick={() => alert(`Sorry, ${name} already found a loving family!`)} className={adopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button onClick={handleAdopt} className={adopted ? "ui disabled button" : "ui primary button"}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
