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
  );
}

export default App;
