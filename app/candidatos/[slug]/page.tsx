import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Landmark,
  MapPin,
  ShieldCheck,
  UserRound,
  Users,
  Vote,
  WalletCards,
} from "lucide-react";

import {
  candidates,
  getCandidate,
} from "../../../lib/candidates";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


const tabs = [
  "Perfil",
  "Plano de Governo",
  "Propostas",
  "Histórico Político",
  "Ações Legislativas",
];


export function generateStaticParams() {
  return candidates.map((candidate) => ({
    slug: candidate.slug,
  }));
}


export async function generateMetadata(
  {
    params,
  }: PageProps
): Promise<Metadata> {

  const { slug } = await params;

  const candidate = getCandidate(slug);

  if (!candidate) {
    return {
      title: "Candidato não encontrado | Panorama Eleitoral",
    };
  }

  return {
    title: `${candidate.name} | Panorama Eleitoral`,

    description:
      `Perfil eleitoral de ${candidate.name}: candidatura, partido, vice, patrimônio declarado e informações públicas.`,
  };
}


export default async function CandidateProfilePage(
  {
    params,
  }: PageProps
) {

  const { slug } = await params;

  const candidate = getCandidate(slug);

  if (!candidate) {
    notFound();
  }


  return (

    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">


      {/* =====================================================
          NAVBAR
      ===================================================== */}

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


      {/* =====================================================
          HERO DO CANDIDATO
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">

          <Link
            href="/candidatos"
            className="mb-7 inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            ← Voltar para candidatos
          </Link>


          <div className="grid gap-8 lg:grid-cols-[350px_1fr] lg:items-stretch">


            {/* FOTO */}

            <div className="relative min-h-[390px] overflow-hidden rounded-[32px] bg-slate-200 shadow-sm lg:min-h-[460px]">

              <Image
                src={candidate.image}
                alt={`Foto de ${candidate.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 350px"

                style={{
                  objectPosition: candidate.imagePosition,
                }}

                className="object-cover"
              />


              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 to-transparent" />


              <div className="absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950 shadow-xl">

                {candidate.number}

              </div>


              <div className="absolute bottom-5 left-5">

                <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 shadow-sm">

                  {candidate.party}

                </span>

              </div>

            </div>


            {/* APRESENTAÇÃO */}

            <div className="flex flex-col justify-center rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-11">


              <div className="flex flex-wrap items-center gap-2">

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">

                  <BadgeCheck size={14} />

                  {candidate.status}

                </span>


                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">

                  Eleições 2026

                </span>

              </div>


              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">

                Candidato à Presidência da República

              </p>


              <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">

                {candidate.name}

              </h1>


              <p className="mt-3 text-base text-slate-500">

                {candidate.fullName}

              </p>


              <div className="mt-8 grid gap-3 sm:grid-cols-3">


                <div className="rounded-2xl bg-slate-50 p-5">

                  <Vote
                    size={18}
                    className="text-blue-600"
                  />

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Partido
                  </p>

                  <p className="mt-1 text-base font-black">
                    {candidate.party} · {candidate.number}
                  </p>

                </div>


                <div className="rounded-2xl bg-slate-50 p-5">

                  <Users
                    size={18}
                    className="text-blue-600"
                  />

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Vice-presidente
                  </p>

                  <p className="mt-1 text-base font-black">
                    {candidate.vice}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    {candidate.viceParty}
                  </p>

                </div>


                <div className="rounded-2xl bg-slate-50 p-5">

                  <ShieldCheck
                    size={18}
                    className="text-blue-600"
                  />

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Situação
                  </p>

                  <p className="mt-1 text-base font-black">
                    {candidate.status}
                  </p>

                </div>

              </div>


              <div className="mt-7 border-t border-slate-100 pt-6">

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  Coligação / composição eleitoral
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  {candidate.coalition}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABAS
      ===================================================== */}

      <section className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto max-w-7xl overflow-x-auto px-5 lg:px-8">

          <div className="flex min-w-max gap-8">

            {tabs.map((tab, index) => {

              const href =
                index === 0
                  ? `/candidatos/${candidate.slug}`
                  : index === 1
                    ? `/candidatos/${candidate.slug}/plano-de-governo`
                    : null;

              if (href) {

                return (

                  <Link
                    key={tab}
                    href={href}
                    className={`relative flex h-16 items-center gap-2 text-sm font-bold ${
                      index === 0
                        ? "text-slate-950"
                        : "text-slate-500 transition hover:text-slate-950"
                    }`}
                  >

                    {tab}

                    {index === 0 && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600" />
                    )}

                  </Link>

                );

              }

              return (

                <div
                  key={tab}
                  className="relative flex h-16 cursor-default items-center gap-2 text-sm font-bold text-slate-400"
                >

                  {tab}

                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-slate-400">
                    Em breve
                  </span>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PERFIL
      ===================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-18">


          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">

              Perfil

            </p>


            <h2 className="mt-3 text-3xl font-black tracking-tight">

              Informações da candidatura

            </h2>


            <p className="mt-4 text-sm leading-7 text-slate-600">

              Dados pessoais e eleitorais declarados à Justiça Eleitoral para
              a candidatura à Presidência da República em 2026.

            </p>

          </div>


          {/* DADOS ELEITORAIS */}

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">


            <InfoCard
              icon={<UserRound size={18} />}
              label="Nome na urna"
              value={candidate.ballotName}
            />


            <InfoCard
              icon={<Vote size={18} />}
              label="Número eleitoral"
              value={candidate.number}
            />


            <InfoCard
              icon={<Landmark size={18} />}
              label="Partido"
              value={`${candidate.party} — ${candidate.partyName}`}
            />


            <InfoCard
              icon={<Users size={18} />}
              label="Vice-presidente"
              value={`${candidate.vice} — ${candidate.viceParty}`}
            />


            <InfoCard
              icon={<CalendarDays size={18} />}
              label="Nascimento"
              value={candidate.birthDate}
            />


            <InfoCard
              icon={<MapPin size={18} />}
              label="Naturalidade"
              value={candidate.birthPlace}
            />


            <InfoCard
              icon={<BriefcaseBusiness size={18} />}
              label="Ocupação declarada"
              value={candidate.occupation}
            />


            <InfoCard
              icon={<GraduationCap size={18} />}
              label="Grau de instrução"
              value={candidate.education}
            />


            <InfoCard
              icon={<BadgeCheck size={18} />}
              label="Situação da candidatura"
              value={candidate.status}
            />

          </div>


          {/* =================================================
              PATRIMÔNIO
          ================================================= */}

          <div className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">


            <div className="grid lg:grid-cols-[1fr_0.85fr]">


              {/* TOTAL */}

              <div className="p-7 sm:p-9 lg:p-10">

                <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white">

                  <WalletCards size={20} />

                </div>


                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">

                  Patrimônio declarado ao TSE em 2026

                </p>


                <p className="mt-3 break-words text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">

                  {candidate.assetsTotal}

                </p>


                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">

                  Este valor corresponde ao total de bens informado pelo
                  próprio candidato à Justiça Eleitoral no registro da
                  candidatura de 2026. Não representa uma estimativa
                  independente feita pelo Panorama Eleitoral.

                </p>


                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">

                  <ShieldCheck size={14} />

                  Fonte: TSE · DivulgaCandContas

                </div>

              </div>


              {/* RESUMO */}

              <div className="border-t border-slate-200 bg-slate-50 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">

                  Composição resumida

                </p>


                <div className="mt-5 space-y-3">

                  {candidate.assetSummary.map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                    >

                      <div className="mt-1 size-2 shrink-0 rounded-full bg-blue-600" />


                      <p className="text-sm font-semibold leading-6 text-slate-700">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>


                <p className="mt-5 text-xs leading-5 text-slate-400">

                  A relação acima é apenas um resumo por tipo de bem. Consulte
                  a declaração oficial para visualizar todos os itens e
                  respectivos valores.

                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              FONTE
          ================================================= */}

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-7">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">


              <div className="flex gap-4">

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">

                  <ShieldCheck size={18} />

                </div>


                <div>

                  <p className="text-sm font-black text-slate-950">

                    Fonte dos dados eleitorais

                  </p>


                  <p className="mt-1 text-sm leading-6 text-slate-500">

                    Tribunal Superior Eleitoral · DivulgaCandContas

                  </p>


                  <p className="mt-1 text-xs text-slate-400">

                    Última atualização desta página: {candidate.lastUpdated}

                  </p>

                </div>

              </div>


              <a
                href={candidate.tseUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >

                Consultar no TSE

                <ExternalLink size={15} />

              </a>

            </div>

          </div>


          {/* =================================================
              NOTA EDITORIAL
          ================================================= */}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <p className="text-xs leading-6 text-slate-500">

              O Panorama Eleitoral apresenta informações documentais para
              consulta. A exibição de patrimônio, partido, formação, ocupação
              ou qualquer outro dado não constitui avaliação, apoio, oposição
              ou recomendação eleitoral.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">


          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-white">

              <Landmark size={15} />

            </div>


            <div>

              <p className="text-sm font-bold">
                Panorama Eleitoral
              </p>

              <p className="text-xs text-slate-400">
                Informação para consulta.
              </p>

            </div>

          </Link>


          <p className="text-xs text-slate-400">

            Dados eleitorais sujeitos a atualização pela Justiça Eleitoral.

          </p>

        </div>

      </footer>

    </main>

  );

}


// ============================================================
// COMPONENTE DOS CARDS DE INFORMAÇÃO
// ============================================================

function InfoCard(
  {
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }
) {

  return (

    <div className="min-h-[132px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">

        {icon}

      </div>


      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">

        {label}

      </p>


      <p className="mt-1.5 text-sm font-black leading-6 text-slate-800">

        {value}

      </p>

    </div>

  );

}
