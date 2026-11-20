import explorePlaces from '../data/explore.json';
import en from '../data/explore.en.json';
import es from '../data/explore.es.json';
import zh from '../data/explore.zh.json';
import ko from '../data/explore.ko.json';
import type { Lang } from './utils';

type ExplorePlace = (typeof explorePlaces)[number];
type ExploreCopy = Pick<ExplorePlace,
  'name' | 'operator' | 'background' | 'observe' | 'walk' | 'photo' | 'question'
  | 'answer' | 'hours' | 'ticket' | 'arrival' | 'steps' | 'extraQuestion'
  | 'extraAnswer' | 'tagline' | 'tip' | 'notice' | 'stay' | 'duration' | 'parking' | 'city'
>;

const translations: Record<Exclude<Lang, 'pt'>, Record<string, ExploreCopy>> = { en, es, zh, ko };

export { explorePlaces };

export function localizedExplorePlace(place: ExplorePlace, lang: Lang) {
  const copy = lang === 'pt' ? place : translations[lang][place.slug];
  if (!copy) throw new Error(`Missing explore translation for ${lang}/${place.slug}`);

  return {
    ...place,
    ...copy,
    category: place.category as 'natureza' | 'cultura' | 'lazer',
    addressLang: place.slug === 'cataratas-del-iguazu-argentina' ? 'es-AR' : 'pt-BR',
  };
}
