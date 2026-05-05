import type { CollectionEntry } from 'astro:content';

export function localePath(lang: 'pt' | 'en', path: string): string {
  return lang === 'pt' ? path : `/${lang}${path}`;
}

export function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function entrySlug(id: string): string {
  return id.replace(/\.[^.]+$/, '');
}

export function getTranslationPair(
  ptArticles: CollectionEntry<'pt-articles'>[],
  enArticles: CollectionEntry<'en-articles'>[],
  translationKey: string,
  currentLang: 'pt' | 'en'
): CollectionEntry<'pt-articles'> | CollectionEntry<'en-articles'> | undefined {
  if (currentLang === 'pt') {
    return enArticles.find((a) => a.data.translationKey === translationKey);
  }
  return ptArticles.find((a) => a.data.translationKey === translationKey);
}
