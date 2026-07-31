import { Link } from 'react-router-dom';

const TrackCard = ({ track }) => {
  return (
    <Link to={`/paths/${track.slug}`} className={`track-card card-${track.id}`}>
      <div className="card-overlay"></div>
      <div className="card-content">
        <div className="card-badge-group">
          <span className="text-copy-14 card-badge progress-badge">{track.progress} concluído</span>
        </div>

        <h3 className="card-main-title">{track.title}</h3>

        <div className="card-metadata text-copy-14">
          <span>{track.modulesCount} módulos</span>
          <span className="separator">•</span>
          <span>{track.topicsCount} tópicos</span>
        </div>

        <span className="text-copy-14 card-action-btn">
          {track.buttonText} <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
};

export default TrackCard;
