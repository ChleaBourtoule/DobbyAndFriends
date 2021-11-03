import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Character';
import './library.css';

function Library() {
  /*   const library = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1596426586791-1ec4ecf6083f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)',
  }; */
  const libraryFont = {
    color: '#740001',
  };
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState('');
  // const [style, setStyle] = useState('');
  const [font, setFont] = useState(libraryFont);

  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      // 'http://hp-api.herokuapp.com/api/characters/house/gryffindor
      .then((res) => res.data)
      .then((data) => setCharacters(data));

    /* const myBody = document.querySelector('.library');
    myBody.style.backgroundImage =
      'url(https://images.unsplash.com/photo-1596426586791-1ec4ecf6083f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)'; */
  }, []);

  useEffect(() => {
    const myBody = document.querySelector('#library');
    switch (house) {
      case 'Gryffindor':
        myBody.className = 'gryffindor-background';
        break;
      case 'Hufflepuff':
        myBody.className = 'hufflepuff-background';
        break;
      case 'Ravenclaw':
        myBody.className = 'ravenclaw-background';
        break;
      case 'Slytherin':
        myBody.className = 'slytherin-background';
        break;
      default:
        myBody.className = 'default-background';
    }
  }, [house]);

  /*   
  ==================================
  
  suggestion de Lydie =
    // applique la classe correspondante à la div principale
    // switch sur la maison

    // document.getElementById.classname.toggle
    // classname.toggle('gryffindor');

  ===================================

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
  }; */

  const gryffindorFont = {
    color: '#740001',
  };
  const slytherinFont = {
    color: '#1A472A',
  };
  const hufflepuffFont = {
    color: '#af712a',
  };
  const ravenclawFont = {
    color: '#0E1A40',
  };

  function switchHouse(name) {
    setHouse(name);
  }
  return (
    <div
      id="library"
      className="library" /* + "gryffindor" */ /* style={style} */
    >
      <h1 className="title">Harry Potter&apos;s characters</h1>
      <div className="house-container">
        <div
          onClick={() => {
            switchHouse('Gryffindor');
            /* setStyle(gryffindor); */
            setFont(gryffindorFont);
          }}
          onKeyPress={() => switchHouse('Gryffindor')}
          role="presentation"
        >
          <img
            className="cursor"
            id="gryffindorImg"
            src="./gryffindor.png"
            alt="hufflepuff logo"
            height="150px"
          />
        </div>
        <div
          onClick={() => {
            switchHouse('Hufflepuff');
            /* setStyle(hufflepuff); */
            setFont(hufflepuffFont);
          }}
          onKeyPress={() => switchHouse('Hufflepuff')}
          role="presentation"
        >
          <img
            id="hufflepuffImg"
            className="cursor"
            src="./hufflepuff.png"
            alt="hufflepuff logo"
            height="150px"
          />
        </div>
        <div
          onClick={() => {
            switchHouse('Ravenclaw');
            /* setStyle(ravenclaw); */
            setFont(ravenclawFont);
          }}
          onKeyPress={() => switchHouse('Ravenclaw')}
          role="presentation"
        >
          <img
            id="ravenclawImg"
            className="cursor"
            src="./ravenclaw.png"
            alt="ravenclaw logo"
            height="150px"
          />
        </div>
        <div
          onClick={() => {
            switchHouse('Slytherin');
            /* setStyle(slytherin); */
            setFont(slytherinFont);
          }}
          onKeyPress={() => switchHouse('Slytherin')}
          role="presentation"
        >
          <img
            id="slytherinImg"
            className="cursor"
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
              font={font}
            />
          ))}
      </div>
    </div>
  );
}

export default Library;
