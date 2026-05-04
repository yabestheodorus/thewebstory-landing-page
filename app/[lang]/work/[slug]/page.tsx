import { notFound } from 'next/navigation'
import { getProjects, projects } from '@/components/work/projects'
import ProjectPage from '@/components/work/ProjectPage'
import { getDictionary } from '@/lib/get-dictionary'

export async function generateStaticParams() {
  const locales = ['en', 'id']
  const params = []

  // Use base English list for static params generation (slugs are same)
  const baseProjects = getProjects('en')

  for (const locale of locales) {
    for (const project of baseProjects) {
      params.push({ lang: locale, slug: project.slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug, lang } = await params
  const projectsList = getProjects(lang)
  const project = projectsList.find((p) => p.slug === slug)
  if (!project) return {}

  const dict = await getDictionary(lang as any)

  return {
    title: `${project.title} | thewebstory.id`,
    description: project.description,
    keywords: [
      ...project.tags,
      'web design Jakarta Tangerang',
      'website design Indonesia',
      'thewebstory.id',
    ],
  }
}

export default async function Project({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug, lang } = await params
  const projectsList = getProjects(lang)
  const project = projectsList.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const dict = await getDictionary(lang as any)

  return <ProjectPage project={project} dict={dict} lang={lang} />
}
