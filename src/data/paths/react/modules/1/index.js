import comoMaterialFoiConstruido from './topics/como-material-foi-construido';
import porQueEsseMaterialExiste from './topics/por-que-esse-material-existe';

const module = {
  id: 1,
  slug: 'introducao',
  order: 1,
  title: 'Filosofia e Paradigma do React',
  objective: 'Contextualizar o leitor sobre o propósito do material...',
  estimatedTime: 35,
  topics: [comoMaterialFoiConstruido, porQueEsseMaterialExiste],
};

export default module;
