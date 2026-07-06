export const LANGUAGES = ['zh', 'en', 'es', 'pt'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'pt';

export const LANG_LABELS: Record<Lang, string> = {
  zh: '中',
  en: 'EN',
  es: 'ES',
  pt: 'PT',
};

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  if (LANGUAGES.includes(seg as Lang)) return seg as Lang;
  return DEFAULT_LANG;
}

export function useTranslations(lang: Lang) {
  return function t(path: string): string {
    const keys = path.split('.');
    // Dynamic import to avoid circular deps — load translations at call time
    let obj: any = null;
    try {
      // We use a lazy require pattern via global state
      obj = (globalThis as any).__translations;
      if (!obj) return path;
    } catch {
      return path;
    }
    for (const k of keys) {
      if (obj && typeof obj === 'object' && k in obj) {
        obj = obj[k];
      } else {
        return path;
      }
    }
    if (typeof obj === 'object' && obj !== null && lang in obj) {
      return obj[lang];
    }
    return path;
  };
}
