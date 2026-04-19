'use client'

import { projects } from './projects'
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

export default function ProjectPage({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(p => p.id === project.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const accent = accentText[project.color]

  return (
    <main className="bg-off text-ink min-h-screen relative overflow-x-hidden">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />

      {project.challenge && (
        <ProjectSection
          number="01"
          title="The Brief"
          headingId="proj-brief-heading"
          content={project.challenge}
          accentClass={accent}
        />
      )}

      {project.solution && (
        <ProjectSection
          number="02"
          title="The Build"
          headingId="proj-build-heading"
          content={project.solution}
          accentClass={accent}
          hasBg
        />
      )}

      <ProjectDeliverables project={project} />
      <ProjectResults project={project} />
      <ProjectTechStack project={project} />
      <ProjectTestimonial project={project} />
      <ProjectNavigation nextProject={nextProject} />
    </main>
  )
}