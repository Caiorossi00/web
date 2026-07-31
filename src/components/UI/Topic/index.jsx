import { useParams } from 'react-router-dom';
import paths from '../../../data/paths';

const Topic = () => {
  const { pathSlug, topicSlug } = useParams();

  const path = paths.find((path) => path.slug === pathSlug);

  const topic = path?.modules
    .flatMap((module) => module.topics)
    .find((topic) => topic.slug === topicSlug);

  if (!topic) {
    return <h1>Tópico não encontrado</h1>;
  }

  return <main>{topic.content}</main>;
};

export default Topic;
