import ApproachHero from "@/components/approach/ApproachHero";
import ApproachPrinciples from "@/components/approach/ApproachPrinciples";
import ApproachSteps from "@/components/approach/ApproachSteps";
import CTASection from "@/components/home/CTASection";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return {
    title: dict.nav.approach || "Approach",
    description: dict.approach.hero_desc,
  };
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="relative bg-secondary dark:bg-zinc-950 min-h-screen pt-20">
      <ApproachHero dict={dict.approach} />
      <ApproachSteps steps={dict.approach.steps} />
      <ApproachPrinciples 
        title={dict.approach.principles_title} 
        principles={dict.approach.principles} 
      />
      <div className="mt-20">
        <CTASection lang={lang} dict={dict.cta} />
      </div>
    </main>
  );
}
