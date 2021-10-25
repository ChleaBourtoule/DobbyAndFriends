import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Library from './Pages/Library';
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <ul className="Header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/library" component={Library} />
      </Switch>

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
            wand={character.wand}
            patronus={character.patronus}
            ancestry={character.ancestry}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
