import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Character';
import './library.css';
import gryffindorLogo from '../../assets/gryffindor.png';
import ravenclawLogo from '../../assets/ravenclaw.png';
import hufflepuffLogo from '../../assets/hufflepuff.png';
import slytherinLogo from '../../assets/slytherin.png';
import ghostGryffindor from '../../assets/ghostGryffindor.png';
import ghostHufflepuff from '../../assets/ghostHufflepuff.png';
import ghostRavenclaw from '../../assets/ghostRavenclaw.png';
import ghostSlytherin from '../../assets/ghostSlytherin.png';
import homelessLogo from '../../assets/homeles-logo.png';

function Library() {
  const libraryFont = {
    color: '#740001',
  };
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState('null');
  const [font, setFont] = useState(libraryFont);
  const [firstNext, setFirstNext] = useState(0);
  const [secondNext, setSecondNext] = useState(10);

  useEffect(() => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.data)
      .then((data) => setCharacters(data));
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
  const homeless = {
    color: 'black',
  };

  function switchHouse(name) {
    setHouse(name);
  }
  return (
    <div id="library" className="library">
      <h1 className="title">Harry Potter&apos;s characters</h1>
      <div className="library-container">
        <div className="house-container">
          <div
            onClick={() => {
              switchHouse('');
              setFont(homeless);
              setFirstNext(0);
              setSecondNext(10);
            }}
            onKeyPress={() => switchHouse('')}
            role="presentation"
          >
            <div>
              <img
                id="homelessImg"
                src={homelessLogo}
                alt="homeless logo"
                height="150px"
              />
            </div>
          </div>
          <div
            onClick={() => {
              switchHouse('Gryffindor');
              setFont(gryffindorFont);
              setFirstNext(0);
              setSecondNext(10);
            }}
            onKeyPress={() => switchHouse('Gryffindor')}
            role="presentation"
          >
            <div>
              <img
                className="house"
                id="gryffindorImg"
                src={gryffindorLogo}
                alt="hufflepuff logo"
                height="150px"
              />
              <img className="ghost" src={ghostGryffindor} alt="ghost" />
            </div>
          </div>
          <div
            onClick={() => {
              switchHouse('Hufflepuff');
              setFont(hufflepuffFont);
              setFirstNext(0);
              setSecondNext(10);
            }}
            onKeyPress={() => switchHouse('Hufflepuff')}
            role="presentation"
          >
            <div>
              <img
                className="house"
                id="hufflepuffImg"
                src={hufflepuffLogo}
                alt="hufflepuff logo"
                height="150px"
              />
              <img
                className="ghost"
                src={ghostHufflepuff}
                alt="ghost"
                height="80px"
              />
            </div>
          </div>
          <div
            onClick={() => {
              switchHouse('Ravenclaw');
              setFont(ravenclawFont);
              setFirstNext(0);
              setSecondNext(10);
            }}
            onKeyPress={() => switchHouse('Ravenclaw')}
            role="presentation"
          >
            <div>
              <img
                className="house"
                id="ravenclawImg"
                src={ravenclawLogo}
                alt="ravenclaw logo"
                height="150px"
              />
              <img className="ghost" src={ghostRavenclaw} alt="ghost" />
            </div>
          </div>
          <div
            onClick={() => {
              switchHouse('Slytherin');
              setFont(slytherinFont);
              setFirstNext(0);
              setSecondNext(10);
            }}
            onKeyPress={() => switchHouse('Slytherin')}
            role="presentation"
          >
            <div>
              <img
                className="house"
                id="slytherinImg"
                src={slytherinLogo}
                alt="slytherin logo"
                height="150px"
              />
              <img className="ghost" src={ghostSlytherin} alt="ghost" />
            </div>
          </div>
        </div>
        <div className="card-button-container">
          <div className="cards-container">
            {characters
              .filter(
                (character) =>
                  house === 'null' ||
                  character.house === !house ||
                  character.house === house
              )
              .slice(firstNext, secondNext)
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
          <div className="btn_return">
            <div className="button">
              {firstNext > 0 && (
                <button
                  type="button"
                  className="next cursor"
                  onClick={() => {
                    setFirstNext(firstNext - 10);
                    setSecondNext(secondNext - 10);
                  }}
                >
                  Previous 10
                </button>
              )}
              {secondNext <=
                characters.filter(
                  (character) =>
                    character.house === 'null' ||
                    character.house === !house ||
                    character.house === house
                ).length && (
                <button
                  type="button"
                  className="next cursor"
                  onClick={() => {
                    setFirstNext(firstNext + 10);
                    setSecondNext(secondNext + 10);
                  }}
                >
                  Next 10
                </button>
              )}
            </div>
            <button
              type="button"
              className="next cursor"
              onClick={() => {
                switchHouse('null');
                setFont(gryffindorFont);
                setFirstNext(0);
                setSecondNext(10);
              }}
              onKeyPress={() => switchHouse(``)}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
