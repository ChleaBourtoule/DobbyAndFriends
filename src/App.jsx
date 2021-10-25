import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Library from './Pages/Library';
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <div className="library">
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
    </div>
  );
}

export default App;
