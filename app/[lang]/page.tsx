import HeroSection from "@/components/home/HeroSection";
import StatementSection from "@/components/home/StatementSection";
import HomeServices from "@/components/home/HomeServices";
import HomeApproach from "@/components/home/HomeApproach";
import { WhyUs } from "@/components/home/WhyUs";
import CTASection from "@/components/home/CTASection";
import BackgroundGlow from "@/components/home/BackgroundGlow";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'id');

  return (
    <main className="relative bg-secondary overflow-x-hidden">
      <BackgroundGlow />
      <HeroSection lang={lang} dict={dict.hero} />
      <div className="bg-secondary">
        <StatementSection dict={dict.statement} />
        <HomeServices lang={lang} dict={dict.works} />
        <HomeApproach lang={lang} dict={dict.approach} homeDict={dict.home_approach} />
        <WhyUs dict={dict.about.why_us} />
        <CTASection lang={lang} dict={dict.cta} />
      </div>
    </main>
  );
}
