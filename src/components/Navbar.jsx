const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            caiorossi<span>.dev</span>
          </a>
        </div>

        <nav className="navbar-navigation">
          <a href="#javascript" className="text-copy-14 nav-link">
            JavaScript
          </a>
          <a href="#react" className="text-copy-14 nav-link">
            React
          </a>
          <a href="#redux-legado" className="text-copy-14 nav-link">
            Redux Legado
          </a>
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com/seu-usuario/seu-repositorio"
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
