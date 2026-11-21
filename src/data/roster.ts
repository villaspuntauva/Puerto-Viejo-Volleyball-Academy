/**
 * PVVA seasonal roster.
 *
 * How it works
 * - `athletes` holds each person once: name, photo, measurements, biography, achievements.
 * - `seasons` lists who was on the roster in each season, with that season's number and position.
 * - The season marked `current: true` is shown at /athletes/. Every other season has its own page
 *   under /athletes/seasons/<id>/ and appears in the season menu.
 * - When an athlete leaves, do NOT delete them: just leave them out of the new season's roster.
 *   They stay on the seasons they played and their profile stays online.
 * - Only publish information the athlete (and a parent or guardian for minors) has approved.
 *   Leave a field out and it is simply hidden. Show year of birth only, never a full date of birth.
 *
 * Photos: portrait photos live in /public/images/roster/ as <slug>-pvva.webp (about 800px wide).
 * Athletes without a photo get a branded placeholder.
 *
 * Entries marked `sample: true` are layout placeholders: the roster then shows a "sample roster"
 * notice and those profiles are hidden from search.
 */

export type Locale = 'en' | 'es';
export type Text = { en: string; es: string };

export interface Achievement {
  /** Optional year or season label shown before the achievement. */
  year?: string;
  text: Text;
}

export interface Athlete {
  /** Used in the profile URL: /athletes/<slug>/. Lowercase, hyphens, never "seasons". */
  slug: string;
  /** Name shown on the site. */
  name: string;
  /** Legal/full name; shown on the profile when it differs from `name`. Last word is used for sorting. */
  fullName: string;
  /** File name in /public/images/roster/. */
  photo?: string;
  yearOfBirth?: number;
  hometown?: Text;
  /** Height in inches (e.g. 5′11″ = 71). */
  heightIn?: number;
  weightLb?: number;
  experience?: Text;
  currentClub?: string;
  previousClubs?: string[];
  /** Biography paragraphs. */
  bio?: { en: string[]; es: string[] };
  achievements?: Achievement[];
  /** Heading for the achievements list, if not "Competitive achievements". */
  achievementsTitle?: Text;
  sample?: boolean;
}

export interface RosterEntry {
  /** Athlete slug. */
  athlete: string;
  number?: string;
  position?: Text;
}

export interface Season {
  /** Used in the season URL: /athletes/seasons/<id>/. */
  id: string;
  label: Text;
  current?: boolean;
  roster: RosterEntry[];
}

export const positions = {
  blocker: { en: 'Blocker', es: 'Bloqueo' },
  defender: { en: 'Defender', es: 'Defensa' },
  split: { en: 'Split blocker', es: 'Bloqueo y defensa' },
} satisfies Record<string, Text>;

const years = (n: number): Text => ({ en: `${n} years`, es: `${n} años` });
const ft = (feet: number, inches: number) => feet * 12 + inches;

