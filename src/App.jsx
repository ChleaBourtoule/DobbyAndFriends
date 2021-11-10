import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import QuizStart from './Components/Pages/Quiz/QuizStart';
import Favorite from './Components/Pages/Favorite';
import Quiz from './Components/Pages/Quiz/Quiz';
import Header from './Components/Header';
import Library from './Components/Pages/Library';
import Home from './Components/Pages/Home';

import './app.css';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/quiz-start" component={QuizStart} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
