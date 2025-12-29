import { MetadataRoute } from 'next';
import { PRODUCTS } from '../lib/products';
import { SITE_CONFIG } from '../lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.DOMAIN;

  // Halaman Statis
  const staticRoutes = [
    '',
    '/galeri',
    '/kontak',
    '/pricelist',
    '/proses-kredit',
    '/simulasi-kredit',
    '/test-drive',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Halaman Produk Dinamis
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
