import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quizStart.css';
import QuestionAnswer from './QuestionAnswers';

const QuizStart = () => {
  const [characters, setCharacters] = useState([]);
  const [randomNb, setRandomNb] = useState(0);
  const [characterName, setCharacterName] = useState('this character');
  const [characterImg, setCharacterImg] = useState('photoTest');
  const [characterHouse, setCharacterHouse] = useState('');
  const [result, setResult] = useState(0);
  const [questionNb, setQuestionNb] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [start, setStart] = useState(false);
  const [randomArray, setRandomArray] = useState([]);
  const [random, setRandom] = useState(0);
  const [nbArray, setNbArray] = useState(0);

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
    if (characters.length > 1) {
      for (let i = 0; i < 5; i += 1) {
        console.log(randomArray);
        console.log(random);
        while (randomArray.includes(random)) {
          setRandom(Math.floor(Math.random() * characters.length));
        }
        if (!randomArray.includes(random)) {
          setRandomArray(randomArray.push(random));
        }
      }
    }
  }, []);

  useEffect(() => {
    if (characters.length > 1) {
      setRandomNb(randomArray[nbArray]);
      setNbArray(nbArray + 1);
      setCharacterName(characters[randomNb].name);
      setCharacterHouse(characters[randomNb].house);
      setCharacterImg(characters[randomNb].image);
      setTrueAnswer(false);
    }
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
            questionNb={questionNb}
            result={result}
          />
        )}
      </div>
      )
    </div>
  );
};

export default QuizStart;
