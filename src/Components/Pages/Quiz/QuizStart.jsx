import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quizStart.css';
import QuestionAnswer from './QuestionAnswers';
import ResultPage from './ResultPage';

const QuizStart = () => {
  const [characters, setCharacters] = useState([{}]);
  const [randomNb, setRandomNb] = useState(0);
  const [characterName, setCharacterName] = useState('this character');
  const [characterImg, setCharacterImg] = useState('photoTest');
  const [characterHouse, setCharacterHouse] = useState('');
  const [result, setResult] = useState(0);
  const [questionNb, setQuestionNb] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(async () => {
    await axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.data)
      .then((data) =>
        setCharacters(
          data.filter((character) => character.house && character.image)
        )
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const random = Math.floor(Math.random() * characters.length);
    setRandomNb(random);
    setCharacterName(characters[randomNb].name);
    setCharacterHouse(characters[randomNb].house);
    setCharacterImg(characters[randomNb].image);
    setTrueAnswer(false);
  }, [start, questionNb]);

  const isItRightAnswer = (e) => {
    if (e === characterHouse) {
      setResult(result + 1);
      setQuestionNb(questionNb + 1);
      setTrueAnswer(true);
    } else {
      setQuestionNb(questionNb + 1);
    }
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
              isItRightAnswer={isItRightAnswer}
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
