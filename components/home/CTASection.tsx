'use client'

import { useState } from 'react'

const WA_NUMBER = '6281234567890' // replace with real number

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/theunframed',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@theunframed',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WA_NUMBER}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/theunframed',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const projectTypes = ['Company Profile', 'Landing Page', 'Online Store', 'Portfolio', 'Other']

export default function CTASection() {
  const [form, setForm] = useState({ name: '', contact: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const waMessage = encodeURIComponent(
    `Hi theunframed! 👋\n\nNama: ${form.name}\nKontak: ${form.contact}\nJenis project: ${form.type || 'Belum dipilih'}\n\n${form.message}`
  )

  const handleWA = () => {
    if (!form.name.trim()) return
    window.open(`https://wa.me/${WA_NUMBER}?text=${waMessage}`, '_blank')
    setSent(true)
  }

  return (
    <section id="cta-section" className="relative bg-warm text-ink border-t border-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 min-h-[80vh]">

        {/* ── Left — headline + info ───────────────────────────── */}
        <div className="flex flex-col justify-between px-8 md:px-16 pt-20 pb-12 border-b md:border-b-0 md:border-r border-border">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">06 / 06</span>
              <span className="w-6 h-px bg-ink/10" />
              <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">Get in touch</span>
            </div>

            <h2 className="font-aktiv-grotesk text-[clamp(2.625rem,4vw+1rem,3.875rem)] font-bold leading-[1.0] tracking-[-0.025em] mb-8">
              Ready to own<br />
              your{' '}
              <span className="relative inline-block bg-stabilo/80 px-1 text-off/80">
                audience?
              </span>
            </h2>

            <p className="font-googlea text-sm leading-[1.8] text-muted-warm max-w-sm mb-12">
              Tell us about your project. We'll get back to you within 24 hours — usually faster.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-12">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-fit"
              >
                <span className="font-mono text-[0.5625rem] tracking-[0.16em] uppercase text-ink/30">WhatsApp</span>
                <span className="font-googlea text-[0.8125rem] text-ink group-hover:text-stabilo transition-colors duration-200">
                  +62 812-3456-7890
                </span>
              </a>
              <a
                href="mailto:hello@theunframed.com"
                className="group flex items-center gap-3 w-fit"
              >
                <span className="font-mono text-[0.5625rem] tracking-[0.16em] uppercase text-ink/30">Email</span>
                <span className="font-googlea text-[0.8125rem] text-ink group-hover:text-stabilo transition-colors duration-200">
                  hello@theunframed.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.5625rem] tracking-[0.16em] uppercase text-ink/30">Based in</span>
                <span className="font-googlea text-[0.8125rem] text-ink">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/30">Follow the work</span>
            <div className="flex items-center gap-1">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-border text-muted-warm hover:text-ink hover:border-ink/20 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="font-mono text-[0.5rem] tracking-[0.14em] text-ink/20 mt-2">
              © {new Date().getFullYear()} theunframed Studio. All rights reserved.
            </p>
          </div>
        </div>

        {/* ── Right — form ────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          {sent ? (
            <div className="flex flex-col gap-5">
              <div className="w-10 h-10 border border-stabilo flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8l4 4 8-8" stroke="var(--color-stabilo)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-aktiv-grotesk text-[1.75rem] font-semibold">Message sent.</h3>
              <p className="font-googlea text-[0.8125rem] text-muted-warm leading-[1.8] max-w-xs">
                We've received your brief and will reply within 24 hours. Check WhatsApp for our response.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', contact: '', type: '', message: '' }) }}
                className="self-start font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm hover:text-ink transition-colors duration-200 mt-2"
              >
                Send another →
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/35">Your name</label>
                <input
                  type="text"
                  placeholder="Budi Santoso"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="bg-transparent border border-border px-4 py-3 font-googlea text-[0.8125rem] text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/35">WhatsApp / email</label>
                <input
                  type="text"
                  placeholder="+62 812 ..."
                  value={form.contact}
                  onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                  className="bg-transparent border border-border px-4 py-3 font-googlea text-[0.8125rem] text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/35">Project type</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setForm(f => ({ ...f, type: f.type === type ? '' : type }))}
                      className="font-mono text-[0.5rem] tracking-widest uppercase px-3 py-1.5 border transition-all duration-150"
                      style={{
                        borderColor: form.type === type ? 'var(--color-stabilo)' : 'rgba(13,13,13,0.12)',
                        backgroundColor: form.type === type ? 'var(--color-stabilo)' : 'transparent',
                        color: form.type === type ? 'var(--color-ink)' : 'rgba(13,13,13,0.5)',
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/35">Tell us about your project</label>
                <textarea
                  rows={4}
                  placeholder="We sell artisan coffee and want to move customers from Shopee to our own site..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="bg-transparent border border-border px-4 py-3 font-googlea text-[0.8125rem] text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={handleWA}
                  disabled={!form.name.trim()}
                  className="flex-1 flex items-center justify-center gap-2.5 bg-ink text-off font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-6 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stabilo transition-colors duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
                <a
                  href={`mailto:hello@theunframed.com?subject=Project inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`}
                  className="flex items-center justify-center gap-2 border border-border text-ink font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-5 hover:border-ink/30 transition-colors duration-200"
                >
                  Email instead
                </a>
              </div>

              <p className="font-mono text-[0.4375rem] tracking-[0.14em] text-ink/20">
                We reply within 24 hours. No spam, ever.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
