// RickAndMortyModal.jsx
import React from "react";

const RickModal = ({ character, closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-info">
        <p onClick={closeModal}>x</p>
        <h1 id="modal-title">{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <p id="modal-description">{character.species}</p>
        {/* Add other details you want to display */}
      </div>
    </div>
  );
};

export default RickModal;
