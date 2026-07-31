import { useParams, Outlet } from 'react-router-dom';
import paths from '../../../data/paths';

import './Path.scss';

const Path = () => {
  const { pathSlug } = useParams();

  const path = paths.find((path) => path.slug === pathSlug);

  if (!path) {
    return <h1>Trilha não encontrada</h1>;
  }

  return (
    <main className="path-container">
      <header className="path-header">
        <h1 className="path-title">{path.title}</h1>

        {path.description && <p className="path-description">{path.description}</p>}
      </header>

      <section className="path-content">
        <Outlet context={{ path }} />
      </section>
    </main>
  );
};

export default Path;
