import WorkPage from "@/components/work/WorkPage";
import { getDictionary } from "@/lib/get-dictionary";

export default async function WorkRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main>
      <WorkPage dict={dict.work} lang={lang} />
    </main>
  );
}
