import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/components/work/projects'
import ProjectPage from '@/components/work/ProjectPage'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return {}

  const title = `${project.title} — ${project.category} Case Study`
  const description = `${project.description} A case study by thewebstory.id — Jakarta's premium web design agency specializing in ${project.category.toLowerCase()}, motion UI, and conversion-optimized websites for modern brands.`

  return {
    title,
    description,
    keywords: [
      project.title,
      project.client,
      project.category,
      ...project.tags,
      ...(project.services ?? []),
      ...(project.techStack ?? []),
      'web design Jakarta',
      'website design Indonesia',
      'landing page Jakarta',
      'motion UI web design',
      'Next.js web agency Jakarta',
      'premium website Indonesia',
      'thewebstory.id',
      'jasa web design Jakarta',
      'web developer Jakarta',
    ],
    authors: [{ name: 'thewebstory.id', url: 'https://thewebstory.id' }],
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'thewebstory.id',
      locale: 'en_ID',
      tags: [project.category, ...project.tags],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  }
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  const siteUrl = 'https://thewebstory.id'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${siteUrl}/work` },
          { '@type': 'ListItem', position: 3, name: project.title, item: `${siteUrl}/work/${project.slug}` },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${siteUrl}/work/${project.slug}`,
        name: project.title,
        headline: project.headline ?? project.title,
        description: project.description,
        url: project.url,
        dateCreated: project.year,
        genre: project.category,
        keywords: [project.category, ...project.tags, ...(project.services ?? [])].join(', '),
        inLanguage: 'id-ID',
        creator: {
          '@type': 'Organization',
          name: 'thewebstory.id',
          url: siteUrl,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jakarta',
            addressCountry: 'ID',
          },
        },
        about: {
          '@type': 'Organization',
          name: project.client,
        },
        ...(project.testimonial && {
          review: {
            '@type': 'Review',
            reviewBody: project.testimonial.quote,
            author: {
              '@type': 'Person',
              name: project.testimonial.author,
              jobTitle: project.testimonial.role,
            },
          },
        }),
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/work/${project.slug}#webpage`,
        url: `${siteUrl}/work/${project.slug}`,
        name: `${project.title} Case Study`,
        description: project.description,
        isPartOf: { '@id': siteUrl },
        breadcrumb: { '@type': 'BreadcrumbList' },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'ReadAction',
          target: `${siteUrl}/work/${project.slug}`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectPage project={project} />
    </>
  )
}
