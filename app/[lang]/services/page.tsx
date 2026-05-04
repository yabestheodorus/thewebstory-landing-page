import { getDictionary } from "@/lib/get-dictionary";
import HomeServices from "@/components/home/HomeServices";
import { WhyUs } from "@/components/home/WhyUs";
import CTASection from "@/components/home/CTASection";
import BackgroundGlow from "@/components/home/BackgroundGlow";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="relative min-h-screen bg-secondary overflow-x-hidden pt-20">
      <BackgroundGlow />
      <div className="relative z-10">
        <HomeServices lang={lang} dict={dict.works} />
        <WhyUs dict={dict.about.why_us} />
      </div>
      <CTASection lang={lang} dict={dict.cta} />
    </main>
  );
}
