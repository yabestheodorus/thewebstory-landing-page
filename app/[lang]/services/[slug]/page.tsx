import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, AlertCircle, Info } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import CTASection from "@/components/home/CTASection";

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as any);

  const pkg = dict?.works?.packages?.find((p: any) => p.slug === slug);
  const addon = !pkg ? dict?.works?.addons?.find((a: any) => a.slug === slug) : null;
  const service = pkg || addon;

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${(service as any).tier || (service as any).name} | thewebstory`,
    description: (service as any).hero?.subheadline || (service as any).tagline || (service as any).description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string, slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as any);

  const pkg = dict?.works?.packages?.find((p: any) => p.slug === slug);
  const addon = !pkg ? dict?.works?.addons?.find((a: any) => a.slug === slug) : null;

  if (!pkg && !addon) notFound();

  const s = (pkg || addon) as any;

  return (
    <main className="relative bg-secondary text-ink min-h-screen">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Static Top Nav */}
          <div className="mb-12">
            <Link href={`/${lang}`} className="inline-flex items-center gap-2 label-meta hover:text-stabilo transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mb-24 md:mb-40">
            <span className="label-meta text-stabilo font-black tracking-[0.3em] uppercase mb-6 block">
              {s.hero?.eyebrow || (pkg ? "Package" : "Add-on")}
            </span>
            <h1 className="font-aktiv-grotesk text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-10">
              {s.hero?.headline || s.tier || s.name}
            </h1>
            <p className="font-aktiv-grotesk text-[20px] md:text-[28px] text-ink/60 font-medium leading-tight max-w-3xl">
              {s.hero?.subheadline || s.tagline || s.description || s.body}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
            <div className="space-y-32">

              {/* Problem Block */}
              {s.problem_block && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <AlertCircle className="text-stabilo w-6 h-6" />
                    <h2 className="label-meta text-ink font-bold tracking-widest uppercase">{s.problem_block.heading}</h2>
                  </div>
                  <div className="grid gap-6">
                    {s.problem_block.points.map((point: string, i: number) => (
                      <div key={i} className="flex gap-6 p-8 bg-card/40 rounded-3xl border border-ink/5 hover:border-stabilo/10 transition-colors">
                        <span className="font-bold text-ink/10 text-xl">0{i + 1}</span>
                        <p className="text-lg md:text-xl font-medium text-ink/70">{point}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Solution Block */}
              {s.solution_block && (
                <section className="bg-stabilo/5 text-ink p-10 md:p-20 rounded-[3rem] border border-stabilo/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-stabilo/5 blur-[100px] rounded-full group-hover:bg-stabilo/10 transition-all duration-700" />
                  <h2 className="font-aktiv-grotesk text-3xl md:text-5xl font-bold mb-8 relative z-10">{s.solution_block.heading}</h2>
                  <p className="text-lg md:text-xl text-ink/60 leading-relaxed font-medium relative z-10">
                    {s.solution_block.body}
                  </p>
                </section>
              )}

              {/* Body (for Add-ons) */}
              {s.body && !s.solution_block && (
                <section className="bg-card/40 text-ink p-10 md:p-20 rounded-[3rem] border border-ink/5">
                  <p className="text-lg md:text-2xl text-ink/60 leading-relaxed font-medium">
                    {s.body}
                  </p>
                </section>
              )}

              {/* What You Get Block */}
              {(s.what_you_get || s.what_you_get_detailed) && (
                <section>
                  <h2 className="font-aktiv-grotesk text-3xl md:text-5xl font-bold mb-12">{s.what_you_get?.heading || "What's included"}</h2>
                  <div className="grid gap-4">
                    {(s.what_you_get?.items || s.what_you_get_detailed || []).map((item: any, i: number) => (
                      <div key={i} className="group p-8 border border-ink/5 hover:bg-stabilo/5 hover:border-stabilo/10 transition-all duration-500 rounded-3xl">
                        <div className="flex items-start gap-6">
                          <CheckCircle2 className="text-stabilo w-6 h-6 mt-1 shrink-0" />
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-stabilo transition-colors">{item.label}</h3>
                            <p className="text-ink/50 font-medium leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Supported Couriers / Channels */}
              {(s.supported_couriers || s.supported_channels) && (
                <section>
                  <h2 className="label-meta text-ink/30 font-bold uppercase tracking-widest mb-8">
                    {s.supported_channels ? "Supported Channels" : "Supported Couriers"}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {(s.supported_couriers || s.supported_channels).map((c: string) => (
                      <span key={c} className="px-6 py-3 bg-card/40 border border-ink/5 rounded-full font-bold text-sm hover:border-stabilo/20 transition-colors">{c}</span>
                    ))}
                  </div>
                </section>
              )}

              {/* Best For Section */}
              {s.best_for && (
                <section className="bg-sand/30 p-10 md:p-16 rounded-[3rem] border border-ink/5 relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-stabilo/5 blur-3xl rounded-full" />
                  <h2 className="font-aktiv-grotesk text-2xl md:text-3xl font-bold mb-8">{s.best_for.heading}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {s.best_for.points.map((point: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-stabilo mt-2.5 shrink-0" />
                        <p className="text-lg font-medium text-ink/70">{point}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Example Use Cases */}
              {s.example_use_cases && (
                <section>
                  <h2 className="label-meta text-ink/30 font-bold uppercase tracking-widest mb-8">Who uses this?</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {s.example_use_cases.map((use: string, i: number) => (
                      <div key={i} className="p-6 bg-card/20 border border-ink/5 rounded-2xl flex items-center gap-4 hover:bg-card/40 transition-colors">
                        <Info className="text-stabilo w-5 h-5 shrink-0" />
                        <span className="font-medium text-ink/80">{use}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ Section */}
              {s.faq && (
                <section>
                  <div className="flex items-center gap-3 mb-12">
                    <HelpCircle className="text-stabilo w-8 h-8" />
                    <h2 className="font-aktiv-grotesk text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-4">
                    {s.faq.map((item: any, i: number) => (
                      <div key={i} className="bg-white/40 p-8 rounded-[2rem] border border-ink/5 hover:border-stabilo/10 transition-colors">
                        <h4 className="text-xl font-bold mb-4">{item.q}</h4>
                        <p className="text-ink/60 font-medium leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Sidebar Sticky Card */}
            <aside className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-10 rounded-[3rem] border border-ink/5 shadow-2xl shadow-ink/5 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stabilo/5 blur-3xl rounded-full" />
                
                <div className="relative z-10">
                  {s.mood && (
                    <span className="label-meta text-stabilo font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block opacity-60 italic">{s.mood}</span>
                  )}
                  <span className="label-meta text-ink/20 font-bold uppercase tracking-widest mb-2 block">{dict.works.labels.price_start}</span>
                  <div className="mb-6">
                    {s.original_price && (
                      <span className="text-ink/20 line-through text-sm font-medium decoration-stabilo/50 block mb-1">{s.original_price}</span>
                    )}
                    <div className="font-aktiv-grotesk text-[42px] md:text-[52px] font-bold text-ink tracking-tighter leading-none">
                      {s.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-10">
                    <span className="label-meta text-stabilo font-black text-[12px] uppercase tracking-[0.2em]">{s.delivery} delivery</span>
                  </div>

                  <div className="space-y-6 mb-10">
                    {s.bragging_rights && (
                      <div className="p-4 bg-ink/[0.02] rounded-2xl border border-ink/5">
                        <p className="text-sm font-bold text-ink/80 leading-relaxed italic">
                          " {s.bragging_rights} "
                        </p>
                      </div>
                    )}
                    
                    {s.perfect_excuse && (
                      <div className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-stabilo mt-1.5 shrink-0" />
                        <p className="text-sm font-medium text-ink/60 leading-relaxed">
                          {s.perfect_excuse}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <Link
                    href={`/${lang}/contact`}
                    className="flex items-center justify-center gap-3 bg-ink text-off w-full py-6 rounded-full font-bold text-lg hover:bg-stabilo hover:text-white transition-all duration-300 group mb-6"
                  >
                    {s.cta?.button || dict.works.cta}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {s.fun_fact && (
                    <div className="pt-6 border-t border-ink/5">
                      <div className="flex items-start gap-3">
                        <Info size={14} className="text-stabilo mt-0.5 shrink-0" />
                        <p className="text-[11px] font-medium text-ink/40 leading-snug">
                          <span className="text-ink/60 font-bold">Did you know?</span> {s.fun_fact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-card/40 text-ink/50 p-8 rounded-[2.5rem] text-sm leading-relaxed font-medium border border-ink/5">
                <span className="text-ink block mb-4 font-bold">Standard Inclusion:</span>
                <ul className="space-y-4">
                  {dict.works.disclaimer.map((d: string, i: number) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-stabilo mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTASection lang={lang} dict={dict.cta} />
    </main>
  );
}
