import React from "react";
import { useState, useEffect } from "react";

function Character() {
  const [character, setCharacter] = useState([]);

  // sorgt dafür, dass bei Aufraufen/refresh der Seite, die funktion Character feuert
  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const api = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await api.json();
    console.log(data);
    setCharacter(data.results);
  };

  return (
    <div>
      {character.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>

            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Character;
