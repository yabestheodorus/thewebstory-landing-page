import type { Step } from './statementData'
import { Dictionary } from '@/dictionaries/en'

interface StrategyStepsProps {
  steps: Step[]
  dict: Dictionary['statement']['steps']
}

export function StrategySteps({ steps, dict }: StrategyStepsProps) {
  // Mapping logic for localized content
  const getStepContent = (n: string) => {
    switch (n) {
      case '01': return { label: dict.s1, desc: dict.s1_desc }
      case '02': return { label: dict.s2, desc: dict.s2_desc }
      case '03': return { label: dict.s3, desc: dict.s3_desc }
      default: return { label: '', desc: '' }
    }
  }

  return (
    <div className="s-steps grid grid-cols-1 md:grid-cols-3 border border-ink/8">
      {steps.map((step) => {
        const content = getStepContent(step.n)
        return (
          <div
            key={step.n}
            className="s-step relative px-8 py-10 flex flex-col items-center lg:items-start gap-4 border-b md:border-b-0 md:border-r border-ink/8 last:border-0 overflow-hidden"
          >
            {step.accent && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-stabilo-rgb),0.07) 0%, transparent 75%)',
                }}
              />
            )}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.625rem] tracking-widest text-ink/50">{step.n}</span>
              {step.accent && (
                <span className="font-mono text-[0.4375rem] tracking-[0.2em] uppercase px-2 py-0.5 border border-stabilo/30 text-stabilo">
                  Key
                </span>
              )}
            </div>
            <span className="font-mono text-[0.625rem] tracking-[0.18em] uppercase text-ink/50">{step.badge}</span>
            <span
              className={`font-aktiv-grotesk text-[clamp(1.25rem,1.5vw+0.5rem,1.5rem)] font-semibold leading-tight ${step.accent ? 'text-stabilo' : 'text-ink'}`}
            >
              {content.label}
            </span>
            <p className="font-google text-[0.8125rem] leading-[1.8] text-ink/60 mt-auto">{content.desc}</p>
          </div>
        )
      })}
    </div>
  )
}