export const athletes: Athlete[] = [
  {
    slug: 'leon-pulido',
    name: 'León Pulido',
    fullName: 'León Pulido',
    photo: 'leon-pulido-pvva.webp',
    yearOfBirth: 2008,
    heightIn: ft(5, 11),
    weightLb: 141,
    hometown: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    experience: years(5),
    currentClub: 'PVVA',
    bio: {
      en: ['León Pulido is a defender from Santiago, Chile, with five years of volleyball experience. His competitive record includes titles and podium finishes across Costa Rica, Canada, and Colombia. In 2026, León won the overall Costa Rica U19 National Circuit championship, earned gold and silver medals in Ontario’s Premier divisions, and captured U19 gold at Seven Colors in San Andrés, Colombia. He continues his development as part of Puerto Viejo Volleyball Academy.'],
      es: ['León Pulido es un defensa de Santiago, Chile, con cinco años de experiencia en el voleibol. Su trayectoria competitiva incluye títulos y podios en Costa Rica, Canadá y Colombia. En 2026, León ganó el campeonato general del Circuito Nacional Sub-19 de Costa Rica, obtuvo medallas de oro y plata en las divisiones Premier de Ontario y conquistó el oro Sub-19 en Seven Colors, en San Andrés, Colombia. Continúa su desarrollo como parte de Puerto Viejo Volleyball Academy.'],
    },
    achievements: [
      { year: '2026', text: { en: 'Gold — Costa Rica U19 National Circuit, overall championship.', es: 'Oro — Circuito Nacional Sub-19 de Costa Rica, campeonato general.' } },
      { year: '2026', text: { en: 'Gold — OVA U17 Premier, Canada.', es: 'Oro — OVA U17 Premier, Canadá.' } },
      { year: '2026', text: { en: 'Silver — OVA U18 Premier, Canada.', es: 'Plata — OVA U18 Premier, Canadá.' } },
      { year: '2026', text: { en: 'Gold — Seven Colors, U19, San Andrés, Colombia.', es: 'Oro — Seven Colors, Sub-19, San Andrés, Colombia.' } },
    ],
  },
  {
    slug: 'christopher-tomaselli',
    name: 'Christopher Tomaselli',
    fullName: 'Christopher Anthony Tomaselli',
    photo: 'christopher-tomaselli-pvva.webp',
    yearOfBirth: 2009,
    heightIn: ft(6, 3),
    weightLb: 143,
    hometown: { en: 'Victoria, British Columbia, Canada', es: 'Victoria, Columbia Británica, Canadá' },
    experience: { en: '5–6 years', es: '5–6 años' },
    currentClub: 'PVVA',
    previousClubs: ['Caribe'],
    bio: {
      en: ['Christopher Tomaselli is a Canadian defender who has spent most of his life in Costa Rica. He began playing volleyball with friends before developing a deeper commitment to training and competition. His 2026 achievements include podium finishes at the Ontario Championships and gold medals in Colombia and Costa Rica. Christopher’s goal is to compete in larger international tournaments, explore new opportunities through volleyball, and build lasting memories to share with friends and family.'],
      es: ['Christopher Tomaselli es un defensa canadiense que ha vivido la mayor parte de su vida en Costa Rica. Empezó a jugar voleibol con amigos antes de desarrollar un compromiso más profundo con el entrenamiento y la competencia. Entre sus logros de 2026 están varios podios en los Campeonatos de Ontario y medallas de oro en Colombia y Costa Rica. La meta de Christopher es competir en torneos internacionales más grandes, descubrir nuevas oportunidades a través del voleibol y crear recuerdos duraderos para compartir con sus amigos y su familia.'],
    },
    achievements: [
      { year: '2026', text: { en: 'Gold — Ontario Championships, U17 Premier, Canada.', es: 'Oro — Campeonato de Ontario, U17 Premier, Canadá.' } },
      { year: '2026', text: { en: 'Bronze — Ontario Championships, U18 Premier, Canada.', es: 'Bronce — Campeonato de Ontario, U18 Premier, Canadá.' } },
      { year: '2026', text: { en: 'Gold — Seven Colors, U19, Colombia.', es: 'Oro — Seven Colors, Sub-19, Colombia.' } },
      { year: '2026', text: { en: 'Gold — Costa Rica U19 National Circuit, overall championship.', es: 'Oro — Circuito Nacional Sub-19 de Costa Rica, campeonato general.' } },
    ],
  },
  {
    slug: 'michael-tang',
    name: 'Michael Tang',
    fullName: 'Michael Tang',
    photo: 'michael-tang-pvva.webp',
    yearOfBirth: 2012,
    heightIn: ft(5, 10),
    weightLb: 165,
    hometown: { en: 'Mississauga, Canada', es: 'Mississauga, Canadá' },
    experience: years(4),
    currentClub: 'PVVA',
    previousClubs: ['Caribe'],
    bio: {
      en: ['Michael Tang is a defender from Mississauga, Canada, with four years of beach volleyball experience. Following his time with Caribe, he continued his development at PVVA. His competitive achievements include a 2026 Volleyball Canada Beach Nationals title in U14 D1T1, silver medals at the Ontario Beach Championships, and U15 gold at Seven Colors in Colombia. His team also ranked second in Costa Rica’s U17 category in 2026. Michael’s current focus is strengthening his composure and performing at his best under pressure.'],
      es: ['Michael Tang es un defensa de Mississauga, Canadá, con cuatro años de experiencia en el voleibol de playa. Después de su etapa en Caribe, continuó su desarrollo en PVVA. Entre sus logros competitivos están el título del Campeonato Nacional de Voleibol de Playa de Volleyball Canada 2026 en U14 D1T1, medallas de plata en el Campeonato de Voleibol de Playa de Ontario y el oro Sub-15 en Seven Colors, en Colombia. Su equipo también ocupó el segundo lugar de la categoría Sub-17 de Costa Rica en 2026. Actualmente, Michael se enfoca en fortalecer su temple y rendir al máximo bajo presión.'],
    },
    achievements: [
      { year: '2026', text: { en: 'Gold — Volleyball Canada Beach Nationals, U14, D1T1.', es: 'Oro — Campeonato Nacional de Voleibol de Playa de Volleyball Canada, U14, D1T1.' } },
      { year: '2025', text: { en: 'Silver — Ontario Beach Championships, U13, D1T1.', es: 'Plata — Campeonato de Voleibol de Playa de Ontario, U13, D1T1.' } },
      { year: '2026', text: { en: 'Silver — Ontario Beach Championships, U14, D1T1.', es: 'Plata — Campeonato de Voleibol de Playa de Ontario, U14, D1T1.' } },
      { year: '2026', text: { en: 'Ranked second as a team in Costa Rica’s U17 category.', es: 'Segundo lugar por equipos en la categoría Sub-17 de Costa Rica.' } },
      // Year not yet provided.
      { text: { en: 'Gold — Seven Colors Tournament, U15, Colombia.', es: 'Oro — Torneo Seven Colors, Sub-15, Colombia.' } },
      { text: { en: '21 total medals across his competitive career.', es: '21 medallas en total a lo largo de su carrera competitiva.' } },
    ],
  },
  {
    slug: 'moses-harkness',
    name: 'Moses Harkness',
    fullName: 'Moses Harkness',
    photo: 'moses-harkness-pvva.webp',
    yearOfBirth: 2011,
    heightIn: ft(5, 10),
    weightLb: 165,
    hometown: { en: 'Pittsburgh, Pennsylvania, USA', es: 'Pittsburgh, Pensilvania, EE. UU.' },
    experience: years(7),
    currentClub: 'PVVA',
    previousClubs: ['Caribe'],
    bio: {
      en: ['Moses Harkness is a defender from Pittsburgh, Pennsylvania, with seven years of volleyball experience. Encouraged to try the sport at eight years old, he developed a lasting passion for volleyball and continued his development through Caribe and PVVA. Moses’s goals are to strengthen his skills, gain competitive experience, and work toward playing at higher levels.'],
      es: ['Moses Harkness es un defensa de Pittsburgh, Pensilvania, con siete años de experiencia en el voleibol. Animado a probar el deporte a los ocho años, desarrolló una pasión duradera por el voleibol y continuó su desarrollo en Caribe y PVVA. Las metas de Moses son fortalecer sus habilidades, ganar experiencia competitiva y trabajar para jugar en niveles más altos.'],
    },
    // No competitive results submitted yet, so the achievements section stays hidden.
  },
  {
    slug: 'joshua-craig',
    name: 'Joshua Craig',
    fullName: 'Joshua Alexander Craig',
    photo: 'joshua-craig-pvva.webp',
    yearOfBirth: 2009,
    heightIn: ft(6, 4),
    weightLb: 180,
    hometown: { en: 'Brighton Beach, New Jersey, USA', es: 'Brighton Beach, Nueva Jersey, EE. UU.' },
    experience: { en: 'Approximately 2 years', es: 'Aproximadamente 2 años' },
    currentClub: 'PVVA',
    bio: {
      en: ['Joshua Craig is a blocker from Brighton Beach, New Jersey, with approximately two years of volleyball experience. He values the friendships and sense of community that the sport creates, particularly the connections he has built with his teammates. His competitive achievements include a U15 Campeonato Nacional title in 2025. At PVVA, Joshua continues developing his game alongside the people who make volleyball meaningful to him.'],
      es: ['Joshua Craig es un bloqueador de Brighton Beach, Nueva Jersey, con aproximadamente dos años de experiencia en el voleibol. Valora las amistades y el sentido de comunidad que crea el deporte, en especial los lazos que ha formado con sus compañeros de equipo. Entre sus logros competitivos está el título del Campeonato Nacional Sub-15 en 2025. En PVVA, Joshua sigue desarrollando su juego junto a las personas que hacen que el voleibol tenga sentido para él.'],
    },
    achievements: [
      { year: '2025', text: { en: 'Gold — Campeonato Nacional Sub-15, May 5.', es: 'Oro — Campeonato Nacional Sub-15, 5 de mayo.' } },
    ],
  },
  {
    slug: 'rakasta-irwin',
    name: 'Rakasta “Raka” Irwin',
    fullName: 'Rakasta Irwin',
    photo: 'rakasta-irwin-pvva.webp',
    yearOfBirth: 2009,
    heightIn: ft(6, 2),
    weightLb: 176,
    hometown: { en: 'Asheville, North Carolina, USA', es: 'Asheville, Carolina del Norte, EE. UU.' },
    experience: years(2),
    currentClub: 'PVVA',
    previousClubs: ['Caribe', 'Seabreeze Beach Volleyball Club'],
    bio: {
      en: ['Rakasta “Raka” Irwin is a defender from Asheville, North Carolina, with two years of beach volleyball experience across Caribe, Seabreeze Beach Volleyball Club, and PVVA. His 2026 results include two tournament victories and a fifth-place finish at the USA Beach National Championship in Boys 18U Open. A lifelong athlete, Raka hopes to continue playing through college and beyond while using beach volleyball to build connections and explore the world. Inspired by Coach Yulius and other mentors, he also wants to help others find opportunities in the sport.'],
      es: ['Rakasta “Raka” Irwin es un defensa de Asheville, Carolina del Norte, con dos años de experiencia en el voleibol de playa entre Caribe, Seabreeze Beach Volleyball Club y PVVA. Sus resultados de 2026 incluyen dos victorias en torneos y un quinto lugar en el Campeonato Nacional de Voleibol de Playa de EE. UU., en la categoría Boys 18U Open. Atleta de toda la vida, Raka espera seguir jugando en la universidad y más allá, y usar el voleibol de playa para crear conexiones y conocer el mundo. Inspirado por el entrenador Yulius y otros mentores, también quiere ayudar a otras personas a encontrar oportunidades en este deporte.'],
    },
    achievements: [
      { year: '2026', text: { en: 'Gold — First stop of the FECOVOL U19 Tour.', es: 'Oro — Primera parada del Tour Sub-19 de FECOVOL.' } },
      { year: '2026', text: { en: 'Gold — Seabreeze Beach Bash, 18U.', es: 'Oro — Seabreeze Beach Bash, 18U.' } },
      { year: '2026', text: { en: 'Fifth place — USA Beach National Championship, Boys 18U Open.', es: 'Quinto lugar — Campeonato Nacional de Voleibol de Playa de EE. UU., Boys 18U Open.' } },
    ],
  },
  {
    slug: 'elijah-damato',
    name: 'Elijah Damato',
    fullName: 'Elijah Henry Damato',
    photo: 'elijah-damato-pvva.webp',
    yearOfBirth: 2007,
    heightIn: ft(6, 2),
    weightLb: 148,
    hometown: { en: 'Glastonbury, Connecticut, USA', es: 'Glastonbury, Connecticut, EE. UU.' },
    // No years-of-experience figure for Elijah, by request.
    currentClub: 'PVVA',
    previousClubs: ['Caribe'],
    bio: {
      en: ['Elijah Damato is a blocker from Glastonbury, Connecticut, who was introduced to volleyball through his older brother. After taking time away from the sport, he returned with a renewed enthusiasm for training and competition. Following his time with Caribe, Elijah joined PVVA and continues to train regularly. He represented Goicoechea in U22 Juegos Nacionales qualifying competition in 2026 and is working toward his goal of winning Juegos Nacionales in 2027 alongside his friend and teammate León Pulido.'],
      es: ['Elijah Damato es un bloqueador de Glastonbury, Connecticut, que conoció el voleibol gracias a su hermano mayor. Después de alejarse un tiempo del deporte, regresó con un entusiasmo renovado por el entrenamiento y la competencia. Tras su etapa en Caribe, Elijah se unió a PVVA y sigue entrenando con regularidad. En 2026 representó a Goicoechea en la fase clasificatoria Sub-22 de los Juegos Nacionales y trabaja para cumplir su meta de ganar los Juegos Nacionales en 2027 junto a su amigo y compañero León Pulido.'],
    },
    achievementsTitle: { en: 'Competitive experience', es: 'Experiencia competitiva' },
    achievements: [
      { year: '2026', text: { en: 'Represented Goicoechea in U22 Juegos Nacionales qualifiers.', es: 'Representó a Goicoechea en la fase clasificatoria Sub-22 de los Juegos Nacionales.' } },
    ],
  },
  {
    slug: 'benjamin-tomaselli',
    name: 'Benjamin “Benny” Tomaselli',
    fullName: 'Benjamin Chase Tomaselli',
    photo: 'benjamin-tomaselli-pvva.webp',
    yearOfBirth: 2011,
    heightIn: ft(5, 11),
    weightLb: 128,
    hometown: { en: 'Puerto Viejo, Costa Rica', es: 'Puerto Viejo, Costa Rica' },
    experience: years(5),
    currentClub: 'PVVA',
    previousClubs: ['Caribe'],
    bio: {
      en: ['Benjamin “Benny” Tomaselli is a blocker from Puerto Viejo, Costa Rica, with five years of volleyball experience. He started playing in Costa Rica around age ten and began competing in Costa Rica and Canada in 2025. In 2026, he won U15 gold at the Ontario Beach Championships and the Seven Colors SAI Tournament in Colombia. Benny hopes to travel through beach volleyball and compete at a high level around the world.'],
      es: ['Benjamin “Benny” Tomaselli es un bloqueador de Puerto Viejo, Costa Rica, con cinco años de experiencia en el voleibol. Comenzó a jugar en Costa Rica alrededor de los diez años y empezó a competir en Costa Rica y Canadá en 2025. En 2026 ganó el oro Sub-15 en el Campeonato de Voleibol de Playa de Ontario y en el Torneo Seven Colors SAI, en Colombia. Benny espera viajar gracias al voleibol de playa y competir a alto nivel en todo el mundo.'],
    },
    achievements: [
      { year: '2026', text: { en: 'Gold — Ontario Beach Championships, U15 Challenger, Canada.', es: 'Oro — Campeonato de Voleibol de Playa de Ontario, U15 Challenger, Canadá.' } },
      { year: '2026', text: { en: 'Gold — Seven Colors SAI Tournament, U15, San Andrés, Colombia.', es: 'Oro — Torneo Seven Colors SAI, Sub-15, San Andrés, Colombia.' } },
    ],
  },
];

