export interface ServiceLogo { name: string; src: string }

export interface Service {
  id: string
  title: string
  category: string
  deliverable: string
  timeline: string
  description: string
  keywords: string[]
  logos?: ServiceLogo[]
}

export const services: Service[] = [
  {
    id: '01',
    title: 'Company Profile Website',
    category: 'Presence',
    deliverable: 'Full website',
    timeline: '2–4 wks',
    description:
      'A premium digital storefront that tells your brand story. Animated, fast, and designed to make first impressions that convert visitors into inquiries.',
    keywords: ['About', 'Services', 'Contact', 'SEO-ready'],
  },
  {
    id: '02',
    title: 'Product Landing Page',
    category: 'Launch',
    deliverable: 'Landing page',
    timeline: '1–2 wks',
    description:
      'One product. One page. One goal — conversion. Motion-driven layouts built to showcase what you sell and drive action fast.',
    keywords: ['Hero section', 'CTA-focused', 'Mobile-first', 'Analytics'],
  },
  {
    id: '03',
    title: 'Product Catalogue',
    category: 'Showcase',
    deliverable: 'Catalogue site',
    timeline: '2–4 wks',
    description:
      'Display your full product line in one place. Customers browse, filter, and enquire — perfect for brands not ready for online checkout yet.',
    keywords: ['Product grid', 'Filters', 'WhatsApp link', 'Enquiry form'],
  },
  {
    id: '04',
    title: 'Online Store',
    category: 'Commerce',
    deliverable: 'E-commerce site',
    timeline: '4–8 wks',
    description:
      'Your own storefront — not a marketplace listing. Cart, checkout, and payment integration you fully own and control.',
    keywords: ['Add to cart', 'Checkout flow', 'Order confirmation', 'Payment gateway'],
  },
  {
    id: '05',
    title: 'Portfolio & Personal Brand',
    category: 'Identity',
    deliverable: 'Portfolio site',
    timeline: '2–3 wks',
    description:
      'For creators, freelancers, and founders who need a digital home. Showcase your work, tell your story, and own your audience.',
    keywords: ['Case studies', 'Gallery', 'Blog-ready', 'Social links'],
  },
  {
    id: '06',
    title: 'Payment Integration',
    category: 'Checkout',
    deliverable: 'Payment system',
    timeline: '1–2 wks',
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