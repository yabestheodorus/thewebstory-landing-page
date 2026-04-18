'use client'

import WorkHero from './WorkHero'
import WorkGrid from './WorkGrid'
import WorkFooter from './WorkFooter'



export default function WorkPage() {

  return (
    <div className="bg-off text-ink min-h-screen">
      <WorkHero />
      <WorkGrid />
      <WorkFooter />
    </div>
  )
}
