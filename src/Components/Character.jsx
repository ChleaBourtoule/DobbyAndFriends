import React from 'react';
import './character.css';
import PropTypes from 'prop-types';
import haveYouSeenThisWizard from '../assets/have-you-seen-this-wizard.jpg';

const Character = ({
  name,
  dateOfBirth,
  species,
  house,
  image,
  wand,
  patronus,
  ancestry,
  font,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="card flip-card-front">
          <div className="card-img">
            {!image ? (
              <img alt={name} src={haveYouSeenThisWizard} />
            ) : (
              <img alt={name} src={image} />
            )}
          </div>
          <div className="card-details" style={font}>
            <h2>{name}</h2>
            <div>Date of Birth: {dateOfBirth}</div>
            <div>Species: {species}</div>
            <div>House: {house}</div>
          </div>
        </div>
        <div className="card flip-card-back">
          <div className="card-details" style={font}>
            <h2>{name}</h2>
            {!patronus ? (
              <div>Patronus: Not provided</div>
            ) : (
              <div>Patronus: {patronus}</div>
            )}
            {!wand.wood && !wand.core && !wand.length ? (
              <div>Wand: Not provided</div>
            ) : (
              <div>
                Wand:
                {!wand.wood ? (
                  <li>Wood: Not provided</li>
                ) : (
                  <li>Wood: Made of {wand.wood}</li>
                )}
                {!wand.core ? (
                  <li>Core: Not provided</li>
                ) : (
                  <li>Core: Made of {wand.core}</li>
                )}
                {!wand.length ? (
                  <li>Length: Not provided</li>
                ) : (
                  <li>Length: {wand.length}&apos;</li>
                )}
              </div>
            )}
            {!ancestry ? (
              <div>Ancestry: Not provided</div>
            ) : (
              <div>Ancestry: {ancestry}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string,
  dateOfBirth: PropTypes.string,
  species: PropTypes.string,
  house: PropTypes.string,
  image: PropTypes.string,
  wand: PropTypes.shape({
    core: PropTypes.string,
    wood: PropTypes.string,
    length: PropTypes.string,
  }),
  patronus: PropTypes.string,
  ancestry: PropTypes.string,
  font: PropTypes.shape({
    color: PropTypes.string,
  }),
};

Character.defaultProps = {
  name: 'Harry',
  dateOfBirth: '17/12/200',
  species: 'human',
  house: 'Gryffindor',
  image: '',
  wand: '',
  patronus: 'stag',
  ancestry: 'half-blood',
  font: 'black',
};

export default Character;
