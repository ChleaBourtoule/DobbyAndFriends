import React from 'react';
import './Character.css';

const Character = ({
  name,
  dateOfBirth,
  species,
  house,
  image,
  wand,
  patronus,
  ancestry,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="card flip-card-front">
          <div className="card-img">
            <img alt="" src={image} />
          </div>
          <div className="card-details">
            <h2>{name}</h2>
            <div>Date of Birth: {dateOfBirth}</div>
            <div>Species: {species}</div>
            <div>House: {house}</div>
          </div>
        </div>
        <div className="card flip-card-back">
          <div className="card-details">
            <h2>{name}</h2>
            {patronus === '' ? (
              <div>Patronus: Not provided</div>
            ) : (
              <div>Patronus: {patronus}</div>
            )}
            {wand.wood === '' && wand.core === '' && wand.length === '' ? (
              <div>Wand: Not provided</div>
            ) : (
              <div>
                Wand:
                {wand.wood === '' ? (
                  <li>Wood: Not provided</li>
                ) : (
                  <li>Wood: Made of {wand.wood}</li>
                )}
                {wand.core === '' ? (
                  <li>Core: Not provided</li>
                ) : (
                  <li>Core: Made of {wand.core}</li>
                )}
                {wand.length === '' ? (
                  <li>Length: Not provided</li>
                ) : (
                  <li>Length: {wand.length}&apos;</li>
                )}
              </div>
            )}
            {ancestry === '' ? (
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

export default Character;
