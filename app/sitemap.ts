import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vhpranav.com'

    const routes = [
        '',
        '/about',
        '/contact',
        '/work/design',
        '/work/development',
        '/work/design/alphainterface',
        '/work/design/clockhash',
        '/work/design/marketing',
        '/work/design/portfolio',
        '/work/design/towerwatch',
        '/work/design/velocegrade',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
