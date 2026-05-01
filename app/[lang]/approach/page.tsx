import { getDictionary } from "@/lib/get-dictionary";
import ApproachHero from "@/components/approach/ApproachHero";
import ApproachSteps from "@/components/approach/ApproachSteps";
import ApproachPrinciples from "@/components/approach/ApproachPrinciples";
import CTASection from "@/components/home/CTASection";

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="min-h-screen bg-off overflow-x-hidden">
      <ApproachHero dict={dict.approach} />
      <ApproachSteps steps={dict.approach.steps} />
      <ApproachPrinciples
        title={dict.approach.principles_title}
        principles={dict.approach.principles}
      />
      <CTASection lang={lang} dict={dict.cta} />
    </main>
  );
}
