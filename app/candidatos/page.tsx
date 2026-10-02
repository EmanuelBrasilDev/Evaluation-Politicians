import Image from "next/image";
import Link from "next/link";
import {

  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  Info,
  Landmark,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";

const candidates = [
  {
    slug: "lula",
    name: "Lula",
    fullName: "Luiz Inácio Lula da Silva",
    party: "PT",
    number: "13",
    vice: "Geraldo Alckmin",
    viceParty: "PSB",
    status: "Deferido",
    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/lula.jpg",
    imagePosition: "center 30%",
  },
  {
    slug: "flavio-bolsonaro",
    name: "Flávio Bolsonaro",
    fullName: "Flávio Nantes Bolsonaro",
    party: "PL",
    number: "22",
    vice: "Alfredo Gaspar",
    viceParty: "PL",
    status: "Deferido",
    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/flavio-bolsonaro-senador-congresso-scaled.jpg",
    imagePosition: "center 25%",
  },
  {
    slug: "renan-santos",
    name: "Renan Santos",
    fullName: "Renan Antonio Ferreira dos Santos",
    party: "MISSÃO",
    number: "14",
    vice: "Aroldo Medina",
    viceParty: "MISSÃO",
    status: "Deferido",
    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/17871006126a84fdc474ccc-1787100612-3x2-md.jpg",
    imagePosition: "center 28%",
  },
  {
    slug: "ronaldo-caiado",
    name: "Ronaldo Caiado",
    fullName: "Ronaldo Ramos Caiado",
    party: "PSD",
    number: "55",
    vice: "Gilberto Kassab",
    viceParty: "PSD",
    status: "Deferido",
    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/images.webp",
    imagePosition: "center 25%",
  },
  {
    slug: "romeu-zema",
    name: "Romeu Zema",
    fullName: "Romeu Zema Neto",
    party: "NOVO",
    number: "30",
    vice: "Eduardo Girão",
    viceParty: "NOVO",
    status: "Deferido",
    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/images-1.webp",
    imagePosition: "center 25%",
  },
  {
    slug: "augusto-cury",
    name: "Augusto Cury",
    fullName: "Augusto Jorge Cury",
    party: "AVANTE",
    number: "70",
    vice: "Júlio Delgado",
    viceParty: "AVANTE",
    status: "Deferido",
    image:
      "https://5zchqatc5bfkxibe.public.blob.vercel-storage.com/politicos/augusto-cury-escritor-28339139296-cropped.jpg",
    imagePosition: "center 18%",
  },
];

const tseSource =
  "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/planos-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026";

export const metadata = {
  title: "Candidatos à Presidência 2026 | Panorama Eleitoral",
  description:
    "Conheça candidaturas à Presidência da República nas Eleições 2026 e consulte informações eleitorais oficiais.",
};

export default function CandidatesPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
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

          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Home
            </Link>

            <Link
              href="/candidatos"
              className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white"
            >
              Candidatos
            </Link>

            <Link
              href="/partidos"
              className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Partidos
            </Link>
          </nav>

        </div>
      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">

        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
              <Vote size={14} />
              Eleições Gerais 2026
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Candidaturas à
              <span className="block text-slate-400">
                Presidência em destaque.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Conheça algumas das candidaturas registradas para a Presidência
              da República nas Eleições 2026. Esta área será usada para
              consultar perfis, propostas, patrimônio declarado, histórico
              político e outras informações públicas.
            </p>

          </div>

          {/* INFORMAÇÕES DA ELEIÇÃO */}

          <div className="mt-12 grid gap-3 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <CalendarDays
                size={18}
                className="text-blue-600"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Primeiro turno
              </p>

              <p className="mt-1 text-lg font-black text-slate-950">
                4 de outubro
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Vote
                size={18}
                className="text-blue-600"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Cargo
              </p>

              <p className="mt-1 text-lg font-black text-slate-950">
                Presidente
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <ShieldCheck
                size={18}
                className="text-blue-600"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Fonte principal
              </p>

              <p className="mt-1 text-lg font-black text-slate-950">
                TSE
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          AVISO EDITORIAL
      ====================================================== */}

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">

          <div className="flex max-w-4xl gap-4">

            <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
              <Info size={17} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-950">
                Sobre esta seleção
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Os nomes exibidos abaixo formam uma seleção editorial para
                destaque nesta versão inicial do projeto. A presença,
                ausência ou posição de uma candidatura nesta página não
                representa avaliação, preferência ou recomendação eleitoral.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          CARDS DOS CANDIDATOS
      ====================================================== */}

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Presidência da República
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Candidaturas selecionadas
              </h2>
            </div>

            <a
              href={tseSource}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
            >
              Consultar informações no TSE
              <ExternalLink size={15} />
            </a>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {candidates.map((candidate) => (
              <article
                key={candidate.slug}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/60"
              >

                {/* FOTO */}

                <div className="relative aspect-[5/4] overflow-hidden bg-slate-200">

                  <Image
                    src={candidate.image}
                    alt={`Foto de ${candidate.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    style={{ objectPosition: candidate.imagePosition }}
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent" />

                  {/* NÚMERO */}

                  <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950 shadow-lg">
                    {candidate.number}
                  </div>

                  {/* STATUS */}

                  <div className="absolute right-5 top-5">
                    <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-emerald-700 shadow-sm backdrop-blur">
                      <BadgeCheck size={13} />
                      {candidate.status}
                    </div>
                  </div>

                  {/* PARTIDO NA FOTO */}

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-slate-900 backdrop-blur">
                      {candidate.party}
                    </span>
                  </div>

                </div>

                {/* INFORMAÇÕES */}

                <div className="p-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Candidato a presidente
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                    {candidate.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {candidate.fullName}
                  </p>

                  <div className="my-6 h-px bg-slate-100" />

                  {/* VICE */}

                  <div className="flex items-start gap-3">

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <Users size={16} />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Vice-presidente
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {candidate.vice}
                      </p>

                      <p className="text-xs text-slate-400">
                        {candidate.viceParty}
                      </p>
                    </div>

                  </div>

                  {/* FUTURO PERFIL */}

                  <Link
                    href={`/candidatos/${candidate.slug}`}
                    className="mt-6 block rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-slate-100"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-xs font-bold text-slate-700">
                          Perfil completo
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                          Dados eleitorais, patrimônio e candidatura
                        </p>
                      </div>

                      <div className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400">
                        <ArrowRight size={15} />
                      </div>

                    </div>

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                      Abrir perfil
                    </p>

                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          O QUE VAMOS MOSTRAR NOS PERFIS
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Próxima camada
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Cada candidatura terá um perfil próprio.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                A página individual será o núcleo da plataforma. Nela,
                poderemos organizar informações provenientes de fontes
                públicas de forma clara e rastreável.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                "Visão geral",
                "Propostas de governo",
                "Patrimônio declarado",
                "Histórico eleitoral",
                "Processos públicos",
                "Fontes e documentos",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-slate-500 shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-bold text-slate-800">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FONTE OFICIAL
      ====================================================== */}

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
                Consulte também a fonte oficial.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Informações sobre candidaturas, propostas e dados eleitorais
                podem ser consultadas diretamente nos sistemas do Tribunal
                Superior Eleitoral.
              </p>

            </div>

            <a
              href={tseSource}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Acessar TSE
              <ExternalLink size={15} />
            </a>

          </div>

        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

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

          <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-right">
            A seleção de candidaturas em destaque não representa apoio,
            oposição ou recomendação eleitoral.
          </p>

        </div>
      </footer>

    </main>
  );
}
