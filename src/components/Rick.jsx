import React, { useState, useEffect } from "react";
import axios from "axios";
import RickModal from "./RickModal";

const baseURL = "https://rickandmortyapi.com/api/character";

const Rick = () => {
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setSelectedCharacter(null);
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
      {selectedCharacter && (
        <RickModal character={selectedCharacter} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Rick;
