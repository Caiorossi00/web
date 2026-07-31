import comoMaterialFoiConstruido from './topics/como-material-foi-construido';
import porQueEsseMaterialExiste from './topics/por-que-esse-material-existe';

const module = {
  id: 2,
  slug: 'introducao',
  order: 2,
  title: 'O motor do React (Virtual DOM e Fiber)',
  objective: 'Contextualizar o leitor sobre o propósito do material...',
  estimatedTime: 35,
  topics: [comoMaterialFoiConstruido, porQueEsseMaterialExiste],
};

export default module;
