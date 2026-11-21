import type { Locale, Text } from './roster';

/**
 * PVVA programs and public pricing.
 *
 * Develop and Compete are flexible training groups inside Team Training. Athletes move between
 * them as they progress, so they are never shown as labels on roster profiles.
 *
 * Prices are entered in colones; USD equivalents are calculated at CRC_PER_USD.
 */

export const CRC_PER_USD = 500;

export interface Price {
  label: Text;
  crc: number;
  /** e.g. "/month". Leave out for one-off prices. */
  per?: Text;
}

export interface Program {
  id: string;
  number: string;
  name: Text;
  audience: Text;
  description: Text;
  pathways?: { name: Text; description: Text }[];
  pathwayNote?: Text;
  prices?: Price[];
  /** Shown when there is no public price. */
  priceNote?: Text;
}

const month: Text = { en: '/month', es: '/mes' };

export const programs: Program[] = [
  {
    id: 'team-training',
    number: '01',
    name: { en: 'Team Training', es: 'Entrenamiento en equipo' },
    audience: { en: 'Boys’ team program', es: 'Programa de equipo masculino' },
    description: {
      en: 'Structured group training that builds technique, game understanding, and competitive habits in a team environment.',
      es: 'Entrenamiento grupal estructurado para desarrollar técnica, comprensión del juego y hábitos competitivos en un ambiente de equipo.',
    },
    pathways: [
      {
        name: { en: 'Develop', es: 'Develop' },
        description: {
          en: 'Focused on fundamentals, consistency, and building confidence on the sand.',
          es: 'Enfocado en los fundamentos, la consistencia y la confianza en la arena.',
        },
      },
      {
        name: { en: 'Compete', es: 'Compete' },
        description: {
          en: 'Higher-intensity training for athletes preparing for tournament play.',
          es: 'Entrenamiento de mayor intensidad para atletas que se preparan para competir en torneos.',
        },
      },
    ],
    pathwayNote: {
      en: 'Develop and Compete are flexible training groups. Athletes move between them as they progress.',
      es: 'Develop y Compete son grupos de entrenamiento flexibles. Los atletas pueden pasar de uno a otro a medida que progresan.',
    },
    prices: [{ label: { en: 'Boys’ team training', es: 'Entrenamiento en equipo masculino' }, crc: 50_000, per: month }],
  },
  {
    id: 'private-training',
    number: '02',
    name: { en: 'Private Training', es: 'Entrenamiento privado' },
    audience: { en: 'One-on-one coaching', es: 'Entrenamiento individual' },
    description: {
      en: 'Individual sessions built around the areas an athlete most wants to develop.',
      es: 'Sesiones individuales centradas en las áreas que cada atleta más quiere desarrollar.',
    },
    priceNote: { en: 'Pricing on request', es: 'Precio a consultar' },
  },
  {
    id: 'private-group-training',
    number: '03',
    name: { en: 'Private Group Training', es: 'Entrenamiento privado en grupo' },
    audience: { en: 'Your own small group', es: 'Tu propio grupo pequeño' },
    description: {
      en: 'Private sessions for a pair or small group who want to train together with dedicated coaching.',
      es: 'Sesiones privadas para una pareja o un grupo pequeño que quiere entrenar junto con atención dedicada.',
    },
    priceNote: { en: 'Pricing on request', es: 'Precio a consultar' },
  },
  {
    id: 'ladies-volleyball',
    number: '04',
    name: { en: 'Ladies Volleyball', es: 'Voleibol para mujeres' },
    audience: { en: 'Adult women, 18+', es: 'Mujeres adultas, 18+' },
    description: {
      en: 'Beach volleyball sessions for adult women who want to learn, improve, and play in a welcoming group.',
      es: 'Sesiones de voleibol de playa para mujeres adultas que quieren aprender, mejorar y jugar en un grupo acogedor.',
    },
    prices: [
      { label: { en: 'Ladies — single session', es: 'Mujeres — sesión individual' }, crc: 5_000 },
      { label: { en: 'Ladies — eight-session package', es: 'Mujeres — paquete de ocho sesiones' }, crc: 35_000 },
    ],
  },
];

export function formatCRC(amount: number, lang: Locale) {
  return `₡${amount.toLocaleString(lang === 'es' ? 'es-CR' : 'en-US')}`;
}

export function formatUSD(crc: number) {
  const usd = crc / CRC_PER_USD;
  return `US$${Number.isInteger(usd) ? usd : usd.toFixed(2)}`;
}

/** Short price line for program cards, e.g. "₡50,000/month". */
export function priceSummary(program: Program, lang: Locale) {
  if (!program.prices?.length) return program.priceNote?.[lang];
  const amount = (price: Price) => `${formatCRC(price.crc, lang)}${price.per?.[lang] ?? ''}`;
  if (program.prices.length === 1) return amount(program.prices[0]);
  // "₡5,000 single session · ₡35,000 eight-session package"
  return program.prices.map((price) => `${amount(price)} ${price.label[lang].split('—').at(-1)!.trim()}`).join(' · ');
}

export const programText = {
  en: {
    pathways: 'Training pathways',
    pricing: 'Pricing',
    pricingTitle: 'Public pricing',
    program: 'Program',
    crc: 'CRC',
    usd: 'USD',
    rate: `USD amounts are equivalents at ₡${CRC_PER_USD} = US$1.`,
    payment: 'Payment by SINPE Móvil or direct bank deposit to +506 6019 6290.',
    onRequest: 'Private Training and Private Group Training: pricing on request.',
  },
  es: {
    pathways: 'Rutas de entrenamiento',
    pricing: 'Precios',
    pricingTitle: 'Precios públicos',
    program: 'Programa',
    crc: 'CRC',
    usd: 'USD',
    rate: `Los montos en USD son equivalentes a ₡${CRC_PER_USD} = US$1.`,
    payment: 'Pago por SINPE Móvil o depósito bancario directo al +506 6019 6290.',
    onRequest: 'Entrenamiento privado y entrenamiento privado en grupo: precio a consultar.',
  },
};
