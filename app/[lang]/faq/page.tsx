import { getDictionary } from "@/lib/get-dictionary";
import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="min-h-screen bg-off dark:bg-zinc-950 pt-20">
      <FAQHero dict={dict.faq} />
      <div className="max-w-4xl mx-auto px-8 md:px-16 pb-32">
        <FAQAccordion items={dict.faq.items} />
      </div>
    </main>
  );
}
