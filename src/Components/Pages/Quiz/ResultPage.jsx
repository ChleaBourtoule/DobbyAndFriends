import React from 'react';
import './resultPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import flyingHarry from '../../../assets/harry-potter-flying.png';

const ResultPage = () => {
  const location = useLocation();
  const result = location.resultProps;
  console.log(result);

  return (
    <div className="result-page">
      <div className="result-section">
        <h2>Your final score is {result}/5</h2>
        <img
          src={flyingHarry}
          id="harry-flying"
          alt="Harry flying on his brum"
        />
        {result === 5 ? (
          <div className="final-score-5-div">
            <h3>Congratulations, you are a true wizard from Hogwarts !!</h3>
            <p>Dobby is very proud of you</p>
          </div>
        ) : (
          <div className="final-score-div">
            <h3>Keep on training !</h3>
            <p>Dobby has faith in you !</p>
          </div>
        )}
        <button type="button" className="play-again-button cursor">
          <NavLink className="nav-link" exact to="/quiz-start">
            Try again
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
