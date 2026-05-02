export interface ServiceLogo { name: string; src: string }

export interface Service {
  id: string
  slug: string
  title: string
  category: string
  deliverable: string
  timeline: string
  description: string
  price: string
  keywords: string[]
  logos?: ServiceLogo[]
}

export const services: Service[] = [
  {
    id: '01',
    slug: 'company-profile',
    title: 'Company Profile Website',
    category: 'Presence',
    deliverable: 'Full website',
    timeline: '2–4 wks',
    price: 'Rp 12jt+',
    description:
      'A premium digital storefront that tells your brand story. Animated, fast, and designed to make first impressions that convert visitors into inquiries.',
    keywords: ['About', 'Services', 'Contact', 'SEO-ready'],
  },
  {
    id: '02',
    slug: 'landing-page',
    title: 'Product Landing Page',
    category: 'Launch',
    deliverable: 'Landing page',
    timeline: '1–2 wks',
    price: 'Rp 8jt+',
    description:
      'One product. One page. One goal — conversion. Motion-driven layouts built to showcase what you sell and drive action fast.',
    keywords: ['Hero section', 'CTA-focused', 'Mobile-first', 'Analytics'],
  },
  {
    id: '03',
    slug: 'catalogue',
    title: 'Product Catalogue',
    category: 'Showcase',
    deliverable: 'Catalogue site',
    timeline: '2–4 wks',
    price: 'Rp 15jt+',
    description:
      'Display your full product line in one place. Customers browse, filter, and enquire — perfect for brands not ready for online checkout yet.',
    keywords: ['Product grid', 'Filters', 'WhatsApp link', 'Enquiry form'],
  },
  {
    id: '04',
    slug: 'online-store',
    title: 'Online Store',
    category: 'Commerce',
    deliverable: 'E-commerce site',
    timeline: '4–8 wks',
    price: 'Rp 25jt+',
    description:
      'Your own storefront — not a marketplace listing. Cart, checkout, and payment integration you fully own and control.',
    keywords: ['Add to cart', 'Checkout flow', 'Order confirmation', 'Payment gateway'],
  },
  {
    id: '05',
    slug: 'portfolio',
    title: 'Portfolio & Personal Brand',
    category: 'Identity',
    deliverable: 'Portfolio site',
    timeline: '2–3 wks',
    price: 'Rp 10jt+',
    description:
      'For creators, freelancers, and founders who need a digital home. Showcase your work, tell your story, and own your audience.',
    keywords: ['Case studies', 'Gallery', 'Blog-ready', 'Social links'],
  },
  {
    id: '06',
    slug: 'payment-integration',
    title: 'Payment Integration',
    category: 'Checkout',
    deliverable: 'Payment system',
    timeline: '1–2 wks',
    price: 'Rp 5jt+',
    description:
      'We connect your site to the gateways Indonesian customers already trust. Verified checkout that feels as safe as any marketplace.',
    keywords: ['GoPay', 'OVO', 'BCA', 'QRIS', 'Visa'],
    logos: [
      { name: 'GoPay', src: '/images/logos/gopay.png' },
      { name: 'OVO', src: '/images/logos/ovo.png' },
      { name: 'BCA', src: '/images/logos/bca.png' },
      { name: 'QRIS', src: '/images/logos/qris.png' },
      { name: 'Visa', src: '/images/logos/visa.png' },
    ],
  },
]