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
        <ReactAudioPlayer src={music} autoPlay />
        <ul className="nav-bar">
          <li>
            <HashLink className="cursor nav-link" exact to="/#root">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink className="cursor nav-link" to="/quiz#root">
              Quiz
            </HashLink>
          </li>
          <li>
            <HashLink className="cursor nav-link" to="/library#root">
              Library
            </HashLink>
          </li>
          <li>
            <HashLink className="cursor nav-link" to="/favorite">
              Your Character
            </HashLink>
          </li>
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
          <li>
            <HashLink className={isToggle} exact to="/#root">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink className={isToggle} to="/quiz#root">
              Quiz
            </HashLink>
          </li>
          <li>
            <HashLink className={isToggle} to="/library#root">
              Library
            </HashLink>
          </li>
          <li>
            <HashLink className={isToggle} to="/favorite#root">
              Your Character
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
