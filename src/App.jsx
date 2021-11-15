import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Quiz from './Components/Pages/Quiz/Quiz';
import Header from './Components/Header';
import Library from './Components/Pages/Library';
import Home from './Components/Pages/Home';

import './app.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/library" component={Library} />
        <Route path="*">
          <Redirect exact to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
