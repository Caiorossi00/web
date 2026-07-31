import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            Caiorossi<span>.dev</span>
          </Link>
        </div>

        <nav className="navbar-navigation">
          <Link to="/paths/javascript" className="text-copy-14 nav-link">
            JavaScript
          </Link>

          <Link to="/paths/react" className="text-copy-14 nav-link">
            React
          </Link>

          <Link to="/paths/redux" className="text-copy-14 nav-link">
            Redux Legado
          </Link>
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com/Caiorossi00/Engenharia-Frontend-em-Profundidade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copy-14 btn-navbar"
          >
            Ver Repositório
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
