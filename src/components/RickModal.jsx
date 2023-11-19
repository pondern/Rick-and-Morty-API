// RickAndMortyModal.jsx
import React from "react";

const RickAndMortyModal = ({ character }) => {
  return (
    <div className="modal-info">
      <h1 id="modal-title">{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p id="modal-description">{character.species}</p>
      {/* Add other details you want to display */}
    </div>
  );
};

export default RickAndMortyModal;
