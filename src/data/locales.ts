export const englishToSpanishRoutes: Record<string, string> = {
  '/': '/es/',
  '/academy/': '/es/academia/',
  '/athletes/': '/es/atletas/',
  '/coaches/': '/es/entrenadores/',
  '/schedule/': '/es/horarios/',
  '/camps/': '/es/campamentos/',
  '/tournaments/': '/es/torneos/',
  '/events/': '/es/eventos/',
  '/join/': '/es/inscripcion/',
  '/contact/': '/es/contacto/',
  '/gallery/': '/es/galeria/',
  '/privacy/': '/es/privacidad/',
  '/support/': '/es/apoyo/',
};

export const spanishToEnglishRoutes = Object.fromEntries(
  Object.entries(englishToSpanishRoutes).map(([english, spanish]) => [spanish, english]),
) as Record<string, string>;

/** Route prefixes whose sub-pages (seasons, athlete profiles) mirror each other. Most specific first. */
const prefixRoutes: [english: string, spanish: string][] = [
  ['/athletes/seasons/', '/es/atletas/temporadas/'],
  ['/athletes/', '/es/atletas/'],
];

function counterpartOf(pathname: string, locale: 'en' | 'es') {
  const exact = (locale === 'es' ? spanishToEnglishRoutes : englishToSpanishRoutes)[pathname];
  if (exact) return exact;
  for (const [english, spanish] of prefixRoutes) {
    const [from, to] = locale === 'es' ? [spanish, english] : [english, spanish];
    if (pathname.startsWith(from)) return to + pathname.slice(from.length);
  }
  return undefined;
}

export function getLanguageHref(pathname: string, locale: 'en' | 'es') {
  return counterpartOf(pathname, locale) ?? (locale === 'es' ? '/' : '/es/');
}

export function getLanguageAlternates(pathname: string, locale: 'en' | 'es') {
  const counterpart = counterpartOf(pathname, locale);
  if (!counterpart) return undefined;

  return locale === 'es'
    ? { english: counterpart, spanish: pathname }
    : { english: pathname, spanish: counterpart };
}