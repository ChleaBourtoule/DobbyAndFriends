import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Components/Character';
import './Library.css';

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
  const gryffindor = {
    backgroundImage: 'url(./gryfindor-hogwarts-house.jpg)',
  };
  const slytherin = {
    backgroundImage: 'url(./slytherin-hogwarts-house.jpg)',
  };
  const hufflepuff = {
    backgroundImage: 'url(./hufflepuff-d6152588b2379fcac20301584f5b87c9.jpg)',
  };
  const ravenclaw = {
    backgroundImage: 'url(./ravenclaw-a4dfcf4b993b250ddf660525cfbd042b.jpg)',
  };
  const library = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1596426586791-1ec4ecf6083f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)',
  };
  const [style, setStyle] = useState(library);

  function swithHouse(name) {
    setHouse(name);
  }
  return (
    <div className="library" style={style}>
      <h1 className="title">Harry Potter&apos;s characters</h1>
      <div className="house-container">
        <div
          onClick={() => {
            swithHouse('Gryffindor');
            setStyle(gryffindor);
          }}
          onKeyPress={() => swithHouse('Gryffindor')}
          role="presentation"
        >
          <img
            id="gryffindorImg"
            src="./gryffindor.png"
            alt="hufflepuff logo"
            height="150px"
          />
        </div>
        <div
          onClick={() => {
            swithHouse('Hufflepuff');
            setStyle(hufflepuff);
          }}
          onKeyPress={() => swithHouse('Hufflepuff')}
          role="presentation"
        >
          <img
            id="hufflepuffImg"
            src="./hufflepuff.png"
            alt="hufflepuff logo"
            height="150px"
          />
        </div>
        <div
          onClick={() => {
            swithHouse('Ravenclaw');
            setStyle(ravenclaw);
          }}
          onKeyPress={() => swithHouse('Ravenclaw')}
          role="presentation"
        >
          <img
            id="ravenclawImg"
            src="./ravenclaw.png"
            alt="ravenclaw logo"
            height="150px"
          />
        </div>
        <div
          onClick={() => {
            swithHouse('Slytherin');
            setStyle(slytherin);
          }}
          onKeyPress={() => swithHouse('Slytherin')}
          role="presentation"
        >
          <img
            id="slytherinImg"
            src="./slytherin.png"
            alt="slytherin logo"
            height="150px"
          />
        </div>
      </div>
      <div className="cards-container">
        {characters
          .filter((character) => house === '' || character.house === house)
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
