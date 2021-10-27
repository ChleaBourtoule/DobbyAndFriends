import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Components/Character';

function Library() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      // 'http://hp-api.herokuapp.com/api/characters/house/gryffindor
      .then((res) => res.data)
      .then((data) => setCharacters(data));
  }, []);

  const [house, setHouse] = useState('');
  function swithHouse(name) {
    setHouse(name);
  }
  return (
    <div className="library">
      <h1 className="title">Harry Potter&apos;s characters</h1>
      <div className="house-container">
        <div
          onClick={() => swithHouse('Gryffindor')}
          onKeyPress={() => swithHouse('Gryffindor')}
          role="presentation"
        >
          <img src="./gryffindor.png" alt="hufflepuff logo" height="150px" />
        </div>
        <div
          onClick={() => swithHouse('Hufflepuff')}
          onKeyPress={() => swithHouse('Hufflepuff')}
          role="presentation"
        >
          <img src="./hufflepuff.png" alt="hufflepuff logo" height="150px" />
        </div>
        <div
          onClick={() => swithHouse('Ravenclaw')}
          onKeyPress={() => swithHouse('Ravenclaw')}
          role="presentation"
        >
          <img src="./ravenclaw.png" alt="ravenclaw logo" height="150px" />
        </div>
        <div
          onClick={() => swithHouse('Slytherin')}
          onKeyPress={() => swithHouse('Slytherin')}
          role="presentation"
        >
          <img src="./slytherin.png" alt="slytherin logo" height="150px" />
        </div>
      </div>
      <div className="cards-container">
        {house === ''
          ? characters.map((character) => (
              <Character
                name={character.name}
                dateOfBirth={character.dateOfBirth}
                species={character.species}
                house={character.house}
                image={character.image}
                wand={character.wand}
                patronus={character.patronus}
                ancestry={character.ancestry}
              />
            ))
          : characters
              .filter((character) => character.house === house)
              .map((character) => (
                <Character
                  name={character.name}
                  dateOfBirth={character.dateOfBirth}
                  species={character.species}
                  house={character.house}
                  image={character.image}
                  wand={character.wand}
                  patronus={character.patronus}
                  ancestry={character.ancestry}
                />
              ))}
      </div>
    </div>
  );
}

export default Library;
