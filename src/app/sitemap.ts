import { ROUTES } from '@/lib/constants';
import { env } from '@/lib/utils/env';

import type { MetadataRoute } from 'next';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ROUTES.map((route) => {
    const normalizedRoute = `${route.replace(/^\/|\/$/g, '')}`;
    return {
      url: new URL(
        normalizedRoute.replace(/\/+$/, ''),
        env.SITE_URL
      ).toString(),
      lastModified: new Date('2025-04-09T00:00:00Z').toISOString(),
    };
  });

  return [...staticRoutes];
}
