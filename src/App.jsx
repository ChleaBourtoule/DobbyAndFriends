import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Library from './Pages/Library';
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <div>
      {' '}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/library" component={Library} />
      </Switch>
    </div>

    /*    <div className="library">
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
    </div> */
  );
}

export default App;
