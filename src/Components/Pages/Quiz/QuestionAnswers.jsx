import React from 'react';
import PropTypes from 'prop-types';
import gryffindorLogo from '../../../assets/gryffindor.png';
import ravenclawLogo from '../../../assets/ravenclaw.png';
import hufflepuffLogo from '../../../assets/hufflepuff.png';
import slytherinLogo from '../../../assets/slytherin.png';
import photoBomb from '../../../assets/harryPotterPhotoBomb.jpg';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { characterName, characterImg, isItRightAnswer, trueAnswer } =
      this.props;
    console.log(characterName);
    return (
      <div className="img-question-answers">
        <div className="img">
          <img src={!characterImg ? photoBomb : characterImg} alt="" />
        </div>

        <div className="question-answers">
          <div className="question">
            <p>
              Can you guess the house{' '}
              {characterName === '' ? ' this character ' : characterName}{' '}
              belongs to ?
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
              onClick={(e) => {
                isItRightAnswer(e.target.value);
              }}
            >
              Gryffindor
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
              onClick={(e) => {
                isItRightAnswer(e.target.value);
              }}
            >
              Ravenclaw
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
              onClick={(e) => {
                isItRightAnswer(e.target.value);
              }}
            >
              Hufflepuff
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
              onClick={(e) => {
                isItRightAnswer(e.target.value);
              }}
            >
              Slytherin
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
  }
}

QuestionAnswer.propTypes = {
  characterName: PropTypes.string,
  characterImg: PropTypes.string,
  trueAnswer: PropTypes.bool,
  isItRightAnswer: PropTypes.func,
};

QuestionAnswer.defaultProps = {
  characterName: 'this character',
  characterImg: photoBomb,
  trueAnswer: false,
  isItRightAnswer: () => {},
};

export default QuestionAnswer;
