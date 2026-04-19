export interface Brand { name: string; logo: string }
export interface Fee { label: string; value: string; note: string }
export interface Step { n: string; badge: string; label: string; desc: string; accent: boolean }

export const BRANDS: Brand[] = [
  { name: 'GoPay', logo: '/images/logos/gopay.png' },
  { name: 'Dana', logo: '/images/logos/dana.png' },
  { name: 'OVO', logo: '/images/logos/ovo.png' },
  { name: 'Shopee', logo: '/images/logos/shopee.png' },
  { name: 'BCA', logo: '/images/logos/bca.png' },
  { name: 'Mandiri', logo: '/images/logos/mandiri.png' },
  { name: 'BNI', logo: '/images/logos/bni.png' },
  { name: 'QRIS', logo: '/images/logos/qris.png' },
  { name: 'Visa', logo: '/images/logos/visa.png' },
  { name: 'Mastercard', logo: '/images/logos/mastercard.png' },
]

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