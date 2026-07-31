import comoMaterialFoiConstruido from './topics/como-material-foi-construido';
import porQueEsseMaterialExiste from './topics/por-que-esse-material-existe';

const module = {
  id: 3,
  slug: 'introducao',
  order: 3,
  title: 'Hooks em nível conceitual',
  objective: 'Contextualizar o leitor sobre o propósito do material...',
  estimatedTime: 35,
  topics: [comoMaterialFoiConstruido, porQueEsseMaterialExiste],
};

export default module;
