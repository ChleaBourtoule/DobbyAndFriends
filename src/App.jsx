import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import QuizStart from './Components/Pages/Quiz/QuizStart';
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
        <Route exact path="/DobbyAnfFriends/" component={Home} />
        <Route exact path="/DobbyAnfFriends/quiz/" component={Quiz} />
        <Route exact path="/DobbyAnfFriends/library/" component={Library} />
        <Route
          exact
          path="/DobbyAnfFriends/quiz/start/"
          component={QuizStart}
        />
        <Route path="*">
          <Redirect exact to="/DobbyAnfFriends/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
