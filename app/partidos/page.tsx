import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  Flag,
  History,
  Info,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";


const tsePartiesUrl =
  "https://www.tse.jus.br/partidos/partidos-politicos/partidos-registrados-no-tse";

const federationsUrl =
  "https://www.tse.jus.br/partidos/federacoes-registradas-no-tse/federacoes-partidarias-registradas-no-tse/";


const parties = [
  {
    slug: "avante",
    acronym: "AVANTE",
    name: "Avante",
    number: "70",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/avante.png",

    founded: "1989",
    leader: "Luis Henrique de Oliveira Resende",

    federation: null,

    origin:
      "A trajetória do Avante começa em 1989 com a criação do Partido Trabalhista do Brasil (PTdoB). Entre os nomes relacionados à fundação estão Caetano Matanó Junior e Antonio Rodriguez Fernandez. Em 2017, o TSE autorizou a adoção do nome Avante.",

    principles:
      "Em seus materiais institucionais, o partido apresenta como pilares compromisso, prosperidade, humanidade, coletividade, diálogo, transparência e liberdade.",

    milestone:
      "PTdoB → Avante",

    partySource:
      "https://avante70.org.br/sobre-o-partido-avante/",
  },

  {
    slug: "mdb",
    acronym: "MDB",
    name: "Movimento Democrático Brasileiro",
    number: "15",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/mdb.png",

    founded: "1966",
    leader: "Baleia Rossi",

    federation: null,

    origin:
      "O MDB surgiu durante o regime militar como uma das duas legendas permitidas pelo sistema bipartidário e reuniu grande parte da oposição institucional ao governo. Com a reorganização partidária, tornou-se PMDB em 1980 e, décadas depois, retomou oficialmente o nome MDB.",

    principles:
      "O partido relaciona sua trajetória à defesa da democracia, participação política, ética pública, desenvolvimento econômico e social e diálogo entre diferentes correntes políticas.",

    milestone:
      "MDB → PMDB → MDB",

    partySource:
      "https://www.mdb.org.br/quem-somos/",
  },

  {
    slug: "missao",
    acronym: "MISSÃO",
    name: "Partido Missão",
    number: "14",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/missao.png",

    founded: "2025",
    leader: "Renan Santos",

    federation: null,

    origin:
      "O Partido Missão foi registrado inicialmente em cartório civil em 2023 e recebeu seu registro partidário definitivo do Tribunal Superior Eleitoral em novembro de 2025. Renan Santos é apresentado pela própria organização como fundador do partido.",

    principles:
      "Entre as propostas e valores apresentados pelo partido estão responsabilidade fiscal, combate à corrupção, endurecimento das leis penais, educação, saúde, industrialização do Nordeste, combate ao tráfico de drogas e proteção ambiental.",

    milestone:
      "Registro no TSE em 2025",

    partySource:
      "https://missao.org.br/",
  },

  {
    slug: "novo",
    acronym: "NOVO",
    name: "Partido Novo",
    number: "30",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/novo.png",

    founded: "2011",
    leader: "Eduardo Ribeiro",

    federation: null,

    origin:
      "O NOVO foi fundado em 2011 por um grupo de cidadãos que buscava criar uma nova organização partidária. João Amoêdo esteve entre seus fundadores. Após a coleta das assinaturas exigidas pela legislação, o registro definitivo foi aprovado pelo TSE em 2015.",

    principles:
      "O partido declara como princípios a liberdade individual com responsabilidade, igualdade perante a lei, livre mercado, direito à propriedade, visão de longo prazo, combate a privilégios e defesa de um Estado mais eficiente.",

    milestone:
      "Fundação em 2011 · TSE em 2015",

    partySource:
      "https://novo.org.br/conheca-o-novo/",
  },

  {
    slug: "pdt",
    acronym: "PDT",
    name: "Partido Democrático Trabalhista",
    number: "12",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/pdt.png",

    founded: "1980",
    leader: "Carlos Lupi",

    federation: null,

    origin:
      "O PDT nasceu da reorganização do trabalhismo brasileiro no período de abertura política. Leonel Brizola teve papel central no processo. A Carta de Lisboa, elaborada em 1979 por trabalhistas reunidos no exílio e no Brasil, tornou-se uma das referências de sua formação.",

    principles:
      "Sua tradição programática enfatiza trabalhismo, soberania nacional, direitos sociais e trabalhistas, liberdade sindical, democracia e uma concepção de desenvolvimento com participação ativa do Estado.",

    milestone:
      "Carta de Lisboa · Trabalhismo",

    partySource:
      "https://pdt.org.br/index.php/carta-de-lisboa-40-anos-de-resistencia-do-trabalhismo/",
  },

  {
    slug: "pl",
    acronym: "PL",
    name: "Partido Liberal",
    number: "22",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/logo-do-partido-liberal-brasil.png",

    founded: "2006",
    leader: "Valdemar Costa Neto",

    federation: null,

    origin:
      "A atual organização partidária surgiu juridicamente em 2006 com a fusão do então Partido Liberal e do PRONA, formando o Partido da República (PR). Em 2019, a legenda passou novamente a utilizar o nome Partido Liberal. A história partidária também remonta ao PL criado em 1985.",

    principles:
      "O programa partidário aprovado em 2022 dá destaque a temas como liberdade, democracia, propriedade privada, liberdade econômica, liberdade de expressão, família e segurança jurídica.",

    milestone:
      "PL + PRONA → PR → PL",

    partySource:
      "https://partidoliberal.org.br/historia-do-pl/",
  },

  {
    slug: "pode",
    acronym: "PODE",
    name: "Podemos",
    number: "20",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/podemoslogo.png",

    founded: "1997",
    leader: "Renata Abreu",

    federation: null,

    origin:
      "A atual legenda foi registrada na Justiça Eleitoral como Partido Trabalhista Nacional (PTN). Em 2017, o TSE aprovou a mudança de nome para Podemos. O próprio partido também relaciona sua história ao antigo PTN existente antes do sistema partidário implantado durante o regime militar.",

    principles:
      "O partido apresenta como valores transparência, responsabilidade, participação e humanismo, além de defender maior participação popular e aproximação entre instituições políticas e cidadãos.",

    milestone:
      "PTN → Podemos",

    partySource:
      "https://podemos.org.br/historia",
  },

  {
    slug: "pp",
    acronym: "PP",
    name: "Progressistas",
    number: "11",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/progressistas-logo.png",

    founded: "1995",
    leader: "Ciro Nogueira",

    federation: "Federação União Progressista",

    origin:
      "A formação do atual Progressistas passou por diferentes fusões partidárias. PDS e PDC formaram o PPR, enquanto outras organizações deram origem a outro PP. Em 1995, PPR e PP se fundiram no PPB. O nome passou a PP em 2003 e, posteriormente, Progressistas.",

    principles:
      "Seus documentos e materiais institucionais relacionam a legenda à democracia representativa, desenvolvimento econômico, responsabilidade na gestão pública e participação da iniciativa privada na economia.",

    milestone:
      "PPR + PP → PPB → PP",

    partySource:
      "https://progressistas.org.br/partido/",
  },

  {
    slug: "psb",
    acronym: "PSB",
    name: "Partido Socialista Brasileiro",
    number: "40",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/partido-socialista-brasileiro-logo.png",

    founded: "1947",
    leader: "João Campos",

    federation: null,

    origin:
      "O PSB tem origem na Esquerda Democrática, organização criada em 1945 por nomes como João Mangabeira, Hermes Lima e Antônio Candido. Em 1947, a Esquerda Democrática deu origem ao Partido Socialista Brasileiro. A legenda foi extinta pelo regime militar e reorganizada durante a redemocratização.",

    principles:
      "O partido declara defender socialismo democrático, liberdade, redução das desigualdades, direitos sociais, desenvolvimento, participação democrática e sustentabilidade.",

    milestone:
      "Esquerda Democrática → PSB",

    partySource:
      "https://psb40.org.br/quem-somos/nossa-historia-2/",
  },

  {
    slug: "psd",
    acronym: "PSD",
    name: "Partido Social Democrático",
    number: "55",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/psd-brasil.png",

    founded: "2011",
    leader: "Gilberto Kassab",

    federation: null,

    origin:
      "O atual PSD foi organizado em 2011 a partir de articulações lideradas por Gilberto Kassab e Guilherme Afif Domingos, acompanhados por políticos de diferentes estados. O registro definitivo foi aprovado pelo TSE em setembro daquele ano.",

    principles:
      "Em sua documentação histórica, o partido se apresenta como uma organização de centro e relaciona sua atuação ao desenvolvimento econômico e social, democracia, ética, republicanismo e independência política.",

    milestone:
      "Criado e registrado em 2011",

    partySource:
      "https://psd.org.br/linha-do-tempo/",
  },

  {
    slug: "psdb",
    acronym: "PSDB",
    name: "Partido da Social Democracia Brasileira",
    number: "45",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/logo-of-the-brazilian-social-democracy-party-2023.png",

    founded: "1988",
    leader: "Aécio Neves",

    federation: "Federação PSDB Cidadania",

    origin:
      "O PSDB foi fundado em junho de 1988 durante a Assembleia Nacional Constituinte, principalmente por uma dissidência do PMDB. Entre os nomes ligados à fundação estão Franco Montoro, Mário Covas, Fernando Henrique Cardoso, José Serra e José Richa.",

    principles:
      "Seu programa relaciona social-democracia à defesa da democracia, direitos individuais e coletivos, igualdade de oportunidades, desenvolvimento econômico e social, modernização do Estado e combinação entre atuação governamental e mercado.",

    milestone:
      "Dissidência do PMDB · 1988",

    partySource:
      "https://www.psdb.org.br/conheca/programa/",
  },

  {
    slug: "psol",
    acronym: "PSOL",
    name: "Partido Socialismo e Liberdade",
    number: "50",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/logomarca-psol.png",

    founded: "2004",
    leader: "Paula Coradi",

    federation: "Federação PSOL REDE",

    origin:
      "O PSOL começou a ser organizado em 2004 e obteve registro definitivo no TSE em setembro de 2005. Sua formação reuniu parlamentares e militantes provenientes principalmente de setores da esquerda, incluindo Heloísa Helena, Luciana Genro, Babá e outros nomes.",

    principles:
      "Seu programa declara a defesa do socialismo, democracia, liberdade, justiça econômica, social e ambiental, soberania popular, direitos iguais, combate às formas de opressão e preservação do meio ambiente.",

    milestone:
      "Organização em 2004 · TSE em 2005",

    partySource:
      "https://psol50.org.br/partido/programa/",
  },

  {
    slug: "pt",
    acronym: "PT",
    name: "Partido dos Trabalhadores",
    number: "13",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/pt-flag.png",

    founded: "1980",
    leader: "Edinho Silva",

    federation: "Federação Brasil da Esperança",

    origin:
      "O PT foi fundado em fevereiro de 1980 em um processo que reuniu trabalhadores urbanos e rurais, sindicalistas, militantes de esquerda, intelectuais, movimentos sociais e outros grupos. Luiz Inácio Lula da Silva esteve entre as principais lideranças de sua formação.",

    principles:
      "O estatuto do partido declara como objetivos democracia, pluralidade, solidariedade e transformações políticas, sociais e econômicas voltadas à redução da desigualdade, da exploração e da pobreza, tendo como objetivo declarado o socialismo democrático.",

    milestone:
      "Fundado em 10 de fevereiro de 1980",

    partySource:
      "https://pt.org.br/nossa-historia/",
  },

  {
    slug: "republicanos",
    acronym: "REPUBLICANOS",
    name: "Republicanos",
    number: "10",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/logo-of-republicanos.png",

    founded: "2005",
    leader: "Marcos Pereira",

    federation: null,

    origin:
      "A legenda obteve registro no TSE em 2005 como Partido Municipalista Renovador (PMR). Ainda naquele período passou a se chamar Partido Republicano Brasileiro (PRB), após sugestão do então vice-presidente José Alencar. Em 2019, adotou o nome Republicanos.",

    principles:
      "O manifesto do partido se define como conservador e declara defesa de valores cristãos, família, soberania nacional, propriedade privada, livre iniciativa, liberdade econômica e desenvolvimento tecnológico.",

    milestone:
      "PMR → PRB → Republicanos",

    partySource:
      "https://republicanos10.org.br/manifesto-e-programa/",
  },

  {
    slug: "uniao",
    acronym: "UNIÃO",
    name: "União Brasil",
    number: "44",

    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/partidos-siglas/uniao-brasil-logo.png",

    founded: "2022",
    leader: "Antonio Rueda",

    federation: "Federação União Progressista",

    origin:
      "O União Brasil nasceu da fusão entre Democratas (DEM) e Partido Social Liberal (PSL). A união das duas legendas foi homologada pelo Tribunal Superior Eleitoral em 8 de fevereiro de 2022.",

    principles:
      "Seu manifesto apresenta quatro princípios centrais: democracia, Estado como garantidor de direitos sociais básicos, liberdade individual e família, além de relacionar sua atuação a desenvolvimento, prosperidade e justiça.",

    milestone:
      "DEM + PSL → União Brasil",

    partySource:
      "https://uniaobrasil.org.br/o-uniao-brasil/",
  },
];


