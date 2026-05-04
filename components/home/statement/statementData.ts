export interface Fee { label: string; value: string; note: string }
export interface Step { n: string; badge: string; label: string; desc: string; accent: boolean }

export const fees: Fee[] = [
  { label: 'Platform Commission', value: '15%', note: 'per transaction' },
  { label: 'Ad Performance', value: '8%', note: 'avg. spend per GMV' },
  { label: 'Campaign Vouchers', value: '3%', note: 'avg. discount cost' },
]

export const steps: Step[] = [
  { n: '01', badge: 'Acquisition', label: 'Marketplace', desc: 'Let them bring you the traffic.', accent: false },
  { n: '02', badge: 'Retention', label: 'Your Website', desc: 'Convert them on your own terms.', accent: true },
  { n: '03', badge: '100% Yours', label: 'Repeat Purchase', desc: '100% of revenue stays yours.', accent: false },
]