import { NavLink } from 'react-router-dom';
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
          <NavLink exact to="/">
            <img className="cursor" src={logoNavbar} alt="Dobby" />
          </NavLink>
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
            <NavLink
              className="cursor nav-link"
              activeClassName="active"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cursor nav-link"
              activeClassName="active"
              to="/quiz"
            >
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cursor nav-link"
              activeClassName="active"
              to="/library"
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cursor nav-link"
              activeClassName="active"
              to="/favorite"
            >
              Your Character
            </NavLink>
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
            <NavLink className={isToggle} activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={isToggle} activeClassName="active" to="/quiz">
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isToggle}
              activeClassName="active"
              to="/library"
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isToggle}
              activeClassName="active"
              to="/favorite"
            >
              Your Character
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
