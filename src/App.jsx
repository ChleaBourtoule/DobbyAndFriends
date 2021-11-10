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
        <Route exact path="/DobbyAndFriends/" component={Home} />
        <Route exact path="/DobbyAndFriends/quiz/" component={Quiz} />
        <Route exact path="/DobbyAndFriends/library/" component={Library} />
        <Route
          exact
          path="/DobbyAndFriends/quiz/start/"
          component={QuizStart}
        />
        <Route path="*">
          <Redirect exact to="/DobbyAndFriends/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