export const seasons: Season[] = [
  {
    id: '2026',
    label: { en: '2026 Season', es: 'Temporada 2026' },
    current: true,
    roster: [
      { athlete: 'leon-pulido', position: positions.defender },
      { athlete: 'christopher-tomaselli', position: positions.defender },
      { athlete: 'michael-tang', position: positions.defender },
      { athlete: 'moses-harkness', position: positions.defender },
      { athlete: 'joshua-craig', position: positions.blocker },
      { athlete: 'rakasta-irwin', position: positions.defender },
      { athlete: 'elijah-damato', position: positions.blocker },
      { athlete: 'benjamin-tomaselli', position: positions.blocker },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────

const athleteBySlug = new Map(athletes.map((athlete) => [athlete.slug, athlete]));

export const currentSeason = seasons.find((season) => season.current) ?? seasons[0];

/** Seasons newest first (by id). */
export const seasonsNewestFirst = [...seasons].sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));

export function getAthlete(slug: string) {
  const athlete = athleteBySlug.get(slug);
  if (!athlete) throw new Error(`Roster entry refers to unknown athlete "${slug}". Add them to athletes in src/data/roster.ts.`);
  return athlete;
}

export type RosterRow = RosterEntry & { profile: Athlete };

const sortKey = (athlete: Athlete) => {
  const parts = athlete.fullName.trim().split(/\s+/);
  return `${parts.at(-1)} ${parts.slice(0, -1).join(' ')}`;
};

/** A season's roster with athlete details, ordered by number, then last name. */
export function seasonRoster(season: Season): RosterRow[] {
  return season.roster
    .map((entry) => ({ ...entry, profile: getAthlete(entry.athlete) }))
    .sort((a, b) => {
      const an = a.number ? Number(a.number) : Infinity;
      const bn = b.number ? Number(b.number) : Infinity;
      return an - bn || sortKey(a.profile).localeCompare(sortKey(b.profile), 'es');
    });
}

/** Every season an athlete appeared in, newest first. */
export function athleteSeasons(slug: string) {
  return seasonsNewestFirst.flatMap((season) => {
    const entry = season.roster.find((row) => row.athlete === slug);
    return entry ? [{ season, entry }] : [];
  });
}

export const isCurrentAthlete = (slug: string) => currentSeason.roster.some((row) => row.athlete === slug);

/** Athletes who appear on at least one season (only these get a profile page). */
export const listedAthletes = athletes.filter((athlete) => athleteSeasons(athlete.slug).length > 0);

// ── URLs ─────────────────────────────────────────────────────────

export const rosterHref = (lang: Locale) => (lang === 'es' ? '/es/atletas/' : '/athletes/');

export const seasonHref = (season: Season, lang: Locale) =>
  season.current ? rosterHref(lang) : `${rosterHref(lang)}${lang === 'es' ? 'temporadas' : 'seasons'}/${season.id}/`;

export const profileHref = (athlete: Athlete, lang: Locale) => `${rosterHref(lang)}${athlete.slug}/`;

export const photoSrc = (athlete: Athlete) => (athlete.photo ? `/images/roster/${athlete.photo}` : undefined);

// ── Formatting ───────────────────────────────────────────────────

export function formatHeight(inches: number | undefined, lang: Locale) {
  if (!inches) return undefined;
  const imperial = `${Math.floor(inches / 12)}′${inches % 12}″`;
  const metres = ((inches * 2.54) / 100).toFixed(2);
  return lang === 'es' ? `${metres.replace('.', ',')} m (${imperial})` : `${imperial} (${metres} m)`;
}

export function formatWeight(lb: number | undefined, lang: Locale) {
  if (!lb) return undefined;
  const kg = Math.round(lb / 2.20462);
  return lang === 'es' ? `${kg} kg (${lb} lb)` : `${lb} lb (${kg} kg)`;
}

export const initials = (name: string) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();

export const rosterText = {
  en: {
    eyebrow: 'The roster / PVVA',
    title: 'Every athlete has a next step.',
    intro: 'Meet the athletes training and competing with Puerto Viejo Volleyball Academy this season.',
    season: 'Season',
    seasons: 'Seasons',
    currentSeason: 'Current season',
    pastSeason: 'Past season',
    viewCurrent: 'View the current roster',
    athletes: (n: number) => `${n} ${n === 1 ? 'athlete' : 'athletes'}`,
    grid: 'Grid',
    list: 'List',
    view: 'Roster view',
    number: 'No.',
    name: 'Name',
    position: 'Position',
    height: 'Height',
    weight: 'Weight',
    hometown: 'Hometown',
    profile: 'Profile',
    fullProfile: 'Full profile',
    empty: 'This season’s roster will be published soon.',
    sampleNotice: 'Sample roster: these entries show the layout only. They will be replaced with approved athlete details before launch.',
    consent: 'Athlete profiles are published with the athlete’s approval and, for minors, a parent or guardian’s consent.',
    backToRoster: 'Back to roster',
    biography: 'Biography',
    achievements: 'Achievements',
    seasonHistory: 'Season history',
    playerInfo: 'Player information',
    fullName: 'Full name',
    yearOfBirth: 'Year of birth',
    experience: 'Playing experience',
    currentClub: 'Current club',
    previousClub: 'Previous club',
    previousClubs: 'Previous clubs',
    achievementsDefault: 'Competitive achievements',
    formerAthlete: 'Former PVVA athlete',
    lastSeason: 'Last season',
    previous: 'Previous athlete',
    next: 'Next athlete',
    bioPending: 'Biography coming soon.',
    sampleProfile: 'Sample profile',
  },
  es: {
    eyebrow: 'El roster / PVVA',
    title: 'Cada atleta tiene un próximo paso.',
    intro: 'Conoce a los atletas que entrenan y compiten con Puerto Viejo Volleyball Academy esta temporada.',
    season: 'Temporada',
    seasons: 'Temporadas',
    currentSeason: 'Temporada actual',
    pastSeason: 'Temporada anterior',
    viewCurrent: 'Ver el roster actual',
    athletes: (n: number) => `${n} ${n === 1 ? 'atleta' : 'atletas'}`,
    grid: 'Cuadrícula',
    list: 'Lista',
    view: 'Vista del roster',
    number: 'N.º',
    name: 'Nombre',
    position: 'Posición',
    height: 'Estatura',
    weight: 'Peso',
    hometown: 'Lugar de origen',
    profile: 'Perfil',
    fullProfile: 'Perfil completo',
    empty: 'El roster de esta temporada se publicará pronto.',
    sampleNotice: 'Roster de ejemplo: estas entradas solo muestran el diseño. Se reemplazarán con información aprobada de los atletas antes del lanzamiento.',
    consent: 'Los perfiles se publican con la aprobación del atleta y, en el caso de menores de edad, con el consentimiento de su madre, padre o persona encargada.',
    backToRoster: 'Volver al roster',
    biography: 'Biografía',
    achievements: 'Logros',
    seasonHistory: 'Historial de temporadas',
    playerInfo: 'Información del jugador',
    fullName: 'Nombre completo',
    yearOfBirth: 'Año de nacimiento',
    experience: 'Experiencia',
    currentClub: 'Club actual',
    previousClub: 'Club anterior',
    previousClubs: 'Clubes anteriores',
    achievementsDefault: 'Logros competitivos',
    formerAthlete: 'Exatleta de PVVA',
    lastSeason: 'Última temporada',
    previous: 'Atleta anterior',
    next: 'Atleta siguiente',
    bioPending: 'Biografía próximamente.',
    sampleProfile: 'Perfil de ejemplo',
  },
};
