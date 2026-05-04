import { getDictionary } from "@/lib/get-dictionary";
import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/home/CTASection";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="min-h-screen bg-secondary pt-20">
      <FAQHero dict={dict.faq} />
      <div className="max-w-5xl mx-auto px-8 md:px-16 pb-40">
        <FAQAccordion items={dict.faq.items} />
      </div>
      <CTASection lang={lang} dict={dict.cta} />
    </main>
  );
}
