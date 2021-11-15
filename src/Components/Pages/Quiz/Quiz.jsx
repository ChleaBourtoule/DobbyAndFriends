import './quiz.css';
import { NavLink } from 'react-router-dom';
import '../../../arrows.css';

const Quiz = () => {
  return (
    <div className="quiz">
      <h1 className="title quiz-title">Do you know Dobby&apos; friends ?</h1>
      <div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </div>
      <button type="button" id="start-quiz" className="cursor">
        <NavLink className="nav-link" exact to="/quiz-start">
          Let&apos;s start
        </NavLink>
      </button>
    </div>
  );
};

export default Quiz;
