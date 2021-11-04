import React from 'react';
import './quiz.css';

const Quiz = () => {
  return (
    <div className="quiz">
      <h1 className="title">Test your knowledge about Dobby and his friends</h1>
      <input
        type="button"
        id="start-quiz"
        value="Let's start"
        className="cursor"
      />
    </div>
  );
};

export default Quiz;
