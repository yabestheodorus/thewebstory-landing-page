import WorkPage from '@/components/work/WorkPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'A curated selection of premium websites and digital experiences built for brands that value design and results. From high-performance landing pages to immersive storytelling.',
  openGraph: {
    title: 'Our Work | thewebstory.id',
    description: 'A curated selection of premium websites and digital experiences built for brands.',
    url: 'https://thewebstory.id/work',
  }
}

export default function Work() {
  return <WorkPage />
}
