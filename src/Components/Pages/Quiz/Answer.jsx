import PropTypes from 'prop-types';
import { useState } from 'react';
import photoBomb from '../../../assets/harryPotterPhotoBomb.jpg';

const Answer = ({
  buttonNb,
  house,
  houseUpperCase,
  logo,
  characterHouse,
  checkCorrectAnswer,
  /* trueAnswer, */
  /* setTrueAnswer, */
}) => {
  const [answerHouse, setAnswerHouse] = useState('');
  const [clicked, setClicked] = useState(false);

  const chooseClass = (res) => {
    let classAnswer = '';
    if (clicked) {
      if (res === characterHouse) {
        classAnswer = 'answer cursor true-answer';
      } else {
        classAnswer = 'answer cursor wrong-answer';
      }
    } else {
      classAnswer = 'answer cursor';
    }
    return classAnswer;
  };
  return (
    <button
      type="button"
      id={`button-${buttonNb}`}
      value={houseUpperCase}
      className={chooseClass(answerHouse)}
      onClick={(e) => {
        setClicked(true);
        setAnswerHouse(e.target.value);
        setTimeout(() => {
          checkCorrectAnswer(e.target.value);
          setAnswerHouse('');
          setClicked(false);
        }, 500);
      }}
    >
      {houseUpperCase}
      <img
        className="house cursor"
        id={`${house}Img`}
        src={logo}
        alt={`${house} logo`}
      />
    </button>
  );
};

Answer.propTypes = {
  buttonNb: PropTypes.number,
  house: PropTypes.string,
  houseUpperCase: PropTypes.string,
  characterHouse: PropTypes.string,
  logo: PropTypes.string,
  checkCorrectAnswer: PropTypes.func,
  /* trueAnswer: PropTypes.string,
  setTrueAnswer: PropTypes.func, */
};

Answer.defaultProps = {
  buttonNb: 1,
  house: 'house',
  houseUpperCase: 'House',
  characterHouse: 'house',
  logo: photoBomb,
  checkCorrectAnswer: () => {},
  /* trueAnswer: 'normal', */
  /* setTrueAnswer: () => {}, */
};

export default Answer;

/* <button
        type="button"
        id="button-1"
        value="Gryffindor"
        className={
        trueAnswer ? 'answer cursor true-answer' : 'answer cursor'
        }
        onClick={(e) => {
        checkCorrectAnswer(e.target.value);
        }}
    >
        Gryffindor
        <img
        className="house cursor"
        id="gryffindorImg"
        src={gryffindorLogo}
        alt="hufflepuff logo"
        />
</button> */
