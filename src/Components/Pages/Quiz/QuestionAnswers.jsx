import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import gryffindorLogo from '../../../assets/gryffindor.png';
import ravenclawLogo from '../../../assets/ravenclaw.png';
import hufflepuffLogo from '../../../assets/hufflepuff.png';
import slytherinLogo from '../../../assets/slytherin.png';
import photoBomb from '../../../assets/harryPotterPhotoBomb.jpg';

const QuestionAnswer = (props) => {
  const {
    characterName,
    characterImg,
    isItRightAnswer,
    trueAnswer,
    questionNb,
    result,
  } = props;
  return (
    <div className="img-question-answers">
      <div className="img">
        <img src={!characterImg ? photoBomb : characterImg} alt="" />
      </div>

      <div className="question-answers">
        <div className="question">
          <p>
            Can you guess the house{' '}
            {!characterName ? 'this character' : characterName} belongs to ?
          </p>
        </div>

        <div className="answers">
          <button
            type="button"
            id="button-1"
            value="Gryffindor"
            className={
              trueAnswer ? 'answer cursor true-answer' : 'answer cursor'
            }
            onClick={(e) => isItRightAnswer(e.target.value)}
          >
            {questionNb < 4 ? (
              'Gryffindor'
            ) : (
              <NavLink
                className="nav-link"
                exact
                to={{
                  pathname: '/quiz-result',
                  resultProps: result,
                }}
              >
                Gryffindor
              </NavLink>
            )}

            <img
              className="house cursor"
              id="gryffindorImg"
              src={gryffindorLogo}
              alt="hufflepuff logo"
            />
          </button>
          <button
            type="button"
            id="button-2"
            value="Ravenclaw"
            className="answer cursor"
            onClick={(e) => isItRightAnswer(e.target.value)}
          >
            {questionNb < 4 ? (
              'Ravenclaw'
            ) : (
              <NavLink
                className="nav-link"
                exact
                to="/quiz-result"
                result={result}
              >
                Ravenclaw
              </NavLink>
            )}
            <img
              className="house cursor"
              id="ravenclawImg"
              src={ravenclawLogo}
              alt="ravenclaw logo"
            />
          </button>
          <button
            type="button"
            id="button-3"
            value="Hufflepuff"
            className="answer cursor"
            onClick={(e) => isItRightAnswer(e.target.value)}
          >
            {questionNb < 4 ? (
              'Hufflepuff'
            ) : (
              <NavLink
                className="nav-link"
                exact
                to="/quiz-result"
                result={result}
              >
                Hufflepuff
              </NavLink>
            )}
            <img
              className="house cursor"
              id="hufflepuffImg"
              src={hufflepuffLogo}
              alt="hufflepuff logo"
            />
          </button>
          <button
            type="button"
            id="button-4"
            value="Slytherin"
            className="answer cursor"
            onClick={(e) => isItRightAnswer(e.target.value)}
          >
            {questionNb < 4 ? (
              'Slytherin'
            ) : (
              <NavLink
                className="nav-link"
                exact
                to="/quiz-result"
                result={result}
              >
                Slytherin
              </NavLink>
            )}
            <img
              className="house cursor"
              id="slytherinImg"
              src={slytherinLogo}
              alt="slytherin logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

QuestionAnswer.propTypes = {
  characterName: PropTypes.string,
  characterImg: PropTypes.string,
  trueAnswer: PropTypes.bool,
  isItRightAnswer: PropTypes.func,
  questionNb: PropTypes.number,
  result: PropTypes.number,
};

QuestionAnswer.defaultProps = {
  characterName: 'this character',
  characterImg: photoBomb,
  trueAnswer: false,
  isItRightAnswer: () => {},
  questionNb: 0,
  result: 0,
};

export default QuestionAnswer;
