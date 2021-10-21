import React from 'react';
import './Character.css';

const Character = ({ name, dateOfBirth, species, house, image }) => {
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
        {/* <div className="card flip-card-back">
          <span>Plus d&apos;infos</span>
        </div> */}
      </div>
    </div>
  );
};

export default Character;
