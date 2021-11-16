import './footer.css';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoFooter from '../assets/logo_footer.png';

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="footer-container">
      <div className="footer-container-column">
        <div className="footer-column">
          <HashLink to={`${location.pathname}#root`}>
            <img src={logoFooter} alt="logo du footer" />{' '}
          </HashLink>
        </div>
        <div className="footer-column">
          <h3>Section</h3>
          <HashLink
            className="cursor nav-link"
            activeClassName="active"
            to="/#root"
          >
            Home
          </HashLink>
          <HashLink
            className="cursor nav-link"
            activeClassName="active"
            to="/quiz#root"
          >
            Quiz
          </HashLink>
          <HashLink
            className="cursor nav-link"
            activeClassName="active"
            to="/favorite#root"
          >
            Character
          </HashLink>
          <HashLink
            activeClassName="active"
            className="cursor nav-link"
            to="/library#root"
          >
            Library
          </HashLink>

          <HashLink
            className="cursor nav-link"
            activeClassName="active"
            to="/contact#root"
          >
            Contact us
          </HashLink>
        </div>
        <hr />
        <div className="footer-column">
          <h3>Links</h3>
          <a
            className="cursor nav-link"
            href="https://wizardingworld.warnerbros.fr/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Official website
          </a>
        </div>
        <hr />
        <div className="footer-column">
          <h3>GitHub links of the team </h3>
          <a
            target="_blank"
            className="cursor nav-link"
            href="https://github.com/bast44trl"
            rel="noreferrer"
          >
            {' '}
            GitHub Bastien
          </a>
          <a
            target="_blank"
            className="cursor nav-link"
            href="https://github.com/Just4Joy"
            rel="noreferrer"
          >
            GitHub Laurent{' '}
          </a>
          <a
            className="cursor nav-link"
            href="https://github.com/ChleaBourtoule"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            GitHub Chléa{' '}
          </a>
          <a
            className="cursor nav-link"
            href="https://github.com/amandine-ctns"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            GitHub Amandine{' '}
          </a>
        </div>
      </div>
      <div className="footer-container-h4">
        <p>
          HARRY POTTER characters, names and related indicia are © &apos; ™
          Warner Bros. Entertainment Inc. J.K. ROWLING&apos;S WIZARDING WORLD ™
          J.K. Rowling and Warner Bros. Entertainment Inc. Publishing Rights ©
          JKR. (s18)
        </p>
      </div>
    </div>
  );
};

export default Footer;
