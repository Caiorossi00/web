import { Link, useOutletContext } from 'react-router-dom';

import './Path.scss';

const PathHome = () => {
  const { path } = useOutletContext();

  return (
    <section className="path-home">
      <h2 className="path-section-title">Módulos</h2>

      <div className="module-list">
        {path.modules.map((module) => (
          <article className="module-card" key={module.slug}>
            <h3 className="module-title">
              Módulo {module.order} - {module.title}
            </h3>

            <p className="module-objective">{module.objective}</p>

            <h4 className="topics-title">Tópicos</h4>

            <ul className="topics-list">
              {module.topics.map((topic) => (
                <li className="topic-item" key={topic.slug}>
                  <Link className="topic-link" to={topic.slug}>
                    {topic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PathHome;
