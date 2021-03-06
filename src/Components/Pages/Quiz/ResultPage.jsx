import React from 'react';
import './resultPage.css';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import flyingHarry from '../../../assets/harry-potter-flying.png';

const ResultPage = ({ result }) => {
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

        <HashLink className="nav-link cursor" exact to="/quiz#root">
          <button type="button" className="play-again-button cursor">
            Try again
          </button>
        </HashLink>
      </div>
    </div>
  );
};

ResultPage.propTypes = {
  result: PropTypes.number,
};

ResultPage.defaultProps = {
  result: 0,
};

export default ResultPage;
