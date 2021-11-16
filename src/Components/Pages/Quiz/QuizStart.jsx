import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quizStart.css';
import QuestionAnswer from './QuestionAnswers';
import ResultPage from './ResultPage';

const QuizStart = () => {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState('this character');
  const [characterImg, setCharacterImg] = useState('photoTest');
  const [characterHouse, setCharacterHouse] = useState('');
  const [result, setResult] = useState(0);
  const [questionNb, setQuestionNb] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [start, setStart] = useState(false);
  const [randomArray, setRandomArray] = useState([]);

  useEffect(async () => {
    await axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.data)
      .then((data) => {
        setCharacters(
          data.filter((character) => character.house && character.image)
        );
      });
  }, []);

  useEffect(() => {
    if (characters.length > 1) {
      let nextRandom = Math.floor(Math.random() * characters.length);
      while (randomArray.includes(nextRandom)) {
        nextRandom = Math.floor(Math.random() * characters.length);
      }
      setRandomArray([...randomArray, nextRandom]);
      setCharacterName(characters[nextRandom].name);
      setCharacterHouse(characters[nextRandom].house);
      setCharacterImg(characters[nextRandom].image);
    }
  }, [start, questionNb]);

  const checkCorrectAnswer = (houseName) => {
    if (houseName === characterHouse) {
      setResult(result + 1);
      alert('Bonne réponse');
    }
    setQuestionNb(questionNb + 1);
    setTrueAnswer(true);
  };

  return (
    <div className="quiz-page">
      {questionNb < 5 ? (
        <div className="quiz-start">
          <div className="quiz-rules">
            <h2>
              Answer 5 questions and find out how well you know Dobby&apos;s
              friends
            </h2>
          </div>
          {!start ? (
            <button
              className="cursor"
              type="button"
              id="start"
              onClick={() => setStart(!start)}
            >
              Start
            </button>
          ) : (
            <QuestionAnswer
              checkCorrectAnswer={(houseName) => checkCorrectAnswer(houseName)}
              characterName={characterName}
              characterImg={characterImg}
              trueAnswer={trueAnswer}
            />
          )}
        </div>
      ) : (
        <ResultPage result={result} />
      )}
    </div>
  );
};

export default QuizStart;
