import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleDot,
  ExternalLink,
  History,
  Landmark,
  Scale,
  Vote,
} from "lucide-react";

const electionTimeline = [
  {
    year: "2002",
    elected: "Luiz Inácio Lula da Silva",
    electedParty: "PT",
    finalist: "José Serra",
    finalistParty: "PSDB",
    percentage: "61,27%",
    round: "2º turno",
    description:
      "A eleição presidencial de 2002 foi decidida no segundo turno. Lula foi eleito presidente da República.",
  },
  {
    year: "2006",
    elected: "Luiz Inácio Lula da Silva",
    electedParty: "PT",
    finalist: "Geraldo Alckmin",
    finalistParty: "PSDB",
    percentage: "60,82%",
    round: "2º turno",
    description:
      "Lula disputou a reeleição e venceu Geraldo Alckmin no segundo turno da eleição presidencial.",
  },
  {
    year: "2010",
    elected: "Dilma Rousseff",
    electedParty: "PT",
    finalist: "José Serra",
    finalistParty: "PSDB",
    percentage: "56,05%",
    round: "2º turno",
    description:
      "Dilma Rousseff foi eleita presidente após disputar o segundo turno com José Serra.",
  },
  {
    year: "2014",
    elected: "Dilma Rousseff",
    electedParty: "PT",
    finalist: "Aécio Neves",
    finalistParty: "PSDB",
    percentage: "51,64%",
    round: "2º turno",
    description:
      "Dilma Rousseff foi reeleita em uma disputa de segundo turno contra Aécio Neves.",
  },
  {
    year: "2018",
    elected: "Jair Bolsonaro",
    electedParty: "PSL",
    finalist: "Fernando Haddad",
    finalistParty: "PT",
    percentage: "55,13%",
    round: "2º turno",
    description:
      "Jair Bolsonaro foi eleito presidente após disputar o segundo turno com Fernando Haddad.",
  },
  {
    year: "2022",
    elected: "Luiz Inácio Lula da Silva",
    electedParty: "PT",
    finalist: "Jair Bolsonaro",
    finalistParty: "PL",
    percentage: "50,90%",
    round: "2º turno",
    description:
      "Lula foi eleito presidente após disputar o segundo turno com Jair Bolsonaro.",
  },
];

