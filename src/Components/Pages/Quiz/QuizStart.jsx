import React from 'react';
// import axios from 'axios';
import './quizStart.css';
import photoTest from '../../../assets/harryPotterPhotoBomb.jpg';

const QuizStart = () => {
  /*   const [characterName, setCharacterName] = useState('this character');
  const [characterImg, setCharacterImg] = useState(photoTest);
  const [result, setResult] = useState([]);
  setCharacterName('this Character');
  setCharacterImg(photoTest); */

  return (
    <div className="quiz-start">
      <div className="quiz-rules">
        <h2>
          Answer 5 questions and find out how well you know Dobby&apos;s friends
        </h2>
      </div>
      <div className="img-question-div">
        <img src={photoTest} alt="" />
        <p>Can you guess the house this character belongs to ?</p>
      </div>
      <div className="answers">
        <button type="button" className="answer cursor">
          Answer 1
        </button>
        <button type="button" className="answer cursor">
          Answer 2
        </button>
        <button type="button" className="answer cursor">
          Answer 3
        </button>
        <button type="button" className="answer cursor">
          Answer 4
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
