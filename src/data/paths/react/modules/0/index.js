import comoMaterialFoiConstruido from './topics/como-material-foi-construido';
import porQueEsseMaterialExiste from './topics/por-que-esse-material-existe';

const module = {
  id: 0,
  slug: 'introducao',
  order: 0,
  title: 'Intenção, Método e Preparação Conceitual',
  objective: 'Contextualizar o leitor sobre o propósito do material...',
  estimatedTime: 35,
  topics: [comoMaterialFoiConstruido, porQueEsseMaterialExiste],
};

export default module;
