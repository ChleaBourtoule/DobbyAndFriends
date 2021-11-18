import { HashLink } from 'react-router-hash-link';
import './header.css';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import music from '../assets/music/music.ogg';
import logoNavbar from '../assets/logo-navbar.png';
import solemnlySwear from '../assets/solemnly-swear.png';

const Header = () => {
  const [isToggle, setIsToggle] = useState('cursor nav-link');
  const toggle = () => {
    if (isToggle === 'cursor nav-link') {
      setIsToggle('cursor toggle');
    }
    if (isToggle === 'cursor toggle') {
      setIsToggle('cursor nav-link');
    }
  };

  const [isDropdown, SetIsDropdown] = useState('dropdown');
  const dropdown = () => {
    if (isDropdown === 'dropdown') {
      SetIsDropdown('toggle');
    }
    if (isDropdown === 'toggle') {
      SetIsDropdown('dropdown');
    }
  };

  return (
    <div className="header-container">
      <ReactAudioPlayer src={music} autoPlay volume={1} />
      <div className="header">
        <div>
          <HashLink exact to="/#root">
            <img className="cursor" src={logoNavbar} alt="Dobby" />
          </HashLink>
        </div>
        <div>
          <img
            className="solemnly"
            src={solemnlySwear}
            alt="I solemnly swear..."
          />
        </div>
        <ul className="nav-bar">
          <HashLink className="nav-link" exact to="/#root">
            <li className="cursor">Home</li>
          </HashLink>
          <HashLink className="cursor nav-link" to="/quiz#root">
            <li className="cursor">Quiz</li>
          </HashLink>
          <HashLink className="cursor nav-link" to="/library#root">
            <li className="cursor">Library</li>
          </HashLink>
          <HashLink className="cursor nav-link" to="/favorite">
            <li className="cursor">Your Character</li>
          </HashLink>
        </ul>
        <button
          type="button"
          htmlFor="toggle"
          className="icon cursor"
          onClick={(toggle, dropdown)}
        >
          ☰
        </button>
      </div>
      <div className={isDropdown}>
        <ul className="nav-bar">
          <HashLink
            className={isToggle}
            onClick={() => SetIsDropdown('dropdown')}
            to="/#root"
          >
            <li>Home</li>
          </HashLink>
          <HashLink
            className={isToggle}
            onClick={() => SetIsDropdown('dropdown')}
            to="/quiz#root"
          >
            <li>Quiz</li>
          </HashLink>
          <HashLink
            className={isToggle}
            onClick={() => SetIsDropdown('dropdown')}
            to="/library#root"
          >
            <li>Library</li>
          </HashLink>
          <HashLink
            className={isToggle}
            onClick={() => SetIsDropdown('dropdown')}
            to="/favorite#root"
          >
            <li>Your Character</li>
          </HashLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
