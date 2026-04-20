import HeroSection from "@/components/home/HeroSection";
import StatementSection from "@/components/home/StatementSection";
import WorksSection from "@/components/home/WorksSection";
import CTASection from "@/components/home/CTASection";
import BackgroundGlow from "@/components/home/BackgroundGlow";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="relative bg-off dark:bg-zinc-950 min-h-screen overflow-x-hidden">
      <BackgroundGlow />
      <HeroSection lang={lang} dict={dict.hero} />
      <StatementSection dict={dict.statement} />
      <WorksSection dict={dict.works} />
      <CTASection lang={lang} dict={dict.cta} />
    </main>
  );
}
