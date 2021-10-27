import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <ul className='Header'>
        <li><NavLink activeClassName="active" exact to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="active" to='/'>Library</NavLink></li>
    </ul>
)

export default Header;