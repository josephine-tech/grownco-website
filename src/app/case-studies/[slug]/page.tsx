import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import CaseStudyDetail from "./CaseStudyDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.brand} - ${study.headline}`,
    description: study.challenge.slice(0, 155),
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
