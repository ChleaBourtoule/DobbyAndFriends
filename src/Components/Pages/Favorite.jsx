import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../Character';

const Favorite = () => {
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState([]);
  const houseTemp = [];
  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      // 'http://hp-api.herokuapp.com/api/characters/house/gryffindor
      .then((res) => res.data)
      .then((data) => setCharacters(data))
      .catch((e) => console.log(e));

    for (let i = 0; i < characters.length; i += 1) {
      Object.entries(characters[i]).forEach((entry) => {
        if (entry[0] === 'house') {
          if (!houseTemp.includes(entry[1])) {
            houseTemp.push(entry[1]);
          }
        }
      });

      setHouse(houseTemp);
      console.log(house);
    }
  }, []);

  function handleChange(e) {
    console.log(e.target.value, e.target.name);
  }

  return (
    <div>
      <form>
        <select name="house" id="" onChange={(e) => handleChange(e)}>
          {house.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
        <select name="Species" id="">
          <option value="valeur1">Valeur 1</option>
        </select>
        <select name="Species" id="">
          <option value="valeur1">Valeur 1</option>
        </select>
        <button aria-label="button" type="submit">
          Save
        </button>
      </form>
      <div className="cards-container">
        {characters.map((character) => (
          <Character
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
  );
};

export default Favorite;
