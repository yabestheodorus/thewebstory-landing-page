import { getDictionary } from '@/lib/get-dictionary'
import CTASection from '@/components/home/CTASection'
import { Metadata } from 'next'

interface ContactPageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params
  const isID = lang === 'id'

  return {
    title: isID ? 'Kontak — thewebstory.id' : 'Contact Us — thewebstory.id',
    description: isID 
      ? 'Hubungi kami untuk mulai membangun panggung digital brand Anda.'
      : 'Get in touch with us to start building your brand\'s digital stage.',
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang as any)

  return (
    <main className="bg-secondary pt-32">
      <div className="px-8 md:px-16 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">Get in touch</span>
            <span className="w-8 h-px bg-ink/15" />
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-muted-warm">Contact</span>
          </div>
          <h1 className="font-aktiv-grotesk text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight mb-12">
            Let&apos;s build <br />
            <span className="text-ink/60 italic font-light">something real.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 pt-20 border-t border-ink/5">
            {/* Address / Global presence */}
            <div>
              <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo block mb-6">Location</span>
              <p className="font-google text-lg leading-relaxed text-ink/80 max-w-xs">
                Tangerang, Indonesia <br />
                <span className="text-muted-warm text-sm">Serving clients globally from the heart of Banten.</span>
              </p>
            </div>

            {/* What happens next */}
            <div>
              <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo block mb-6">What happens next?</span>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="font-mono text-[0.625rem] text-stabilo">01</span>
                  <div>
                    <h4 className="font-aktiv-grotesk font-bold text-sm mb-1">Response within 24h</h4>
                    <p className="font-google text-xs text-muted-warm leading-relaxed">We review your brief and reach out via WhatsApp or Email to schedule a chat.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-[0.625rem] text-stabilo">02</span>
                  <div>
                    <h4 className="font-aktiv-grotesk font-bold text-sm mb-1">Discovery Call</h4>
                    <p className="font-google text-xs text-muted-warm leading-relaxed">A 15-minute intro call to align on goals, scope, and initial budget ranges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-[0.625rem] text-stabilo">03</span>
                  <div>
                    <h4 className="font-aktiv-grotesk font-bold text-sm mb-1">Detailed Proposal</h4>
                    <p className="font-google text-xs text-muted-warm leading-relaxed">We send over a tailored plan with fixed pricing and a confirmed timeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection dict={dict.cta} lang={lang} />
    </main>
  )
}
