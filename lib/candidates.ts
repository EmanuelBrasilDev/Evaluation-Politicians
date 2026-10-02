export type Candidate = {
  slug: string;
  name: string;
  ballotName: string;
  fullName: string;

  party: string;
  partyName: string;
  number: string;

  vice: string;
  viceParty: string;

  status: string;
  coalition: string;

  birthDate: string;
  birthPlace: string;
  occupation: string;
  education: string;

  assetsTotal: string;
  assetSummary: string[];

  image: string;
  imagePosition: string;

  lastUpdated: string;
  tseUrl: string;
};


const tseUrl =
  "https://divulgacandcontas.tse.jus.br/divulga/#/";


export const candidates: Candidate[] = [

  // ==========================================================
  // LULA
  // ==========================================================

  {
    slug: "lula",

    name: "Lula",
    ballotName: "Lula",
    fullName: "Luiz Inácio Lula da Silva",

    party: "PT",
    partyName: "Partido dos Trabalhadores",
    number: "13",

    vice: "Geraldo Alckmin",
    viceParty: "PSB",

    status: "Deferido",

    coalition:
      "Brasil Pronto Pra Mais",

    birthDate: "6 de outubro de 1945",
    birthPlace: "Garanhuns, Pernambuco",

    occupation: "Torneiro mecânico",
    education: "Ensino fundamental completo",

    assetsTotal: "R$ 4.775.650,64",

    assetSummary: [
      "Previdência privada e aplicações financeiras",
      "Imóveis e terrenos",
      "Participação societária",
      "Veículo automotor",
    ],

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/lula.jpg",

    imagePosition: "center 30%",

    lastUpdated: "02/10/2026",

    tseUrl,
  },


  // ==========================================================
  // FLÁVIO BOLSONARO
  // ==========================================================

  {
    slug: "flavio-bolsonaro",

    name: "Flávio Bolsonaro",
    ballotName: "Flavio Bolsonaro",
    fullName: "Flavio Nantes Bolsonaro",

    party: "PL",
    partyName: "Partido Liberal",
    number: "22",

    vice: "Alfredo Gaspar",
    viceParty: "PL",

    status: "Deferido",

    coalition:
      "Partido isolado — PL",

    birthDate: "30 de abril de 1981",
    birthPlace: "Resende, Rio de Janeiro",

    occupation: "Senador",
    education: "Superior completo",

    assetsTotal: "R$ 8.186.555,83",

    assetSummary: [
      "Imóvel residencial",
      "Fundos e aplicações financeiras",
      "Depósitos bancários e poupança",
      "Participações societárias",
      "Veículo automotor",
    ],

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/flavio-bolsonaro-senador-congresso-scaled.jpg",

    imagePosition: "center 25%",

    lastUpdated: "02/10/2026",

    tseUrl,
  },


  // ==========================================================
  // RENAN SANTOS
  // ==========================================================

  {
    slug: "renan-santos",

    name: "Renan Santos",
    ballotName: "Renan Santos",
    fullName: "Renan Antonio Ferreira dos Santos",

    party: "MISSÃO",
    partyName: "Partido Missão",
    number: "14",

    vice: "Aroldo Medina",
    viceParty: "MISSÃO",

    status: "Deferido",

    coalition:
      "Partido isolado — Missão",

    birthDate: "14 de fevereiro de 1984",
    birthPlace: "São Paulo, São Paulo",

    occupation: "Empresário",
    education: "Superior incompleto",

    assetsTotal: "R$ 795.089,00",

    assetSummary: [
      "Créditos e poupança vinculados",
      "Bem relacionado à atividade autônoma",
      "Participações societárias",
      "Quotas ou quinhões de capital",
    ],

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/17871006126a84fdc474ccc-1787100612-3x2-md.jpg",

    imagePosition: "32% 28%",

    lastUpdated: "02/10/2026",

    tseUrl,
  },


  // ==========================================================
  // RONALDO CAIADO
  // ==========================================================

  {
    slug: "ronaldo-caiado",

    name: "Ronaldo Caiado",
    ballotName: "Ronaldo Caiado",
    fullName: "Ronaldo Ramos Caiado",

    party: "PSD",
    partyName: "Partido Social Democrático",
    number: "55",

    vice: "Gilberto Kassab",
    viceParty: "PSD",

    status: "Deferido",

    coalition:
      "Partido isolado — PSD",

    birthDate: "25 de setembro de 1949",
    birthPlace: "Anápolis, Goiás",

    occupation: "Médico",
    education: "Superior completo",

    assetsTotal: "R$ 52.557.930,98",

    assetSummary: [
      "Imóveis e propriedades",
      "Outros bens e direitos",
      "Aplicações e investimentos",
      "Participações societárias",
      "Quotas de capital",
    ],

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/images.webp",

    imagePosition: "center 25%",

    lastUpdated: "02/10/2026",

    tseUrl,
  },


  // ==========================================================
  // ROMEU ZEMA
  // ==========================================================

  {
    slug: "romeu-zema",

    name: "Romeu Zema",
    ballotName: "Zema",
    fullName: "Romeu Zema Neto",

    party: "NOVO",
    partyName: "Partido Novo",
    number: "30",

    vice: "Eduardo Girão",
    viceParty: "NOVO",

    status: "Deferido",

    coalition:
      "Partido isolado — Novo",

    birthDate: "28 de outubro de 1964",
    birthPlace: "Araxá, Minas Gerais",

    occupation: "Empresário",
    education: "Superior completo",

    assetsTotal: "R$ 178.707.610,09",

    assetSummary: [
      "Participação em holding familiar",
      "Fundos de investimento",
      "Participação em instituição financeira",
      "Participação em seguradora",
      "Aplicações financeiras e imóveis",
    ],

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/images-1.webp",

    imagePosition: "center 25%",

    lastUpdated: "02/10/2026",

    tseUrl,
  },


  // ==========================================================
  // AUGUSTO CURY
  // ==========================================================

  {
    slug: "augusto-cury",

    name: "Augusto Cury",
    ballotName: "Escritor Augusto Cury",
    fullName: "Augusto Jorge Cury",

    party: "AVANTE",
    partyName: "Avante",
    number: "70",

    vice: "Júlio Delgado",
    viceParty: "AVANTE",

    status: "Deferido",

    coalition:
      "Brasil dos Nossos Sonhos — Avante / Agir",

    birthDate: "2 de outubro de 1958",
    birthPlace: "Colina, São Paulo",

    occupation: "Escritor e crítico",
    education: "Superior completo",

    assetsTotal: "R$ 242.593.012,43",

    assetSummary: [
      "Créditos e direitos",
      "Participações empresariais",
      "Investimentos financeiros",
      "Imóveis e propriedades",
    ],

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/augusto-cury-escritor-28339139296-cropped.jpg",

    imagePosition: "center 18%",

    lastUpdated: "02/10/2026",

    tseUrl,
  },
];


export function getCandidate(slug: string) {
  return candidates.find(
    (candidate) => candidate.slug === slug
  );
}
