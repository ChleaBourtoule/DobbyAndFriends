import './footer.css';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoFooter from '../assets/logo_footer.png';

const Footer = () => {
  const location = useLocation();
  return (
    <div className="footer-container">
      <div className="footer-container-column">
        <div className="footer-column">
          <HashLink to={`${location.pathname}#root`}>
            <img src={logoFooter} className="cursor" alt="logo du footer" />{' '}
          </HashLink>
        </div>
        <div className="footer-column">
          <h3>Dobby and his friends</h3>
          <HashLink className="cursor nav-link" to="/#root">
            Home
          </HashLink>
          <HashLink className="cursor nav-link" to="/quiz#root">
            Quiz
          </HashLink>
          <HashLink className="cursor nav-link" to="/favorite#root">
            Character
          </HashLink>
          <HashLink className="cursor nav-link" to="/library#root">
            Library
          </HashLink>

          <HashLink className="cursor nav-link" to="/contact#root">
            Contact us
          </HashLink>
        </div>
        <hr />
        <div className="footer-column">
          <h3>WarnerBros&apos;s Wizarding World</h3>
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
          <h3>GitHub links</h3>
          <a
            target="_blank"
            className="cursor nav-link"
            href="https://github.com/bast44trl"
            rel="noreferrer"
          >
            Bastien
          </a>
          <a
            target="_blank"
            className="cursor nav-link"
            href="https://github.com/Just4Joy"
            rel="noreferrer"
          >
            Laurent{' '}
          </a>
          <a
            className="cursor nav-link"
            href="https://github.com/ChleaBourtoule"
            target="_blank"
            rel="noreferrer"
          >
            Chléa{' '}
          </a>
          <a
            className="cursor nav-link"
            href="https://github.com/amandine-ctns"
            target="_blank"
            rel="noreferrer"
          >
            Amandine
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
