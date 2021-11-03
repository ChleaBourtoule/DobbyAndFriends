import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="header">
    <div>
      <NavLink exact to="/">
        <img className="cursor" src="../logo-navbar.png" alt="Dobby" />
      </NavLink>
    </div>
    <div>
      <img src="../solemnly-swear.png" alt="I solemnly swear..." />
    </div>
    <ul className="nav-bar">
      <li>
        <NavLink className="cursor" activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="cursor" activeClassName="active" to="/library">
          Library
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
