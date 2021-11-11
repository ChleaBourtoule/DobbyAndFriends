import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quizStart.css';
import photoTest from '../../../assets/harryPotterPhotoBomb.jpg';

const QuizStart = () => {
  const [characters, setCharacters] = useState([{}]);
  const [randomNb, setRandomNb] = useState(0);
  const [characterName, setCharacterName] = useState('this character');
  const [characterImg, setCharacterImg] = useState(photoTest);
  const [characterHouse, setCharacterHouse] = useState('');
  const [result, setResult] = useState(0);
  const [questionNb, setQuestionNb] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(false);

  useEffect(() => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.data)
      .then((data) => setCharacters(data));
    console.log(characters);
    setCharacters(
      characters.filter(
        (character) => character.house !== null && character.image !== null
      )
    );
  }, []);

  useEffect(() => {
    const random = Math.floor(Math.random() * characters.length);
    setRandomNb(random);
    console.log(randomNb);
    setCharacterName(characters[randomNb].name);
    setCharacterHouse(characters[randomNb].house);
    setCharacterImg(characters[randomNb].image);
    setTrueAnswer(false);
  }, [questionNb]);

  function isItRightAnswer(e) {
    if (e === characterHouse) {
      setResult(result + 1);
      setQuestionNb(questionNb + 1);
      setTrueAnswer(true);
    } else {
      setQuestionNb(questionNb + 1);
    }
  }
  return (
    <div className="quiz-start">
      <div className="quiz-rules">
        <h2>
          Answer 5 questions and find out how well you know Dobby&apos;s friends
        </h2>
      </div>
      <div className="img-question-div">
        <img src={characterImg} alt="" />
        <p>Can you guess the house {characterName} belongs to ?</p>
      </div>
      <div className="answers">
        <button
          type="button"
          id="button-1"
          value="Gryffindor"
          className={trueAnswer ? 'answer cursor true-answer' : 'answer cursor'}
          onClick={(e) => isItRightAnswer(e.target.value)}
        >
          Gryffindor
        </button>
        <button
          type="button"
          id="button-2"
          value="Ravenclaw"
          className="answer cursor"
          onClick={(e) => isItRightAnswer(e.target.value)}
        >
          Ravenclaw
        </button>
        <button
          type="button"
          id="button-3"
          value="Hufflepuff"
          className="answer cursor"
          onClick={(e) => isItRightAnswer(e.target.value)}
        >
          Hufflepuff
        </button>
        <button
          type="button"
          id="button-4"
          value="Slytherin"
          className="answer cursor"
          onClick={(e) => isItRightAnswer(e.target.value)}
        >
          Slytherin
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
