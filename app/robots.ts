import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '../lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Sembunyikan folder sensitif jika ada
    },
    sitemap: `${SITE_CONFIG.DOMAIN}/sitemap.xml`,
  };
}
