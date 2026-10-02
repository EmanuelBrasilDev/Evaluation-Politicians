export type GovernmentPlanAxis = {
  title: string;
  description: string;

  items: {
    text: string;
    pages: string;
  }[];
};

export type GovernmentPlanReference = {
  title: string;
  description: string;
  url: string;
};

export type GovernmentPlan = {
  slug: string;

  documentTitle: string;

  overview: string;

  projection: string[];

  axes: GovernmentPlanAxis[];

  specialNote?: {
    title: string;
    text: string;
  };

  references: GovernmentPlanReference[];
};


const tsePortal =
  "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/planos-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026";


export const governmentPlans: GovernmentPlan[] = [

  // =========================================================
  // LULA
  // =========================================================

  {
    slug: "lula",

    documentTitle:
      "Diretrizes para o Programa de Transformação do Brasil",

    overview:
      "O programa apresenta uma proposta de continuidade e aprofundamento de políticas públicas, organizada em torno de democracia, redução das desigualdades, segurança pública integrada, educação, saúde, infraestrutura, desenvolvimento produtivo, transição energética, sustentabilidade ambiental, valorização do trabalho e atuação internacional.",

    projection: [
      "Manutenção e ampliação de políticas sociais, de saúde e educação, com destaque para o SUS, educação integral e técnica e valorização do trabalho.",
      "Continuidade de investimentos em infraestrutura e neoindustrialização, incluindo Novo PAC e Nova Indústria Brasil.",
      "Avanço da transição energética, da economia de baixo carbono e de políticas voltadas ao combate ao desmatamento.",
    ],

    axes: [

      {
        title: "Economia e trabalho",

        description:
          "O plano combina responsabilidade fiscal, investimentos públicos e privados, política industrial e mudanças nas relações de trabalho.",

        items: [
          {
            text:
              "Continuidade da Nova Indústria Brasil e da política de neoindustrialização.",
            pages: "p. 47–54",
          },
          {
            text:
              "Investimentos em infraestrutura associados ao Novo PAC.",
            pages: "p. 15–56",
          },
          {
            text:
              "Fim da escala 6x1 e redução da jornada de trabalho para 40 horas.",
            pages: "p. 73–77",
          },
        ],
      },

      {
        title: "Saúde",

        description:
          "O documento prevê fortalecimento e expansão de diferentes áreas do Sistema Único de Saúde.",

        items: [
          {
            text:
              "Expansão da atenção especializada e redução de filas.",
            pages: "p. 34–40",
          },
          {
            text:
              "Continuidade e fortalecimento do Mais Médicos e da Farmácia Popular.",
            pages: "p. 34–40",
          },
          {
            text:
              "Expansão da atenção à saúde mental e da rede de CAPS.",
            pages: "p. 18–40",
          },
        ],
      },

      {
        title: "Segurança pública",

        description:
          "O plano enfatiza integração federal, inteligência e combate financeiro às organizações criminosas.",

        items: [
          {
            text:
              "Fortalecimento do Sistema Único de Segurança Pública e da inteligência.",
            pages: "p. 26–30",
          },
          {
            text:
              "Criação de um Ministério da Segurança Pública.",
            pages: "p. 26–30",
          },
          {
            text:
              "Asfixia financeira do crime organizado e reforço da segurança de fronteiras.",
            pages: "p. 26–30",
          },
        ],
      },

      {
        title: "Educação",

        description:
          "O programa propõe expansão da educação integral, profissional, superior e da formação docente.",

        items: [
          {
            text:
              "Ampliação das escolas em tempo integral.",
            pages: "p. 30–34",
          },
          {
            text:
              "Expansão do ensino técnico e dos Institutos Federais.",
            pages: "p. 30–34",
          },
          {
            text:
              "Continuidade e ampliação de políticas como ProUni, FIES e Pé-de-Meia.",
            pages: "p. 30–34",
          },
        ],
      },

      {
        title: "Meio ambiente e energia",

        description:
          "O programa relaciona política ambiental, energia e desenvolvimento econômico.",

        items: [
          {
            text:
              "Transição energética com expansão de fontes renováveis e hidrogênio.",
            pages: "p. 63–69",
          },
          {
            text:
              "Meta de desmatamento líquido zero e reforço do combate a incêndios.",
            pages: "p. 69–73",
          },
          {
            text:
              "Desenvolvimento do mercado de carbono.",
            pages: "p. 50–73",
          },
        ],
      },

      {
        title: "Estado e governança",

        description:
          "O plano prevê modernização administrativa, participação social e expansão de serviços públicos digitais.",

        items: [
          {
            text:
              "Ampliação da digitalização e integração dos serviços públicos.",
            pages: "p. 15–18",
          },
          {
            text:
              "Fortalecimento dos mecanismos de controle e transparência.",
            pages: "p. 15–18",
          },
          {
            text:
              "Ampliação da participação social por meio de conselhos, conferências e planejamento público.",
            pages: "p. 15–16",
          },
        ],
      },
    ],

    references: [
      {
        title: "Plano de Governo — PDF oficial",
        description:
          "Documento apresentado pela candidatura ao Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt",
      },
      {
        title: "Propostas organizadas por assunto",
        description:
          "Índice temático produzido pelo Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/lula-propostas-de-governo",
      },
      {
        title: "Portal de Planos de Governo 2026",
        description:
          "Página geral do TSE com os documentos das candidaturas presidenciais.",
        url: tsePortal,
      },
    ],
  },


  // =========================================================
  // FLÁVIO BOLSONARO
  // =========================================================

  {
    slug: "flavio-bolsonaro",

    documentTitle:
      "Diretrizes do Plano de Governo Flávio Bolsonaro 2027–2030",

    overview:
      "O plano combina reformas fiscais e administrativas, redução de impostos, estímulos ao empreendedorismo e emprego, digitalização de serviços públicos, mudanças na segurança pública, expansão de modelos educacionais e maior abertura comercial.",

    projection: [
      "Reformulação das regras fiscais e tributárias, acompanhada de redução de custos para empresas e trabalhadores.",
      "Digitalização de serviços públicos e do SUS, com utilização de inteligência artificial e prontuário eletrônico.",
      "Mudanças na política de segurança, gestão pública e inserção comercial internacional.",
    ],

    axes: [

      {
        title: "Economia e trabalho",

        description:
          "O plano enfatiza equilíbrio fiscal, redução tributária, empreendedorismo e mudanças na legislação trabalhista.",

        items: [
          {
            text:
              "Redução de impostos e revisão da estrutura tributária.",
            pages: "p. 30, 53 e 71–72",
          },
          {
            text:
              "Programas voltados ao primeiro emprego e à abertura da primeira empresa.",
            pages: "p. 27 e 43–45",
          },
          {
            text:
              "Redução do custo do trabalho e fortalecimento do negociado sobre o legislado.",
            pages: "p. 43–45",
          },
        ],
      },

      {
        title: "Saúde",

        description:
          "O documento prevê maior digitalização e integração do atendimento público de saúde.",

        items: [
          {
            text:
              "Prontuário eletrônico único e digitalização do SUS.",
            pages: "p. 25–26",
          },
          {
            text:
              "Agendamento utilizando inteligência artificial.",
            pages: "p. 25–26",
          },
          {
            text:
              "Uso da capacidade ociosa da rede privada e expansão da telessaúde.",
            pages: "p. 37–39",
          },
        ],
      },

      {
        title: "Segurança pública",

        description:
          "O plano reúne alterações penais, reforço tecnológico e ações contra facções e crimes violentos.",

        items: [
          {
            text:
              "Ampliação do combate a facções criminosas e tráfico em fronteiras e portos.",
            pages: "p. 13–15",
          },
          {
            text:
              "Expansão de reconhecimento facial e tecnologias de segurança.",
            pages: "p. 15",
          },
          {
            text:
              "Mudanças em regras de progressão de pena e maioridade penal.",
            pages: "p. 13–16",
          },
        ],
      },

      {
        title: "Educação",

        description:
          "O plano propõe mudanças pedagógicas, ampliação de modalidades escolares e maior ligação com a economia digital.",

        items: [
          {
            text:
              "Alfabetização baseada no método fônico.",
            pages: "p. 34–35",
          },
          {
            text:
              "Expansão de escolas em tempo integral e escolas cívico-militares.",
            pages: "p. 34–36",
          },
          {
            text:
              "Economia digital no currículo e expansão do ensino técnico.",
            pages: "p. 34–37",
          },
        ],
      },

      {
        title: "Agronegócio e meio ambiente",

        description:
          "O documento combina expansão produtiva, regularização fundiária, bioeconomia e instrumentos ambientais.",

        items: [
          {
            text:
              "Desenvolvimento da bioeconomia e do mercado de carbono.",
            pages: "p. 55–61",
          },
          {
            text:
              "Redução de queimadas e desmatamento.",
            pages: "p. 57–59",
          },
          {
            text:
              "Ampliação de irrigação, saneamento rural e regularização fundiária.",
            pages: "p. 27–59",
          },
        ],
      },

      {
        title: "Estado e governança",

        description:
          "O plano propõe reestruturação administrativa, digitalização e ampliação de processos de desestatização.",

        items: [
          {
            text:
              "Digitalização de 100% dos serviços públicos.",
            pages: "p. 24–25",
          },
          {
            text:
              "Redução do número de ministérios e reforma administrativa.",
            pages: "p. 69–71",
          },
          {
            text:
              "Programa Nacional de Desestatização.",
            pages: "p. 69–70",
          },
        ],
      },
    ],

    references: [
      {
        title: "Plano de Governo — PDF oficial",
        description:
          "Documento apresentado pela candidatura ao Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl",
      },
      {
        title: "Propostas organizadas por assunto",
        description:
          "Índice temático produzido pelo Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/flavio-bolsonaro",
      },
      {
        title: "Portal de Planos de Governo 2026",
        description:
          "Página geral do TSE com os documentos das candidaturas presidenciais.",
        url: tsePortal,
      },
    ],
  },


  // =========================================================
  // RENAN SANTOS
  // =========================================================

  {
    slug: "renan-santos",

    documentTitle:
      "Plano de Governo — Partido Missão",

    overview:
      "O programa combina ajuste fiscal e reformas administrativas com forte centralidade em segurança pública, digitalização da saúde, mudanças na educação, política industrial estratégica, reorganização federativa e propostas de transformação urbana.",

    projection: [
      "Reestruturação fiscal e administrativa do Estado, incluindo mudanças em despesas obrigatórias e gestão pública.",
      "Expansão de sistemas digitais de saúde, inteligência de segurança e instrumentos tecnológicos.",
      "Desenvolvimento de zonas econômicas estratégicas, fertilizantes, minerais críticos e setores tecnológicos.",
    ],

    axes: [

      {
        title: "Economia e Estado",

        description:
          "O plano propõe alterações fiscais, revisão de despesas e mudanças na estrutura do funcionalismo público.",

        items: [
          {
            text:
              "Ajuste fiscal e desindexação de despesas por meio de mudanças constitucionais.",
            pages: "p. 9–10",
          },
          {
            text:
              "Reforma do funcionalismo público e combate a supersalários.",
            pages: "p. 9–10",
          },
          {
            text:
              "Revisão de renúncias fiscais e outras despesas obrigatórias.",
            pages: "p. 10",
          },
        ],
      },

      {
        title: "Saúde",

        description:
          "O programa aposta em integração digital, triagem por gravidade e concentração regional de atendimentos complexos.",

        items: [
          {
            text:
              "Criação de escala nacional de estratificação de risco para filas.",
            pages: "p. 25–26",
          },
          {
            text:
              "Prontuário eletrônico nacional interoperável.",
            pages: "p. 25–26",
          },
          {
            text:
              "Telessaúde com inteligência artificial e centros regionais especializados.",
            pages: "p. 25–26",
          },
        ],
      },

      {
        title: "Segurança pública",

        description:
          "O documento concentra diversas propostas em repressão ao crime organizado, sistema prisional e retomada territorial.",

        items: [
          {
            text:
              "Construção de superpresídios de segurança máxima em regiões remotas.",
            pages: "p. 11–13",
          },
          {
            text:
              "Uso de drones, reconhecimento facial e outras tecnologias de monitoramento.",
            pages: "p. 13",
          },
          {
            text:
              "Proposta de uso de GLO e Estado de Defesa em operações de retomada territorial.",
            pages: "p. 12–13",
          },
        ],
      },

      {
        title: "Educação",

        description:
          "O plano propõe mudanças curriculares, disciplinares e na organização do ensino superior.",

        items: [
          {
            text:
              "Alfabetização universal baseada no método fônico.",
            pages: "p. 30–32",
          },
          {
            text:
              "Expansão de escolas civis-militares em áreas de alta criminalidade.",
            pages: "p. 31–32",
          },
          {
            text:
              "Reforma do ensino superior com foco em STEM e bolsas por mérito.",
            pages: "p. 21 e 30–32",
          },
        ],
      },

      {
        title: "Desenvolvimento estratégico",

        description:
          "O programa relaciona recursos naturais e setores tecnológicos a uma estratégia nacional de desenvolvimento.",

        items: [
          {
            text:
              "Zonas Econômicas Especiais para terras raras, semicondutores, defesa e transição verde.",
            pages: "p. 34–40",
          },
          {
            text:
              "Plano Nacional de Fertilizantes e expansão da produção nacional.",
            pages: "p. 41–42",
          },
          {
            text:
              "AgroBrasil 2030 e mudanças na política fundiária.",
            pages: "p. 41–43",
          },
        ],
      },

      {
        title: "Governança",

        description:
          "O plano propõe mudanças relevantes na estrutura administrativa e federativa.",

        items: [
          {
            text:
              "Criação de estrutura federal de fiscalização da gestão pública em tempo real.",
            pages: "p. 17–18",
          },
          {
            text:
              "Fusão de municípios considerados fiscalmente inviáveis.",
            pages: "p. 14–16",
          },
          {
            text:
              "Criação de metas de desempenho associadas à gestão pública.",
            pages: "p. 17–18",
          },
        ],
      },
    ],

    specialNote: {
      title: "Há metas que ultrapassam um único mandato",
      text:
        "O plano apresenta, por exemplo, a proposta denominada “A Batalha do Brasil”, com horizonte declarado de desfavelização em 10 anos. Portanto, esse compromisso possui prazo superior ao período presidencial de 2027–2030.",
    },

    references: [
      {
        title: "Plano de Governo — PDF oficial",
        description:
          "Documento apresentado pela candidatura ao Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-missao",
      },
      {
        title: "Propostas organizadas por assunto",
        description:
          "Índice temático produzido pelo Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/renan-santos-propostas-de-governo",
      },
      {
        title: "Portal de Planos de Governo 2026",
        description:
          "Página geral do TSE com os documentos das candidaturas presidenciais.",
        url: tsePortal,
      },
    ],
  },


  // =========================================================
  // RONALDO CAIADO
  // =========================================================

  {
    slug: "ronaldo-caiado",

    documentTitle:
      "Plano de Governo Ronaldo Caiado Presidente 2027–2030",

    overview:
      "O programa articula estabilização fiscal, aumento de produtividade, segurança pública, modernização da saúde e educação, infraestrutura, agricultura de baixo carbono, transição energética e reformas de governança.",

    projection: [
      "Estabilização das contas públicas acompanhada de uma agenda de produtividade e investimentos.",
      "Expansão de sistemas digitais em saúde, educação, segurança e administração pública.",
      "Combinação entre agronegócio, transição energética, infraestrutura e políticas ambientais.",
    ],

    axes: [

      {
        title: "Economia e produtividade",

        description:
          "O plano propõe estabilização fiscal e uma estratégia de crescimento baseada em produtividade e investimentos.",

        items: [
          {
            text:
              "Estabilização fiscal e controle de despesas obrigatórias.",
            pages: "p. 12",
          },
          {
            text:
              "Agenda Nacional de Produtividade e Estratégia Brasil 2040.",
            pages: "p. 14",
          },
          {
            text:
              "Reindustrialização, infraestrutura e logística.",
            pages: "p. 42–46",
          },
        ],
      },

      {
        title: "Saúde",

        description:
          "O programa propõe modernização do SUS, regulação de filas e ampliação de políticas de prevenção.",

        items: [
          {
            text:
              "Fila transparente e sistema de regulação inteligente.",
            pages: "p. 77",
          },
          {
            text:
              "Hospitais inteligentes e ampliação da digitalização do SUS.",
            pages: "p. 89",
          },
          {
            text:
              "Ampliação de ações de saúde mental, atenção primária e prevenção.",
            pages: "p. 78–88",
          },
        ],
      },

      {
        title: "Segurança pública",

        description:
          "O plano propõe coordenação federal, inteligência e mudanças legislativas na área de segurança.",

        items: [
          {
            text:
              "Criação de um Ministério da Segurança Pública.",
            pages: "p. 16",
          },
          {
            text:
              "Sistema Nacional de Inteligência Criminal e asfixia financeira de organizações criminosas.",
            pages: "p. 17",
          },
          {
            text:
              "Proposta de redução da maioridade penal.",
            pages: "p. 20",
          },
        ],
      },

      {
        title: "Educação e tecnologia",

        description:
          "O documento combina expansão educacional, inovação e desenvolvimento tecnológico.",

        items: [
          {
            text:
              "Pacto Nacional de alfabetização na idade certa.",
            pages: "p. 32",
          },
          {
            text:
              "Expansão de escola em tempo integral e atenção à primeira infância.",
            pages: "p. 32–33",
          },
          {
            text:
              "Desenvolvimento e uso de inteligência artificial e conectividade.",
            pages: "p. 25–26",
          },
        ],
      },

      {
        title: "Agro, energia e ambiente",

        description:
          "O programa propõe uma combinação entre expansão produtiva, transição energética e mecanismos ambientais.",

        items: [
          {
            text:
              "Agricultura de baixo carbono e expansão de bioinsumos.",
            pages: "p. 22–23",
          },
          {
            text:
              "Transição energética, biocombustíveis e fontes de energia limpa.",
            pages: "p. 35–37",
          },
          {
            text:
              "Combate a incêndios, desmatamento e grilagem, além de mercado de carbono.",
            pages: "p. 50–51",
          },
        ],
      },

      {
        title: "Governança e instituições",

        description:
          "O plano prevê mudanças na administração, transparência e no sistema político.",

        items: [
          {
            text:
              "Ampliação do Estado digital e de serviços públicos integrados.",
            pages: "p. 6 e 27",
          },
          {
            text:
              "Proposta de fim da reeleição para cargos do Poder Executivo.",
            pages: "p. 8",
          },
          {
            text:
              "Reforma do sistema político e maior rastreabilidade do financiamento político.",
            pages: "p. 10",
          },
        ],
      },
    ],

    references: [
      {
        title: "Plano de Governo — PDF oficial",
        description:
          "Documento apresentado pela candidatura ao Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-psd",
      },
      {
        title: "Propostas organizadas por assunto",
        description:
          "Índice temático produzido pelo Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/ronaldo-caiado-propostas-de-governo",
      },
      {
        title: "Portal de Planos de Governo 2026",
        description:
          "Página geral do TSE com os documentos das candidaturas presidenciais.",
        url: tsePortal,
      },
    ],
  },


  // =========================================================
  // ROMEU ZEMA
  // =========================================================

  {
    slug: "romeu-zema",

    documentTitle:
      "Plano de Governo — Partido Novo",

    overview:
      "O plano propõe ajuste fiscal, privatizações, reformas administrativas e previdenciárias, redução de encargos, maior participação privada na prestação de serviços, mudanças em segurança e educação e uma reorientação da política externa.",

    projection: [
      "Redução da participação direta do Estado na economia por meio de privatizações e reformas administrativas.",
      "Mudanças fiscais, previdenciárias e trabalhistas voltadas ao equilíbrio das contas públicas e à redução de custos.",
      "Maior participação do setor privado em saúde e educação, acompanhada de mudanças em segurança e política externa.",
    ],

    axes: [

      {
        title: "Economia e Estado",

        description:
          "O programa propõe redução de despesas, privatizações e reformas estruturais.",

        items: [
          {
            text:
              "Choque fiscal com objetivo de estabilizar a relação entre dívida pública e PIB.",
            pages: "p. 14 e 18",
          },
          {
            text:
              "Privatização de todas as empresas estatais.",
            pages: "p. 15",
          },
          {
            text:
              "Reformas administrativa e previdenciária.",
            pages: "p. 14–15",
          },
        ],
      },

      {
        title: "Trabalho e tributação",

        description:
          "O plano propõe redução gradual da tributação empresarial e mudanças nas relações trabalhistas.",

        items: [
          {
            text:
              "Redução gradual do Imposto de Renda das empresas.",
            pages: "p. 19",
          },
          {
            text:
              "Redução de encargos incidentes sobre a folha de pagamento.",
            pages: "p. 23–24",
          },
          {
            text:
              "Criação de alternativa contratual mais flexível à CLT.",
            pages: "p. 23–24",
          },
        ],
      },

      {
        title: "Saúde e assistência",

        description:
          "O programa prevê digitalização da saúde e ampliação de parcerias com o setor privado.",

        items: [
          {
            text:
              "Telemedicina, prontuário eletrônico e registro nacional de saúde.",
            pages: "p. 57–58",
          },
          {
            text:
              "Uso da capacidade ociosa privada por meio de parcerias para reduzir filas do SUS.",
            pages: "p. 60",
          },
          {
            text:
              "Unificação e revisão de programas sociais e mecanismos de combate a fraudes.",
            pages: "p. 63–64",
          },
        ],
      },

      {
        title: "Segurança",

        description:
          "O documento apresenta mudanças penais e expansão do sistema de segurança máxima.",

        items: [
          {
            text:
              "Classificação de facções criminosas como organizações terroristas.",
            pages: "p. 5",
          },
          {
            text:
              "Construção de presídios de segurança máxima em regiões remotas.",
            pages: "p. 6",
          },
          {
            text:
              "Proposta de redução da maioridade penal.",
            pages: "p. 6",
          },
        ],
      },

      {
        title: "Educação",

        description:
          "O plano propõe mudanças na gestão educacional e ampliação de opções de modelos de ensino.",

        items: [
          {
            text:
              "Ampliação de vagas em creches com participação de instituições privadas.",
            pages: "p. 50",
          },
          {
            text:
              "Revisão da Base Nacional Comum Curricular.",
            pages: "p. 51",
          },
          {
            text:
              "Expansão de escolas cívico-militares e regulamentação do homeschooling.",
            pages: "p. 53",
          },
        ],
      },

      {
        title: "Política externa e instituições",

        description:
          "O programa propõe alterações na inserção internacional e no sistema político brasileiro.",

        items: [
          {
            text:
              "Saída diplomática do Brasil do BRICS e busca de adesão à OCDE.",
            pages: "p. 37",
          },
          {
            text:
              "Transformação do Mercosul em zona de livre comércio.",
            pages: "p. 38",
          },
          {
            text:
              "Fim da reeleição e adoção do sistema distrital misto nas eleições legislativas.",
            pages: "p. 11 e 75",
          },
        ],
      },
    ],

    references: [
      {
        title: "Plano de Governo — PDF oficial",
        description:
          "Documento apresentado pela candidatura ao Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-novo",
      },
      {
        title: "Propostas organizadas por assunto",
        description:
          "Índice temático produzido pelo Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/zema",
      },
      {
        title: "Portal de Planos de Governo 2026",
        description:
          "Página geral do TSE com os documentos das candidaturas presidenciais.",
        url: tsePortal,
      },
    ],
  },


  // =========================================================
  // AUGUSTO CURY
  // =========================================================

  {
    slug: "augusto-cury",

    documentTitle:
      "Plano de Governo — Brasil dos Nossos Sonhos",

    overview:
      "O programa combina empreendedorismo, equilíbrio fiscal, modernização da saúde, atenção à saúde mental, mudanças educacionais, tecnologia aplicada à segurança, agricultura de precisão, economia verde e reformas administrativas e institucionais.",

    projection: [
      "Expansão do empreendedorismo e do crédito produtivo, acompanhada de metas fiscais e simplificação tributária.",
      "Ampliação de políticas de saúde preventiva, saúde mental, telemedicina e educação socioemocional.",
      "Uso intensivo de tecnologia e inteligência artificial em gestão pública, segurança, agro e proteção ambiental.",
    ],

    axes: [

      {
        title: "Economia e empreendedorismo",

        description:
          "O plano atribui forte centralidade ao empreendedorismo, crédito produtivo e equilíbrio fiscal.",

        items: [
          {
            text:
              "Criação do Banco do Empreendedor e expansão do crédito produtivo.",
            pages: "p. 39, 98 e 107–108",
          },
          {
            text:
              "Meta declarada de desenvolvimento de 10 milhões de novos empreendedores.",
            pages: "p. 39–40 e 95",
          },
          {
            text:
              "Busca de déficit público próximo de zero e redução gradual da dívida.",
            pages: "p. 36",
          },
        ],
      },

      {
        title: "Saúde",

        description:
          "O documento coloca prevenção, saúde mental e tecnologia entre seus principais eixos de saúde.",

        items: [
          {
            text:
              "Criação de programa nacional de saúde mental e apoio emocional.",
            pages: "p. 44–45 e 163",
          },
          {
            text:
              "Expansão em larga escala da telemedicina.",
            pages: "p. 44 e 161–164",
          },
          {
            text:
              "Ampliação de prevenção e detecção precoce de câncer.",
            pages: "p. 166",
          },
        ],
      },

      {
        title: "Segurança",

        description:
          "O plano combina reorganização institucional, tecnologias digitais e ações contra organizações criminosas.",

        items: [
          {
            text:
              "Recriação do Ministério da Segurança Pública.",
            pages: "p. 45",
          },
          {
            text:
              "Tecnologia e inteligência artificial aplicadas à segurança.",
            pages: "p. 46 e 189",
          },
          {
            text:
              "Combate a facções e lavagem de dinheiro com reforço da cooperação internacional.",
            pages: "p. 45–46 e 189–190",
          },
        ],
      },

      {
        title: "Educação",

        description:
          "O programa relaciona educação básica, saúde emocional, empreendedorismo e formação para o trabalho.",

        items: [
          {
            text:
              "Programa de gestão da emoção e saúde emocional nas escolas.",
            pages: "p. 44, 68 e 83",
          },
          {
            text:
              "Criação de rede nacional de escolas de empreendedorismo.",
            pages: "p. 39, 75 e 106–107",
          },
          {
            text:
              "Reformulação do ensino médio com maior ligação ao trabalho e inovação.",
            pages: "p. 43 e 75",
          },
        ],
      },

      {
        title: "Agro e economia verde",

        description:
          "O plano prevê expansão tecnológica no agronegócio e criação de novas cadeias econômicas de baixo carbono.",

        items: [
          {
            text:
              "Agricultura 4.0 com drones, inovação e irrigação de precisão.",
            pages: "p. 47–48 e 115",
          },
          {
            text:
              "Meta declarada de criação de 10 mil agroindústrias.",
            pages: "p. 40 e 126",
          },
          {
            text:
              "Expansão de hidrogênio verde, mercado de carbono e combate a incêndios com tecnologia.",
            pages: "p. 51 e 175–182",
          },
        ],
      },

      {
        title: "Estado e instituições",

        description:
          "O programa inclui reformas administrativas, digitalização governamental e mudanças institucionais.",

        items: [
          {
            text:
              "Governo totalmente digital e ampliação da desburocratização.",
            pages: "p. 38–40",
          },
          {
            text:
              "Avaliação permanente de políticas públicas e metas ministeriais.",
            pages: "p. 38–39",
          },
          {
            text:
              "Proposta de implantação de regime semipresidencialista.",
            pages: "p. 60–63",
          },
        ],
      },
    ],

    references: [
      {
        title: "Plano de Governo — PDF oficial",
        description:
          "Documento apresentado pela candidatura ao Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-avante",
      },
      {
        title: "Propostas organizadas por assunto",
        description:
          "Índice temático produzido pelo Tribunal Superior Eleitoral.",
        url:
          "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/escritor-augusto-cury-propostas-de-governo",
      },
      {
        title: "Portal de Planos de Governo 2026",
        description:
          "Página geral do TSE com os documentos das candidaturas presidenciais.",
        url: tsePortal,
      },
    ],
  },
];


export function getGovernmentPlan(slug: string) {
  return governmentPlans.find(
    (plan) => plan.slug === slug
  );
}
