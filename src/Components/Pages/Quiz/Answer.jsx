import PropTypes from 'prop-types';
import photoBomb from '../../../assets/harryPotterPhotoBomb.jpg';

const Answer = ({
  key,
  house,
  houseUpperCase,
  logo,
  checkCorrectAnswer,
  trueAnswer,
}) => {
  return (
    <button
      type="button"
      id={`button-${key}`}
      value={houseUpperCase}
      className={trueAnswer ? 'answer cursor true-answer' : 'answer cursor'}
      onClick={(e) => {
        checkCorrectAnswer(e.target.value);
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
  key: PropTypes.number,
  house: PropTypes.string,
  houseUpperCase: PropTypes.string,
  logo: PropTypes.string,
  checkCorrectAnswer: PropTypes.func,
  trueAnswer: PropTypes.bool,
};

Answer.defaultProps = {
  key: 0,
  house: 'house',
  houseUpperCase: 'House',
  logo: photoBomb,
  checkCorrectAnswer: () => {},
  trueAnswer: false,
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
