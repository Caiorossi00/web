const topic = {
  slug: 'por-que-esse-material-existe',
  title: 'Por que este material existe e qual problema ele resolve',
  shortTitle: 'Por que este material existe',
  order: 2,
  estimatedTime: 10,
  completed: true,
  summary:
    'Entenda a motivação por trás deste material e a lacuna conceitual que ele busca resolver no aprendizado de React.',
  prerequisites: [],
  previousTopic: 'como-material-foi-construido',
  nextTopic: null,
  content: (
    <>
      <h1>Por que este material existe e qual problema ele resolve</h1>

      <p>
        Embora eu utilizasse React há anos, sentia uma lacuna persistente: conseguia aplicar a
        biblioteca, criar interfaces e estruturar aplicações, mas não compreendia plenamente{' '}
        <strong>por que</strong> React funcionava como funcionava, nem <strong>como</strong> suas
        abstrações operavam internamente.
      </p>

      <p>
        Faltava entendimento conceitual para justificar decisões, avaliar trade-offs e enxergar o
        design da biblioteca de forma sistêmica. Essa ausência de base teórica não é incomum, ela é
        consequência direta da maneira como React costuma ser ensinado.
      </p>

      <p>
        Grande parte do material disponível foca em tutoriais, padrões de uso ou exemplos práticos.
        Ensina-se <em>o que fazer</em>, mas raramente <em>por que fazer</em>.
      </p>

      <p>
        Explica-se a sintaxe dos hooks, mas não seu fundamento. Demonstra-se reatividade, mas não o
        modelo declarativo que a sustenta. Mostra-se o Virtual DOM, mas não o runtime, o scheduler
        ou o processo de reconciliação.
      </p>

      <p>Essa abordagem gera profissionais que dominam APIs, mas não dominam o sistema.</p>

      <p>Este material surge justamente para preencher essa lacuna.</p>

      <p>
        Ele não é um curso, nem um guia formal; é uma estrutura modular de anotações de estudo,
        curtas e diretas, escritas no ritmo do aprofundamento pessoal.
      </p>

      <p>
        A informalidade é intencional: trata-se de registrar conceitos de forma acessível, sem
        comprometer a precisão técnica.
      </p>

      <p>
        Cada módulo foi pensado para construir entendimento cumulativo, permitindo que o leitor
        desenvolva uma base sólida sobre o que React realmente faz e por que faz dessa maneira.
      </p>

      <p>
        A iniciativa de transformar esse material em e-book surgiu quando, com os módulos quase
        concluídos, ficou evidente que o conteúdo poderia beneficiar outras pessoas que desejam ir
        além do uso cotidiano da biblioteca.
      </p>

      <p>
        A proposta é oferecer um caminho claro para quem quer deixar de simplesmente{' '}
        <em>usar React</em> e passar a <strong>entender React</strong>.
      </p>

      <p>
        No fim, o problema que este material resolve é justamente o que motivou sua criação: a
        carência de uma abordagem concisa, progressiva e conceitual que explique React como um
        sistema completo, e não apenas como uma coleção de APIs.
      </p>
    </>
  ),
};

export default topic;
