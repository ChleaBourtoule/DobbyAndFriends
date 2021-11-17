import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import photoBomb from '../../../assets/harryPotterPhotoBomb.jpg';
import gryffindorLogo from '../../../assets/gryffindor.png';
import ravenclawLogo from '../../../assets/ravenclaw.png';
import hufflepuffLogo from '../../../assets/hufflepuff.png';
import slytherinLogo from '../../../assets/slytherin.png';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      characterName,
      characterImg,
      characterHouse,
      checkCorrectAnswer,
      trueAnswer,
      setTrueAnswer,
    } = this.props;

    const answers = [
      {
        key: 1,
        houseUpperCase: 'Gryffindor',
        house: 'gryffindor',
        logo: gryffindorLogo,
      },
      {
        key: 2,
        houseUpperCase: 'Hufflepuff',
        house: 'hufflepuff',
        logo: hufflepuffLogo,
      },
      {
        key: 3,
        houseUpperCase: 'Ravenclaw',
        house: 'ravenclaw',
        logo: ravenclawLogo,
      },
      {
        key: 4,
        houseUpperCase: 'Slytherin',
        house: 'slytherin',
        logo: slytherinLogo,
      },
    ];

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
            {answers.map((answer) => (
              <Answer
                key={answer.key}
                house={answer.house}
                houseUpperCase={answer.houseUpperCase}
                logo={answer.logo}
                characterHouse={characterHouse}
                checkCorrectAnswer={(houseName) =>
                  checkCorrectAnswer(houseName)
                }
                trueAnswer={trueAnswer}
                setTrueAnswer={setTrueAnswer}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

QuestionAnswer.propTypes = {
  characterName: PropTypes.string,
  characterImg: PropTypes.string,
  characterHouse: PropTypes.string,
  trueAnswer: PropTypes.string,
  checkCorrectAnswer: PropTypes.func,
  setTrueAnswer: PropTypes.func,
};

QuestionAnswer.defaultProps = {
  characterName: 'this character',
  characterImg: photoBomb,
  characterHouse: 'house',
  trueAnswer: 'normal',
  checkCorrectAnswer: () => {},
  setTrueAnswer: () => {},
};

export default QuestionAnswer;
