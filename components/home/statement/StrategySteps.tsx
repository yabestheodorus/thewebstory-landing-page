import type { Step } from './statementData'

interface StrategyStepsProps {
  steps: Step[]
}

export function StrategySteps({ steps }: StrategyStepsProps) {
  return (
    <div className="s-steps grid grid-cols-1 md:grid-cols-3 border border-ink/8">
      {steps.map((step) => (
        <div
          key={step.n}
          className="s-step relative px-8 py-10 flex flex-col items-center lg:items-start gap-4 border-b md:border-b-0 md:border-r border-ink/8 last:border-0 overflow-hidden"
        >
          {step.accent && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(124,92,255,0.07) 0%, transparent 75%)',
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
            {step.label}
          </span>
          <p className="font-googlea text-[0.8125rem] leading-[1.8] text-ink/60 mt-auto">{step.desc}</p>
        </div>
      ))}
    </div>
  )
}