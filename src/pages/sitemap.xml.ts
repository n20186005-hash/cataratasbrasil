import places from '../data/explore.json';
import type { APIRoute } from 'astro';
import { LANGUAGES } from '../i18n/utils';
import { guideSlugs } from '../i18n/visit-guides';

export const GET: APIRoute = ({ site }) => {
  const urls = LANGUAGES.flatMap((lang) => [
    new URL(`/${lang}/`, site),
    ...guideSlugs.map((slug) => new URL(`/${lang}/${slug}/`, site)),
  ]);
  urls.push(...places.map((place) => new URL(`/pt/explore/${place.slug}/`, site)));
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + urls.map((url) => `  <url><loc>${url.href}</loc></url>`).join('\n')
    + '\n</urlset>\n';
  return new Response(sitemap, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
