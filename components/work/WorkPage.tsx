'use client'

import WorkHero from './WorkHero'
import WorkGrid from './WorkGrid'
import WorkFooter from './WorkFooter'
import { Dictionary } from '@/dictionaries/en'

interface WorkPageProps {
  dict: Dictionary['work']
  lang: string
}

export default function WorkPage({ dict, lang }: WorkPageProps) {
  return (
    <div className="bg-off text-ink min-h-screen">
      <WorkHero dict={dict} />
      <WorkGrid dict={dict} />
      <WorkFooter dict={dict} lang={lang} />
    </div>
  )
}
