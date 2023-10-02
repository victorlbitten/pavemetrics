export const capabilitiesText = [
  {
    title: 'Geometria Ferroviária',
    paragraphs: [
      'A informação sobre a geometria da via férrea é fundamental na indústria ferroviária. As medidas de bitola, alinhamento e nível transversal são usadas para monitorar e modelar a segurança  da via sob diversas condições de carga, curvaturas e larguras de bitola.',
      'Embora as medidas de geometria da via geralmente exijam um sistema de inspeção dedicado separado, o LRAIL é capaz de realizar essas tarefas simultaneamente com outras tarefas importantes, como inspeção de grampos e pregos, inspeção de lastro, inspeção de travessas e outras.',
      'O LRAIL utiliza inteligência artificial para primeiro corrigir digitalizações 3D de acordo com o movimento do veículo de medição usando sensores IMUs embutidos. Em seguida, os dados 3D são analisados para detectar trilhos, localizar o topo dos trilhos para medidas de nível transversal e o ponto de medida da bitola (5/8" abaixo do topo do trilho) para medidas de bitola e alinhamento dos trilhos. Os comprimentos de corda são personalizáveis para corresponder ao padrão específico do cliente.',
    ],
  },
  {
    title: 'Inspeção de Desgaste de trilhos',
    paragraphs: [
      'As cabeças dos trilhos são regularmente expostas a cargas pesadas provenientes de trens longos, bem como a tensões localizadas associadas à aceleração e à frenagem. Essas tensões deformam a superfície dos trilhos, resultando em desgaste na cabeça e nas laterais.',
      'Embora o desgaste da cabeça do trilho normalmente exija um sistema de inspeção separado e dedicado, o LRAIL é capaz de executar essa tarefa simultaneamente com outras tarefas importantes, como inspeção de clipes e pontas, inspeção de lastro e inspeção de dormentes, por exemplo.',
      'Os algoritmos do LRAIL analisam dados em 3D para realizar medições de desgaste nos trilhos superiores, laterais e nos cantos. Essas medições de desgaste podem ser aplicadas tanto a trilhos de perfil padrão quanto aos trilhos ranhurados, como os usados em sistemas de metrô.',
      'Além disso, por meio dos algoritmos de detecção de alterações do LRAIL, as variações no desgaste podem ser identificadas de forma automática e relatadas, destacando às equipes  de manutenção da via as áreas da rede ferroviária que requerem maior atenção.',
    ],
  },
  {
    title: 'Inspeção de Grampos',
    paragraphs: [
      'Os grampos desempenham um papel crucial no funcionamento seguro e adequado dos sistemas de fixação ferroviária. Eles são responsáveis por fixar os trilhos à placa de base subjacente, garantindo que os trilhos estejam firmemente conectados às travessas subjacentes',
      'A ausência, a soltura e os danos aos grampos comprometem o desempenho geral do sistema de fixação, tornando a detecção dessas irregularidades uma tarefa importante na inspeção ferroviária',
      ' No entanto, a inspeção de grampos pode ser desafiadora para sistemas tradicionais de visão em 2D, uma vez que os grampos apresentam uma ampla variedade de formas, tamanhos e designs, tornando-os difíceis de serem detectados apenas com dados em 2D.',
      'O LRAIL simplifica a tarefa de inspeção de grampos, utilizando inteligência artificial para analisar tanto dados em 2D quanto em 3D, com o objetivo de detectar com maior precisão grampos presentes e ausentes (e seus componentes), tipo de grampo, grampos soltos, grampos danificados e grampos cobertos.',
      'Além disso, por meio dos algoritmos de Detecção de Mudanças do LRAIL, é possível identificar automaticamente alterações no inventário e nas condições dos grampos e relatar essas mudanças, direcionando as equipes de manutenção da via para as partes da rede que mais precisam de atenção.',
    ],
  },
  {
    title: ' Inspeção de Nível de Lastro e Contaminação',
    paragraphs: [
      'O lastro da via desempenha um papel crucial no funcionamento adequado e, em última instância,na segurança das linhas ferroviárias. Ele é usado para transmitir e distribuir a carga dos trilhose dos equipamentos rolantes para o subleito, para manter a estabilidade lateral, longitudinale vertical da via, facilitar o escoamento da água, manter os níveis corretos de superfície e elevação,além de inibir o crescimento de vegetação.',
      'No entanto, devido às condições climáticas, à carga dos trens e às variações na qualidadedo material do lastro, o lastro pode deteriorar-se com o tempo e se tornar menos eficaz.  Por exemplo, chuvas intensas podem resultar na lavagem do lastro, expondo os dormentese aumentando o risco de desalinhamento.',
      'Além disso, o lastro pode se tornar contaminado devido à fragmentação e abrasão daspartículas do lastro, infiltração de camadas subjacentes e derramamento de carga duranteo transporte. A contaminação é muitas vezes agravada por ciclos de umidade e o lastrocontaminado pode levar a problemas de drenagem e, consequentemente, a desvios nasuperfície da via devido ao aumento da rigidez da camada.',
      'No entanto, a inspeção do lastro é frequentemente um processo subjetivo devido à falta deuma definição formal para quando o lastro é considerado contaminado e devido ao processomuitas vezes manual de inspeção.',
      'O LRAIL simplifica a tarefa de inspeção do lastro ao utilizar inteligência artificialpara analisar dados em 2D e 3D, permitindo medir de forma precisa e objetiva a altura do lastroe a contaminação do lastro. A altura do lastro é medida automaticamente nas extremidades dosdormentes, e áreas com altura inadequada (conforme definido pelo usuário) podem ser identificadas.A contaminação do lastro, tanto no lado da bitola quanto no lado do campo, pode ser detectada equantificada automaticamente e de forma objetiva. Mudanças na altura do lastro e no nível decontaminação entre inspeções subsequentes também podem ser detectadas e relatadas automaticamente.',
    ],
  },
  {
    title: 'Inspeção de Dormentes (Travessas)',
    paragraphs: [
      'As travessas ferroviárias desempenham um papel fundamental na operação de uma ferrovia, transferindo cargas para o lastro da via e o subleito, mantendo os trilhos na posição vertical e contribuindo para a manutenção da bitola correta, prevenindo descarrilamentos.',
      'No entanto, os sistemas de travessas de madeira e de concreto se degradam ao longo do tempo, exigindo inspeções eficazes e objetivas para garantir sua integridade. As travessas de madeira podem desenvolver fendas cada vez maiores, apodrecer e perder a capacidade de suportar adequadamente a via. Já as travessas de concreto podem apresentar rachaduras longitudinais e transversais, bem como lascas decorrentes de descarrilamentos e operações de compactação. Além disso, tanto as travessas de madeira quanto as de concreto podem ficar desalinhadas, perdendo a perpendicularidade em relação aos trilhos.',
      'No entanto, a inspeção de travessas pode ser um desafio para sistemas tradicionais de visão 2D, uma vez que eles se baseiam apenas na aparência das travessas, sem realizar medições tridimensionais o comprimento, largura e profundidade de fendas, rachaduras e lascas. Além disso, a superfície das travessas pode sofrer descoloração ao longo do tempo, o que reduz ainda mais as informações disponíveis  para sistemas 2D já limitados.',
      'O LRAIL simplifica a tarefa de inspeção de travessas ao utilizar a inteligência artificial para analisar dados em 2D e 3D, permitindo a detecção e o relatório mais precisos da quantidade de travessas, de sua posição, do material, da cobertura superficial, do desalinhamento, bem como da qualidade das travessas de madeira e de concreto.',
      'Além disso, por meio dos algoritmos de Detecção de Mudanças do LRAIL, é possível identificar automaticamente e relatar mudanças na qualidade das travessas e em seu desalinhamento entre inspeções subsequentes, direcionando as equipes de manutenção da via para as partes da rede que mais precisam de atenção.',
    ],
  },
  {
    title: 'Detecção de Mudanças',
    paragraphs: [
      'Até recentemente, a indústria ferroviária costumava se concentrar na mediçãode parâmetros de desempenho discretos para determinar se um limite mínimo demanutenção ou segurança havia sido atingido.',
      'No entanto, essa abordagem é limitada a sinalizar seções da via somente quandoatingem um limite mínimo definido, apesar de o mesmo trecho da via estar gradualmentese deteriorando até esse ponto.',
      'O LRAIL transforma esse processo ao ir além das medições discretas paraa detecção de mudanças em regiões-chave de interesse ao longo da via. Esse métodopermite que problemas na via sejam detectados conforme se desenvolvem, muito antesde atingirem os limites de manutenção ou segurança que poderiam resultar em fechamentoou avisos de velocidade.',
      'A inteligência artificial do LRAIL alinha automaticamente as inspeções repetidas e, em seguida,analisa dados em 2D e 3D para detectar mudanças entre eles.',
      'Mudanças positivas, devido à realização de manutenção, assim como mudanças negativas podemser detectadas. Exemplos de mudanças que podem ser detectadas incluem:',
    ],
  },
];






export const aboutText = {
  title: "Escopo de levantamentos com o LCMS2 para Ferrovias utilizando o Software LRAIL",
  paragraphs: [
    "O Sistema de Inspeção Ferroviária a Laser oferece um meio totalmente novo e mais econômico para inspecionar ativos ferroviários.",
    "A maioria dos sensores de inspeção ferroviária existentes no mercado atualmente estão limitados a uma única função: eles medem um parâmetro específico, como medidor, ou executam uma única tarefa, como geração de imagens ou classificação simples.",
    "O LRAIL proporciona maior ROI(retorno de investimento) ao fornecer uma inspeção multifuncional que fornece imagens 2D e digitalização 3D em uma única passagem com análise totalmente automatizada usando Inteligência Artificial.",
    "O LRAIL captura uma impressionante resolução de varredura de 1 mm X e Y e 0, 1 mm Z dos trilhos, dormentes e área de lastro a velocidades de até 120 km / h.",
    "Os algoritmos de Inteligência Artificial do LRAIL medem e detectam automaticamente alterações relacionadas à bitola, nível cruzado, alinhamento, pontas, clipes, placas de amarração, folga de junta, aparafusamento de barra de junta, desgaste da superfície do trilho e grau de amarração."
  ]
};

