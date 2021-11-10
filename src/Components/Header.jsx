import { NavLink } from 'react-router-dom';
import './header.css';
import logoNavbar from '../assets/logo-navbar.png';
import solemnlySwear from '../assets/solemnly-swear.png';

const Header = () => (
  <div className="header">
    <div>
      <NavLink classname="nav-link" exact to="/DobbyAnfFriends/">
        <img className="cursor" src={logoNavbar} alt="Dobby" />
      </NavLink>
    </div>
    <div>
      <img src={solemnlySwear} alt="I solemnly swear..." />
    </div>
    <ul className="nav-bar">
      <li>
        <NavLink
          className="cursor nav-link"
          activeClassName="active"
          exact
          to="/DobbyAnfFriends/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cursor nav-link"
          activeClassName="active"
          to="/DobbyAnfFriends/quiz/"
        >
          Quiz
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cursor nav-link"
          activeClassName="active"
          to="/DobbyAnfFriends/library/"
        >
          Library
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
