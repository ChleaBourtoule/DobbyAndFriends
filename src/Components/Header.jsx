import { NavLink } from 'react-router-dom';
import './header.css';
import logoNavbar from '../assets/logo-navbar.png';
import solemnlySwear from '../assets/solemnly-swear.png';

const Header = () => (
  <div className="header">
    <div>
      <NavLink className="nav-link" exact to="/">
        <img className="cursor" src={logoNavbar} alt="Dobby" />
      </NavLink>
    </div>
    <div>
      <img classename="sup-img" src={solemnlySwear} alt="I solemnly swear..." />
    </div>
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
  </div>
);

export default Header;
