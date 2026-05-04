'use client'

import { getProjects } from './projects'
import type { Project } from './projects'
import { accentText } from './project/colorMaps'
import { ProjectHero } from './project/ProjectHero'
import { ProjectOverview } from './project/ProjectOverview'
import { ProjectSection } from './project/ProjectSection'
import { ProjectDeliverables } from './project/ProjectDeliverables'
import { ProjectResults } from './project/ProjectResults'
import { ProjectTechStack } from './project/ProjectTechStack'
import { ProjectTestimonial } from './project/ProjectTestimonial'
import { ProjectNavigation } from './project/ProjectNavigation'

import { Dictionary } from '@/dictionaries/en'

export default function ProjectPage({
  project,
  dict,
  lang,
}: {
  project: Project
  dict: Dictionary
  lang: string
}) {
  const projectsList = getProjects(lang)
  const currentIndex = projectsList.findIndex((p) => p.id === project.id)
  const nextProject = projectsList[(currentIndex + 1) % projectsList.length]
  const accent = accentText[project.color]

  return (
    <main className="bg-secondary text-ink min-h-screen relative overflow-x-hidden">
      <ProjectHero project={project} dict={dict} lang={lang} />
      <ProjectOverview project={project} dict={dict} />

      {project.challenge && (
        <ProjectSection
          number="01"
          title={dict.project_detail.sections.brief}
          headingId="proj-brief-heading"
          content={project.challenge}
          accentClass={accent}
        />
      )}

      {project.solution && (
        <ProjectSection
          number="02"
          title={dict.project_detail.sections.build}
          headingId="proj-build-heading"
          content={project.solution}
          accentClass={accent}
          hasBg
        />
      )}

      <ProjectDeliverables project={project} dict={dict} />
      <ProjectResults project={project} dict={dict} />
      <ProjectTechStack project={project} dict={dict} />
      <ProjectTestimonial project={project} dict={dict} />
      <ProjectNavigation nextProject={nextProject} dict={dict} lang={lang} />
    </main>
  )
}