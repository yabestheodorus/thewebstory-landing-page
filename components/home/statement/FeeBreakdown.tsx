import type { Fee } from './statementData'
import { Dictionary } from '@/dictionaries/en'

interface FeeBreakdownProps {
  fees: Fee[]
  dict: Dictionary['statement']
}

export function FeeBreakdown({ fees, dict }: FeeBreakdownProps) {
  // Mapping labels to dictionary keys
  const getLabel = (originalLabel: string) => {
    if (originalLabel.includes('Platform')) return dict.fee_platform
    if (originalLabel.includes('Ad')) return dict.fee_ads
    if (originalLabel.includes('Voucher')) return dict.fee_vouchers
    return originalLabel
  }

  return (
    <div className="s-fees border-t border-ink/8">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {fees.map((fee, i) => (
          <div
            key={fee.label}
            className="s-fee px-8 md:px-12 py-12 flex flex-col items-center gap-3 border-b md:border-b-0 md:border-r border-ink/8 last:border-0"
          >
            <span className="font-mono text-[0.625rem] tracking-[0.2rem] uppercase text-ink/50 text-center">
              {String(i + 1).padStart(2, '0')} — {getLabel(fee.label)}
            </span>
            <span
              className="font-aktiv-grotesk font-bold leading-none tracking-[-0.03em] text-ink"
              style={{ fontSize: 'clamp(2.75rem, 4vw + 1rem, 4rem)' }}
            >
              {fee.value}
            </span>
            <span className="font-mono text-[0.625rem] tracking-[0.14em] text-ink/40 text-center">{fee.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}