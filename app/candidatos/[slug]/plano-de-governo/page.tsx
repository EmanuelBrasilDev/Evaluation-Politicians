import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import {
  BadgeCheck,
  BookOpen,
  CalendarRange,
  CheckCircle2,
  ExternalLink,
  FileText,
  Info,
  Landmark,
  ShieldCheck,
  Target,
} from "lucide-react";

import {
  candidates,
  getCandidate,
} from "../../../../lib/candidates";

import {
  getGovernmentPlan,
} from "../../../../lib/government-plans";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


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
      title: "Plano de Governo | Panorama Eleitoral",
    };
  }

  return {
    title:
      `Plano de Governo de ${candidate.name} | Panorama Eleitoral`,

    description:
      `Resumo documental do plano de governo apresentado por ${candidate.name} para o período presidencial de 2027 a 2030.`,
  };
}


export default async function GovernmentPlanPage(
  {
    params,
  }: PageProps
) {

  const { slug } = await params;

  const candidate = getCandidate(slug);
  const plan = getGovernmentPlan(slug);

  if (!candidate || !plan) {
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

              <p className="text-sm font-bold tracking-tight">
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
          CABEÇALHO DO CANDIDATO
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">

          <Link
            href={`/candidatos/${candidate.slug}`}
            className="mb-6 inline-flex text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            ← Voltar ao perfil
          </Link>


          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">


            <div className="relative min-h-[290px] overflow-hidden rounded-[28px] bg-slate-200">

              <Image
                src={candidate.image}
                alt={`Foto de ${candidate.name}`}
                fill
                priority
                sizes="260px"

                style={{
                  objectPosition: candidate.imagePosition,
                }}

                className="object-cover"
              />


              <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl bg-white text-lg font-black shadow-lg">

                {candidate.number}

              </div>

            </div>


            <div className="flex flex-col justify-center rounded-[28px] border border-slate-200 bg-white p-7 sm:p-9">


              <div className="flex flex-wrap gap-2">

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">

                  <BadgeCheck size={13} />

                  {candidate.status}

                </span>


                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">

                  {candidate.party} · {candidate.number}

                </span>

              </div>


              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">

                Plano de Governo · Eleições 2026

              </p>


              <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] sm:text-5xl">

                {candidate.name}

              </h1>


              <p className="mt-3 text-sm text-slate-500 sm:text-base">

                {plan.documentTitle}

              </p>


              <div className="mt-7 flex flex-wrap gap-3">

                <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3">

                  <CalendarRange
                    size={17}
                    className="text-blue-600"
                  />

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Horizonte
                    </p>

                    <p className="text-sm font-black">
                      2027–2030
                    </p>

                  </div>

                </div>


                <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3">

                  <ShieldCheck
                    size={17}
                    className="text-blue-600"
                  />

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Fonte principal
                    </p>

                    <p className="text-sm font-black">
                      TSE
                    </p>

                  </div>

                </div>

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


            <Link
              href={`/candidatos/${candidate.slug}`}
              className="relative flex h-16 items-center text-sm font-bold text-slate-500 transition hover:text-slate-950"
            >
              Perfil
            </Link>


            <Link
              href={`/candidatos/${candidate.slug}/plano-de-governo`}
              className="relative flex h-16 items-center text-sm font-bold text-slate-950"
            >

              Plano de Governo

              <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600" />

            </Link>


            {[
              "Propostas",
              "Histórico Político",
              "Ações Legislativas",
            ].map((tab) => (

              <div
                key={tab}
                className="flex h-16 cursor-default items-center gap-2 text-sm font-bold text-slate-400"
              >

                {tab}

                <span className="rounded-full bg-slate-100 px-2 py-1 text-[9px] font-black uppercase tracking-wider">
                  Em breve
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTEÚDO
      ===================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">


          {/* METODOLOGIA */}

          <div className="rounded-[28px] border border-blue-100 bg-blue-50/60 p-6 sm:p-7">

            <div className="flex gap-4">

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">

                <Info size={18} />

              </div>


              <div>

                <p className="font-black text-slate-950">
                  Como interpretar esta página
                </p>

                <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">

                  Esta é uma síntese documental do plano apresentado pela
                  candidatura. O horizonte 2027–2030 organiza as direções
                  declaradas para o mandato e não representa previsão de
                  cumprimento. Quando o documento não estabelece prazo anual,
                  nenhuma data específica é atribuída pelo Panorama Eleitoral.

                </p>

              </div>

            </div>

          </div>


          {/* VISÃO GERAL */}

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">


            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Visão geral
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Estrutura do plano
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {plan.overview}
              </p>

            </div>


            <div className="rounded-[28px] bg-slate-950 p-7 text-white">

              <FileText
                size={22}
                className="text-blue-400"
              />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Documento analisado
              </p>

              <p className="mt-2 text-lg font-black leading-7">
                {plan.documentTitle}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Documento formalmente apresentado pela candidatura à Justiça Eleitoral.
              </p>

            </div>

          </div>


          {/* PROJEÇÃO DOCUMENTAL */}

          <div className="mt-16">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Horizonte 2027–2030
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Projeção documental do mandato
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Síntese das principais direções que o documento declara
                perseguir ao longo do período presidencial.
              </p>

            </div>


            <div className="mt-8 grid gap-4 lg:grid-cols-3">

              {plan.projection.map((item, index) => (

                <div
                  key={item}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm"
                >

                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <p className="mt-5 text-sm font-semibold leading-7 text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* NOTA ESPECIAL */}

          {plan.specialNote && (

            <div className="mt-8 rounded-[26px] border border-amber-200 bg-amber-50 p-6">

              <div className="flex gap-4">

                <Target
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-700"
                />

                <div>

                  <p className="font-black text-slate-950">
                    {plan.specialNote.title}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {plan.specialNote.text}
                  </p>

                </div>

              </div>

            </div>

          )}


          {/* EIXOS */}

          <div className="mt-16">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Áreas do plano
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Principais eixos
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Esta seleção destaca áreas representativas do documento.
                A relação completa permanece disponível nas fontes oficiais.
              </p>

            </div>


            <div className="mt-9 grid items-start gap-5 lg:grid-cols-2">

              {plan.axes.map((axis, index) => (

                <article
                  key={axis.title}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >

                  <div className="border-b border-slate-100 p-6 sm:p-7">

                    <div className="flex items-start gap-4">

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-700">

                        {String(index + 1).padStart(2, "0")}

                      </div>


                      <div>

                        <h3 className="text-xl font-black tracking-tight">
                          {axis.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {axis.description}
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="space-y-3 bg-slate-50/50 p-6">

                    {axis.items.map((item) => (

                      <div
                        key={item.text}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                      >

                        <div className="flex items-start gap-3">

                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-blue-600"
                          />

                          <div>

                            <p className="text-sm font-semibold leading-6 text-slate-700">
                              {item.text}
                            </p>

                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                              Plano de governo · {item.pages}
                            </p>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                </article>

              ))}

            </div>

          </div>


          {/* DIFERENÇA ENTRE PLANO E RESULTADO */}

          <div className="mt-16 rounded-[30px] bg-slate-950 p-7 text-white sm:p-9">

            <div className="flex max-w-4xl gap-4">

              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-blue-400"
              />

              <div>

                <h2 className="text-xl font-black">
                  Proposta não significa execução automática
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">

                  O plano registra compromissos e diretrizes da candidatura.
                  Sua eventual implementação pode depender de orçamento,
                  regulamentação, capacidade administrativa, relações
                  federativas e, em determinados casos, aprovação legislativa.
                  Esta página documenta o que foi apresentado, sem afirmar que
                  as medidas serão necessariamente executadas.

                </p>

              </div>

            </div>

          </div>


          {/* REFERÊNCIAS */}

          <div className="mt-16">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Transparência
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Referências utilizadas
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">

                Os links abaixo foram efetivamente utilizados para estruturar
                as informações apresentadas nesta página.

              </p>

            </div>


            <div className="mt-8 grid gap-4 md:grid-cols-3">

              {plan.references.map((reference, index) => (

                <a
                  key={reference.url}
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[26px] border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100">

                      {index === 0 ? (
                        <FileText size={17} />
                      ) : (
                        <BookOpen size={17} />
                      )}

                    </div>


                    <ExternalLink
                      size={15}
                      className="text-slate-300 transition group-hover:text-slate-700"
                    />

                  </div>


                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">

                    Tribunal Superior Eleitoral

                  </p>


                  <h3 className="mt-2 font-black leading-6">
                    {reference.title}
                  </h3>


                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {reference.description}
                  </p>

                </a>

              ))}

            </div>


            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <p className="text-xs leading-6 text-slate-500">

                A inclusão de uma fonte representa apenas sua utilização
                documental nesta página e não significa concordância do
                Panorama Eleitoral com o conteúdo apresentado pela candidatura.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

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
            Síntese baseada em documentos registrados na Justiça Eleitoral.
          </p>

        </div>

      </footer>

    </main>

  );

}
