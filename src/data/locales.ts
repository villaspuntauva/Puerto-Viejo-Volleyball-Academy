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
  '/privacy/': '/es/privacidad/',
};

export const spanishToEnglishRoutes = Object.fromEntries(
  Object.entries(englishToSpanishRoutes).map(([english, spanish]) => [spanish, english]),
) as Record<string, string>;

export function getLanguageHref(pathname: string, locale: 'en' | 'es') {
  const routes = locale === 'es' ? spanishToEnglishRoutes : englishToSpanishRoutes;
  return routes[pathname] ?? (locale === 'es' ? '/' : '/es/');
}

export function getLanguageAlternates(pathname: string, locale: 'en' | 'es') {
  const counterpart = (locale === 'es' ? spanishToEnglishRoutes : englishToSpanishRoutes)[pathname];
  if (!counterpart) return undefined;

  return locale === 'es'
    ? { english: counterpart, spanish: pathname }
    : { english: pathname, spanish: counterpart };
}