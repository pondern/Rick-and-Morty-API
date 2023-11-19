// RickAndMorty.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import RickAndMortyModal from "./RickAndMortyModal";

const baseURL = "https://rickandmortyapi.com/api/character";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      setSelectedCharacter(response.data);
      openModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = () => {
    // Implement your modal logic here
  };

  return (
    <div className="characters-container flex">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character"
          onClick={() => handleClick(character.id)}
        >
          <img src={character.image} alt={character.name} />
        </div>
      ))}
      {selectedCharacter && <RickAndMortyModal character={selectedCharacter} />}
    </div>
  );
};

export default RickAndMorty;
