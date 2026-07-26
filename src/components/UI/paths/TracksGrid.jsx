import TrackCard from './TrackCard';

const TRACKS_DATA = [
  {
    id: 'javascript',
    title: 'JavaScript',
    modulesCount: 4,
    topicsCount: 24,
    progress: '100%',
    buttonText: 'Ver Tópicos',
    link: '#javascript',
  },
  {
    id: 'react',
    title: 'React',
    modulesCount: 9,
    topicsCount: 52,
    progress: '100%',
    buttonText: 'Ver Tópicos',
    link: '#react',
  },
  {
    id: 'redux-legado',
    title: 'Redux Legado',
    modulesCount: 5,
    topicsCount: 21,
    progress: '15%',
    buttonText: 'Continuar Lendo',
    link: '#redux-legado',
  },
];

const TracksGrid = () => {
  return (
    <section className="tracks-section">
      <h2 className="text-heading section-title">Trilhas de Especialização</h2>

      <div className="tracks-grid">
        {TRACKS_DATA.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  );
};

export default TracksGrid;
