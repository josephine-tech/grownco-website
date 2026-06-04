import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { talent, getTalent } from "@/data/talent";
import TalentProfileDetail from "./TalentProfileDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return talent.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTalent(params.slug);
  if (!t) return { title: "Talent Not Found" };
  return {
    title: `${t.name} - Talent`,
    description: t.bio.slice(0, 155),
  };
}

export default function TalentProfilePage({ params }: Props) {
  const t = getTalent(params.slug);
  if (!t) notFound();
  return <TalentProfileDetail talent={t} />;
}
