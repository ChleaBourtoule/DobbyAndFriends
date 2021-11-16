import axios from 'axios';

import { useEffect, useState } from 'react';
import Character from '../Character';

import './favorite.css';

const Favori = () => {
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState([]);
  const [specy, setSpecy] = useState([]);
  const [ancestry, setAncestry] = useState([]);
  const [houseFilter, setHouseFilter] = useState([]);
  const [specyFilter, setSpecyFilter] = useState([]);
  const [ancestryFilter, setAncestryFilter] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const houseTemp = [];
  const speciesTemp = [];
  const ancestryTemp = [];

  useEffect(async () => {
    await axios
      .get('http://hp-api.herokuapp.com/api/characters')
      // 'http://hp-api.herokuapp.com/api/characters/house/gryffindor
      .then((res) => res.data)
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Load house data from Characters

    for (let i = 0; i < characters.length; i += 1) {
      Object.entries(characters[i]).forEach((entry) => {
        if (entry[0] === 'house') {
          if (!houseTemp.includes(entry[1])) {
            houseTemp.push(entry[1]);
          }
        }
      });
    }
    setHouse(houseTemp);

    // Load species data from Characters
    for (let i = 0; i < characters.length; i += 1) {
      Object.entries(characters[i]).forEach((entry) => {
        if (entry[0] === 'species') {
          if (!speciesTemp.includes(entry[1])) {
            speciesTemp.push(entry[1]);
          }
        }
      });
    }
    setSpecy(speciesTemp);

    // Load Ancestry data from Characters
    for (let i = 0; i < characters.length; i += 1) {
      Object.entries(characters[i]).forEach((entry) => {
        if (entry[0] === 'ancestry') {
          if (!ancestryTemp.includes(entry[1])) {
            ancestryTemp.push(entry[1]);
          }
        }
      });
    }
    setAncestry(ancestryTemp);
  }, [characters]);

  function handleChange(e) {
    switch (e.target.name) {
      case 'house':
        setHouseFilter(e.target.value);
        break;
      case 'species':
        setSpecyFilter(e.target.value);
        break;
      case 'ancestry':
        setAncestryFilter(e.target.value);
        break;
      default:
    }
  }

  return (
    <div className="favorite">
      <div className="sub_favorite">
        <h1 className="title" id="fav">
          Find Your Character
        </h1>
        <form className="form_fav">
          <div>
            <span>House:</span>
            <select
              className="cursor"
              name="house"
              id=""
              defaultValue="DEFAULT"
              onChange={(e) => handleChange(e)}
            >
              <option value="DEFAULT">Please Select</option>
              {house.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span>Species:</span>

            <select
              className="cursor"
              name="species"
              id=""
              defaultValue="DEFAULT"
              onChange={(e) => handleChange(e)}
            >
              <option value="DEFAULT">Please Select</option>
              {specy.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span>Ancestry:</span>

            <select
              className="cursor"
              name="ancestry"
              id=""
              defaultValue="DEFAULT"
              onChange={(e) => handleChange(e)}
            >
              <option value="DEFAULT">Please Select</option>
              {ancestry.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={() => setShowMap(!showMap)}>
            {' '}
            Show Search {showMap ? ' On' : null}
          </button>
        </form>

        <div className="cards-container card-fav">
          {showMap &&
            characters
              .filter(
                (el) =>
                  el.house === houseFilter &&
                  el.species === specyFilter &&
                  el.ancestry === ancestryFilter
              )
              .map((character) => (
                <Character
                  key={character.name}
                  name={character.name}
                  dateOfBirth={character.dateOfBirth}
                  species={character.species}
                  house={character.house}
                  image={character.image}
                  patronus={character.patronus}
                  ancestry={character.ancestry}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Favori;