export const metadata = {
  title: "Partidos Políticos | Panorama Eleitoral",
  description:
    "Conheça a história, origem, princípios declarados e lideranças nacionais de partidos políticos brasileiros selecionados.",
};


export default function PartiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">

      {/* ====================================================
          HEADER
      ==================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Landmark size={18} />
            </div>

            <div>

              <p className="text-sm font-bold tracking-tight text-slate-950">
                Panorama Eleitoral
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Informação pública
              </p>

            </div>

          </Link>


          {/* NAVBAR - SOMENTE HOME E CANDIDATOS */}

          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Home
            </Link>

            <Link
              href="/candidatos"
              className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Candidatos
            </Link>

            <Link
              href="/partidos"
              className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white"
            >
              Partidos
            </Link>
          </nav>

        </div>

      </header>


      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">

        <div className="absolute left-1/2 top-[-280px] h-[620px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">

              <Flag size={14} />

              Sistema partidário brasileiro

            </div>


            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">

              Conheça a história dos

              <span className="block text-slate-400">
                partidos políticos.
              </span>

            </h1>


            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">

              Um panorama sobre a origem, formação, principais transformações,
              princípios declarados e atuais lideranças nacionais de 15
              partidos selecionados para esta fase do projeto.

            </p>

          </div>


          {/* INFO */}

          <div className="mt-12 grid gap-3 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <Building2
                size={19}
                className="text-blue-600"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Seleção
              </p>

              <p className="mt-1 text-xl font-black">
                15 partidos
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <ShieldCheck
                size={19}
                className="text-blue-600"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Registro oficial
              </p>

              <p className="mt-1 text-xl font-black">
                TSE
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <CalendarDays
                size={19}
                className="text-blue-600"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Lideranças
              </p>

              <p className="mt-1 text-xl font-black">
                Outubro de 2026
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          NOTA DE METODOLOGIA
      ==================================================== */}

      <section className="border-b border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">

          <div className="grid gap-5 lg:grid-cols-2">

            <div className="flex gap-4">

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
                <Info size={18} />
              </div>

              <div>

                <p className="font-bold text-slate-950">
                  Esta lista não é um ranking
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">

                  Os 15 partidos foram selecionados para esta etapa do projeto,
                  incluindo obrigatoriamente as legendas dos presidenciáveis que
                  já estão em destaque na plataforma. A ordem não representa
                  preferência ou avaliação.

                </p>

              </div>

            </div>


            <div className="flex gap-4">

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <BookOpen size={18} />
              </div>

              <div>

                <p className="font-bold text-slate-950">
                  Princípios declarados
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">

                  As descrições sobre valores e princípios procuram resumir
                  documentos, programas, estatutos e materiais institucionais
                  publicados pelos próprios partidos.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          EXPLICAÇÃO PARTIDO X FEDERAÇÃO
      ==================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

          <div className="grid gap-5 lg:grid-cols-2">

            <div className="rounded-3xl bg-slate-950 p-7 text-white">

              <Landmark
                size={22}
                className="text-blue-400"
              />

              <h2 className="mt-5 text-xl font-black">
                O que é um partido político?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">

                É uma organização formada por cidadãos que compartilham
                propostas e princípios políticos e que pode lançar candidaturas,
                participar de eleições e exercer representação política conforme
                a legislação brasileira.

              </p>

            </div>


            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <Users
                size={22}
                className="text-blue-600"
              />

              <h2 className="mt-5 text-xl font-black">
                Partido e federação são diferentes
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">

                Uma federação reúne dois ou mais partidos para atuação conjunta,
                mas as legendas integrantes continuam existindo individualmente.
                Nos cards abaixo indicamos quando um dos partidos selecionados
                atualmente integra uma federação registrada.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          PARTIDOS
      ==================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Partidos selecionados
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                História e princípios
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">

                Abra cada card para conhecer um resumo da trajetória da legenda
                e acessar suas fontes.

              </p>

            </div>


            <a
              href={tsePartiesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
            >

              Ver todos os partidos no TSE

              <ExternalLink size={15} />

            </a>

          </div>


          {/* GRID */}

          <div className="mt-10 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">

            {parties.map((party) => (

              <details
                key={party.slug}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-lg open:shadow-xl open:shadow-slate-200/50"
              >

                {/* CARD VISÍVEL MESMO FECHADO */}

                <summary className="flex h-[485px] cursor-pointer list-none flex-col [&::-webkit-details-marker]:hidden">

                  {/* LOGO */}

                  <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-slate-100 bg-white">

                    <div className="absolute left-5 top-5 z-10 flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-base font-black text-white shadow-lg">
                      {party.number}
                    </div>

                    <div className="relative h-24 w-[65%] transition duration-300 group-hover:scale-[1.03]">

                      <Image
                        src={party.image}
                        alt={`Logotipo ${party.acronym}`}
                        fill
                        sizes="400px"
                        className="object-contain"
                      />

                    </div>

                  </div>


                  {/* INFORMAÇÕES DO PARTIDO */}

                  <div className="flex flex-1 flex-col p-6">

                    <div className="flex min-h-[66px] items-start justify-between gap-5">

                      <div className="min-w-0">

                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                          {party.acronym}
                        </p>

                        <h3 className="mt-2 text-xl font-black leading-tight tracking-tight text-slate-950">
                          {party.name}
                        </h3>

                      </div>


                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition duration-300 group-open:rotate-180 group-open:bg-slate-950 group-open:text-white">

                        <ChevronDown size={16} />

                      </div>

                    </div>


                    <div className="mt-5 grid grid-cols-2 gap-3">

                      <div className="min-h-[82px] rounded-2xl bg-slate-50 p-4">

                        <div className="flex items-center gap-2 text-slate-400">

                          <CalendarDays size={13} />

                          <p className="text-[10px] font-bold uppercase tracking-wider">
                            Origem
                          </p>

                        </div>

                        <p className="mt-2 text-sm font-black text-slate-800">
                          {party.founded}
                        </p>

                      </div>


                      <div className="min-h-[82px] rounded-2xl bg-slate-50 p-4">

                        <div className="flex items-center gap-2 text-slate-400">

                          <Users size={13} />

                          <p className="text-[10px] font-bold uppercase tracking-wider">
                            Presidente
                          </p>

                        </div>

                        <p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-slate-800">
                          {party.leader}
                        </p>

                      </div>

                    </div>


                    {party.federation && (

                      <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2.5">

                        <Users
                          size={13}
                          className="shrink-0 text-blue-600"
                        />

                        <p className="text-xs font-semibold text-blue-800">
                          {party.federation}
                        </p>

                      </div>

                    )}


                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                      <div className="flex items-center gap-2">

                        <History
                          size={14}
                          className="text-slate-400"
                        />

                        <p className="text-xs font-semibold text-slate-500">
                          {party.milestone}
                        </p>

                      </div>


                      <span className="ml-3 shrink-0 text-[11px] font-bold uppercase tracking-[0.1em] text-blue-600">
                        Ver história
                      </span>

                    </div>

                  </div>

                </summary>


                {/* CONTEÚDO EXPANDIDO */}

                <div className="border-t border-slate-100 bg-slate-50/60 px-6 pb-6 pt-6">

                  <div>

                    <div className="flex items-center gap-2">

                      <History
                        size={16}
                        className="text-blue-600"
                      />

                      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-700">
                        Origem e trajetória
                      </p>

                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {party.origin}
                    </p>

                  </div>


                  <div className="my-6 h-px bg-slate-200" />


                  <div>

                    <div className="flex items-center gap-2">

                      <Scale
                        size={16}
                        className="text-blue-600"
                      />

                      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-700">
                        Princípios declarados
                      </p>

                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {party.principles}
                    </p>

                  </div>


                  <div className="mt-6 grid grid-cols-2 gap-2">

                    <a
                      href={tsePartiesUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
                    >

                      Fonte TSE

                      <ExternalLink size={13} />

                    </a>


                    <a
                      href={party.partySource}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                    >

                      Fonte partidária

                      <ExternalLink size={13} />

                    </a>

                  </div>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* ====================================================
          FEDERAÇÕES
      ==================================================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Contexto atual
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Federações partidárias
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">

                Alguns dos partidos presentes nesta página atuam atualmente
                dentro de federações. Elas funcionam como uma associação entre
                legendas por período determinado e possuem regras próprias de
                atuação eleitoral e parlamentar.

              </p>


              <a
                href={federationsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
              >

                Consultar federações no TSE

                <ArrowRight size={15} />

              </a>

            </div>


            <div className="grid gap-3">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Federação Brasil da Esperança
                </p>

                <p className="mt-2 font-black">
                  PT · PCdoB · PV
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Federação PSDB Cidadania
                </p>

                <p className="mt-2 font-black">
                  PSDB · Cidadania
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Federação PSOL REDE
                </p>

                <p className="mt-2 font-black">
                  PSOL · REDE
                </p>

              </div>


              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Federação União Progressista
                </p>

                <p className="mt-2 font-black">
                  União Brasil · Progressistas
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          TRANSPARÊNCIA
      ==================================================== */}

      <section className="bg-slate-950 text-white">

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 text-blue-400">

                <ShieldCheck size={18} />

                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Transparência
                </p>

              </div>


              <h2 className="mt-4 text-2xl font-black tracking-tight">
                Informações partidárias mudam com o tempo.
              </h2>


              <p className="mt-3 text-sm leading-7 text-slate-300">

                Presidentes nacionais, estatutos, programas, federações e nomes
                partidários podem sofrer alterações. Por isso, a Justiça
                Eleitoral permanece como referência para conferir o registro
                oficial mais recente.

              </p>

            </div>


            <a
              href={tsePartiesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >

              Consultar TSE

              <ExternalLink size={15} />

            </a>

          </div>

        </div>

      </section>


      {/* ====================================================
          FOOTER
      ==================================================== */}

      <footer className="border-t border-slate-800 bg-slate-950 text-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="flex size-8 items-center justify-center rounded-lg bg-white text-slate-950">
              <Landmark size={15} />
            </div>

            <div>

              <p className="text-sm font-bold">
                Panorama Eleitoral
              </p>

              <p className="text-xs text-slate-500">
                Informação para consulta.
              </p>

            </div>

          </Link>


          <p className="max-w-lg text-xs leading-5 text-slate-500 sm:text-right">

            As descrições de princípios representam sínteses de materiais
            publicados pelas próprias organizações partidárias e não constituem
            avaliação ou recomendação política.

          </p>

        </div>

      </footer>

    </main>
  );
}
