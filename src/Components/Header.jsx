import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="Header">
    <div>
      <NavLink exact to="/">
        <img src="../logo-navbar.png" alt="Dobby" />
      </NavLink>
    </div>
    <div>
      <img src="../solemnly-swear.png" alt="I solemnly swear..." />
    </div>
    <ul className="NavBar">
      <li>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/library">
          Library
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
