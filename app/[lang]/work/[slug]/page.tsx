import { notFound } from 'next/navigation'
import { projects } from '@/components/work/projects'
import ProjectPage from '@/components/work/ProjectPage'
import { getDictionary } from '@/lib/get-dictionary'

export async function generateStaticParams() {
  const locales = ['en', 'id']
  const params = []

  for (const locale of locales) {
    for (const project of projects) {
      params.push({ lang: locale, slug: project.slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug, lang } = await params
  const project = projects.find((p) => p.slug === slug)
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
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const dict = await getDictionary(lang as any)

  return <ProjectPage project={project} dict={dict} lang={lang} />
}
