import React from 'react';
import Character from './Components/Character';
import './App.css';

const characters = [
  {
    name: 'Harry Potter',
    alternate_names: [''],
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    wizard: true,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: { wood: 'holly', core: 'phoenix feather', length: 11 },
    patronus: 'stag',
    hogwarsStudnt: true,
    hogwartsStaff: false,
    actor: 'DanielRadcliffe',
    alterate_actors: [''],
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },

  {
    name: 'Hermione Granger',
    alternate_names: [''],
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '19-09-1979',
    yearOfBirth: 1979,
    wizard: true,
    ancestry: 'muggleborn',
    eyeColour: 'brown',
    hairColour: 'brown',
    wand: { wood: 'vine', core: 'dragon heartstring', length: '' },
    patronus: 'otter',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Emma Watson',
    alternate_actors: [''],
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },

  {
    name: 'Draco Malfoy',
    alternate_names: [''],
    species: 'human',
    gender: 'male',
    house: 'Slytherin',
    dateOfBirth: '05-06-1980',
    yearOfBirth: 1980,
    wizard: true,
    ancestry: 'pure-blood',
    eyeColour: 'grey',
    hairColour: 'blonde',
    wand: { wood: 'hawthorn', core: 'unicorn tail-hair', length: 10 },
    patronus: '',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Tom Felton',
    alternate_actors: [''],
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/draco.jpg',
  },

  {
    name: 'Minerva McGonagall',
    alternate_names: [''],
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '04-10-1925',
    yearOfBirth: 1925,
    wizard: true,
    ancestry: '',
    eyeColour: '',
    hairColour: 'black',
    wand: { wood: '', core: '', length: '' },
    patronus: 'tabby cat',
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: 'Dame Maggie Smith',
    alternate_actors: [''],
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
  },
];

function App() {
  return (
    <div className="library">
      <h1 className="title">Harry Potter&apos;s characters</h1>
      <div className="cards-container">
        {characters.map((character) => (
          <Character
            // key={character.name}
            name={character.name}
            dateOfBirth={character.dateOfBirth}
            species={character.species}
            house={character.house}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