const officialSources = [
  {
    title: "Resultados das eleições",
    description:
      "Consulta oficial do Tribunal Superior Eleitoral para eleições brasileiras.",
    url: "https://www.tse.jus.br/eleicoes/resultados-eleicoes",
  },
  {
    title: "Sistema eleitoral majoritário",
    description:
      "Explicação do TSE sobre maioria absoluta, primeiro turno e segundo turno.",
    url: "https://www.tse.jus.br/comunicacao/noticias/2026/Junho/sabe-o-que-e-o-sistema-eleitoral-majoritario-o-glossario-explica-1",
  },
  {
    title: "Eleições 2026",
    description:
      "Informações oficiais e calendário do atual ciclo eleitoral.",
    url: "https://www.tse.jus.br/eleicoes/cde-2026",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
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
          </a>

          <nav className="flex items-center gap-2 text-sm font-medium">
            <a
              href="/"
              className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white"
            >
              Home
            </a>

            <a
              href="/candidatos"
              className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Candidatos
            </a>

            <a
              href="/partidos"
              className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Partidos
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <CircleDot size={14} className="text-blue-600" />
              História eleitoral brasileira · 2002–2022
            </div>

            <h1 className="text-balance text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
              Entenda como o Brasil
              <span className="block text-slate-400">
                escolhe seu presidente.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-8 text-slate-600 sm:text-lg">
              Uma visão clara sobre primeiro turno, segundo turno, votos
              válidos e a história das eleições presidenciais brasileiras
              entre 2002 e 2022.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#como-funciona"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Entender o sistema eleitoral
                <ArrowDown size={16} />
              </a>

              <a
                href="#timeline"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
              >
                Ver linha histórica
                <History size={16} />
              </a>
            </div>

          </div>

          {/* 2026 NOTICE */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-left">
            <div className="flex gap-4">
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Vote size={17} />
              </div>

              <div>
                <p className="font-bold text-slate-950">
                  Eleições 2026
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Esta página apresenta eleições presidenciais já concluídas
                  até 2022. O primeiro turno das Eleições Gerais de 2026 está
                  marcado para 4 de outubro de 2026. Resultados serão
                  incorporados à linha histórica somente após a totalização
                  oficial.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="scroll-mt-24 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Sistema eleitoral
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Como funciona uma eleição presidencial?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A eleição para presidente da República utiliza o sistema
              majoritário. Para vencer no primeiro turno, uma candidatura
              precisa obter mais da metade dos votos válidos.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* PRIMEIRO TURNO */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <span className="text-sm font-black">01</span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight">
                Primeiro turno
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                As candidaturas registradas disputam a preferência do
                eleitorado. O voto para presidente também define o
                vice-presidente integrante da mesma chapa.
              </p>
            </article>

            {/* MAIORIA */}
            <article className="rounded-3xl border border-blue-100 bg-blue-50/50 p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Scale size={19} />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight">
                Maioria absoluta
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Se uma candidatura receber mais da metade dos votos válidos
                no primeiro turno, ela é eleita e não há necessidade de uma
                segunda votação.
              </p>
            </article>

            {/* SEGUNDO TURNO */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <span className="text-sm font-black">02</span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight">
                Segundo turno
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Se ninguém alcançar a maioria absoluta, as duas candidaturas
                mais votadas avançam para uma nova votação. Vence quem obtiver
                a maioria dos votos válidos.
              </p>
            </article>

          </div>

          {/* VOTOS VÁLIDOS */}
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">

            <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-400" />
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-300">
                  Um conceito importante
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-black tracking-tight">
                O que são votos válidos?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Para definir se uma candidatura alcançou a maioria necessária,
                são considerados os votos dados às candidaturas. Votos em
                branco e votos nulos não entram no cálculo dos votos válidos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
              <BookOpen size={22} className="text-blue-600" />

              <p className="mt-5 text-sm font-bold text-slate-950">
                Em resumo
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Presidente, governador e, em determinados municípios,
                prefeito podem ter segundo turno quando nenhuma candidatura
                alcança a maioria absoluta exigida no primeiro.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        id="timeline"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                História presidencial
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Eleições de 2002 a 2022
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Todas as seis eleições presidenciais realizadas nesse
                intervalo foram decididas em segundo turno.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Período analisado
              </p>

              <p className="mt-1 text-lg font-black text-slate-950">
                2002 → 2022
              </p>
            </div>
          </div>

          <div className="relative mt-14">

            {/* LINHA CENTRAL DESKTOP */}
            <div className="absolute left-[31px] top-0 hidden h-full w-px bg-slate-200 md:block" />

            <div className="space-y-6">
              {electionTimeline.map((election, index) => (
                <article
                  key={election.year}
                  className="relative md:pl-24"
                >

                  <div className="absolute left-0 top-7 hidden size-16 items-center justify-center rounded-full border-4 border-white bg-slate-950 text-sm font-black text-white shadow-sm md:flex">
                    {election.year.slice(2)}
                  </div>

                  <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40">

                    <div className="grid lg:grid-cols-[190px_1fr_220px]">

                      {/* ANO */}
                      <div className="flex items-center border-b border-slate-100 bg-slate-50 p-7 lg:border-b-0 lg:border-r">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                            Eleição
                          </p>

                          <p className="mt-1 text-4xl font-black tracking-tight text-slate-950">
                            {election.year}
                          </p>

                          <span className="mt-3 inline-flex rounded-full bg-slate-200/70 px-3 py-1 text-xs font-bold text-slate-600">
                            {election.round}
                          </span>
                        </div>
                      </div>

                      {/* CONTEÚDO */}
                      <div className="p-7 lg:p-8">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                            Eleito
                          </span>

                          <span className="text-xs font-semibold text-slate-400">
                            {election.electedParty}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                          {election.elected}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                          {election.description}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                          <span className="text-slate-400">
                            Outro finalista:
                          </span>

                          <span className="font-semibold text-slate-700">
                            {election.finalist}
                          </span>

                          <span className="text-slate-400">
                            ({election.finalistParty})
                          </span>
                        </div>
                      </div>

                      {/* RESULTADO */}
                      <div className="flex items-center border-t border-slate-100 bg-slate-50/60 p-7 lg:border-l lg:border-t-0">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                            Votos válidos no 2º turno
                          </p>

                          <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-slate-950">
                            {election.percentage}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            candidatura eleita
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {index !== electionTimeline.length - 1 && (
                    <div className="ml-8 mt-6 hidden text-slate-300 md:block">
                      <ArrowDown size={16} />
                    </div>
                  )}

                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEARÁ */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8 lg:py-20">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Próxima etapa
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Do Brasil para o Ceará.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A estrutura foi pensada para começar pelo cenário presidencial
              nacional e, progressivamente, permitir recortes do Ceará:
              resultados estaduais, municípios, candidaturas e eleições para
              outros cargos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ["01", "Presidente"],
              ["02", "Governador"],
              ["03", "Senador"],
              ["04", "Deputados"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-bold text-blue-400">
                  {number}
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FONTES */}
      <section
        id="fontes"
        className="scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Transparência
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              De onde vêm os dados?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Informações eleitorais devem ser acompanhadas de fontes
              verificáveis. Nesta página, a referência principal é o Tribunal
              Superior Eleitoral.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {officialSources.map((source) => (
              <a
                key={source.title}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100">
                    <Landmark size={17} />
                  </div>

                  <ExternalLink
                    size={16}
                    className="text-slate-300 transition group-hover:text-slate-700"
                  />
                </div>

                <h3 className="mt-5 font-bold text-slate-950">
                  {source.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {source.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-blue-700">
                  Acessar fonte oficial
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex gap-3">
              <Scale
                size={18}
                className="mt-0.5 shrink-0 text-slate-500"
              />

              <p className="text-xs leading-6 text-slate-500">
                Este projeto tem finalidade informativa. A apresentação de
                resultados históricos, partidos e candidaturas não representa
                apoio, oposição ou recomendação eleitoral. Para informações
                oficiais e atualizadas, consulte a Justiça Eleitoral.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Landmark size={15} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">
                Panorama Eleitoral
              </p>

              <p className="text-xs text-slate-400">
                Informação para consulta.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Dados históricos consultados em fontes da Justiça Eleitoral.
          </p>

        </div>
      </footer>

    </main>
  );
}
