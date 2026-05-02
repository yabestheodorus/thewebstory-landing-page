import { AboutHero } from "@/components/about/AboutHero";
import { AboutManifesto } from "@/components/about/AboutManifesto";
import { AboutTeam } from "@/components/about/AboutTeam";
import CTASection from "@/components/home/CTASection";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: dict.nav.about || "About",
    description: dict.about.hero.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="relative bg-off dark:bg-zinc-950 min-h-screen pt-20">
      <AboutHero dict={dict.about.hero} />
      <AboutManifesto dict={dict.about.manifesto} />
      <AboutTeam dict={dict.about.team} />
      <div className="mt-20">
        <CTASection lang={lang} dict={dict.cta} />
      </div>
    </main>
  );
}
