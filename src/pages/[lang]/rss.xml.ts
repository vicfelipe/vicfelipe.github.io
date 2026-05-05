import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import type { Lang } from '@/i18n/strings';

export function getStaticPaths() {
  return [{ params: { lang: 'pt' } }, { params: { lang: 'en' } }];
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const collection = lang === 'pt' ? 'pt-articles' : 'en-articles';

  const articles = (await getCollection(collection, (a) => !a.data.draft)).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const title =
    lang === 'pt'
      ? 'Victor Alencastro — Notas técnicas'
      : 'Victor Alencastro — Technical notes';

  const description =
    lang === 'pt'
      ? 'Notas de produção, postmortems e padrões de engenharia.'
      : 'Production notes, postmortems and engineering patterns.';

  return rss({
    title,
    description,
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: new Date(article.data.date),
      link: `/${lang}/posts/${article.id.replace(/\.[^.]+$/, '')}`,
    })),
    customData: `<language>${lang === 'pt' ? 'pt-BR' : 'en-US'}</language>`,
  });
}
