import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

// Routes that exist today or are planned in Phase 2.
// Add entries here as new pages are built; they'll be picked up automatically.
const routes: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}[] = [
  { path: '',           priority: 1.0,  changeFrequency: 'weekly'  },
  { path: '/work',      priority: 0.9,  changeFrequency: 'weekly'  },
  { path: '/about',     priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/stack',     priority: 0.7,  changeFrequency: 'monthly' },
  { path: '/experience',priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/writing',   priority: 0.8,  changeFrequency: 'weekly'  },
  { path: '/beyond-code', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/changelog', priority: 0.5,  changeFrequency: 'weekly'  },
  { path: '/contact',   priority: 0.7,  changeFrequency: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}