import React from 'react';
import './quiz.css';
import { HashLink } from 'react-router-hash-link';
import './arrow.css';

const Quiz = () => {
  return (
    <div className="quiz">
      <h1 className="title-bis quiz-title">
        Do you know Dobby&apos;s friends ?
      </h1>
      <div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </div>
      <HashLink className="nav-link" exact to="/quiz-start#root">
        <button type="button" id="start-quiz" className="cursor">
          Enter into the Chamber of Secrets
        </button>
      </HashLink>
    </div>
  );
};

export default Quiz;
