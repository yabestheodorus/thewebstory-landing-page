import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thewebstory.id'
  const langs = ['en', 'id']
  const routes = ['', '/work', '/approach', '/services', '/about', '/faq', '/contact']
  
  // Package slugs
  const serviceSlugs = [
    'starter',
    'standard',
    'professional',
    'business',
    'addon-payment',
    'addon-shipping'
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  langs.forEach(lang => {
    // Base routes
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })

    // Service routes
    serviceSlugs.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return sitemapEntries
}
