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
              <div className="wand-div">
                Wand:
                <ul className="wand">
                  <li>
                    {!wand.wood
                      ? 'Wood: Not provided'
                      : `Wood: Made of ${wand.wood}`}
                  </li>
                  <li>
                    {!wand.core
                      ? 'Core: Not provided'
                      : `Core: Made of ${wand.core}`}
                  </li>
                  <li>
                    {!wand.length
                      ? 'Length: Not provided'
                      : `Length: ${wand.length}'`}
                  </li>
                </ul>
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
    length: PropTypes.number,
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
  wand: { core: '', wood: '', length: '' },
  patronus: 'stag',
  ancestry: 'half-blood',
  font: { color: 'black' },
};

export default Character;
