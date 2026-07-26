const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="text-heading hero-title">Engenharia de Frontend além das ferramentas.</h1>

        <p className="text-copy-14 hero-subtitle">
          Um plano de estudos 100% autoral focado na mecânica interna do JavaScript, arquitetura do
          React e modernização de código legado.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Explorar Trilhas <span className="arrow">↓</span>
          </button>

          <a
            href="https://github.com/seu-usuario/seu-repositorio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Acessar GitHub <span className="arrow">↗</span>
          </a>
        </div>

        <div className="hero-rating">
          <div className="rating-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span className="text-copy-14 rating-text">+50 stars no GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
